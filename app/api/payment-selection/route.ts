import { NextResponse } from "next/server";
import { Resend } from "resend";
import { paymentOptions } from "@/data/payment-options";
import {
  buildPaymentSelectionConfirmationHtml,
  buildPaymentSelectionEmailHtml,
  type PaymentSelectionPayload,
} from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";

export const runtime = "nodejs";

type Body = Omit<
  PaymentSelectionPayload,
  "submittedAt" | "selectedOptionLabel"
> & {
  company?: string;
  consent?: boolean;
  paymentAmountConfirmation?: boolean;
};

function isConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      (process.env.RETREAT_PAYMENT_TO_EMAIL ||
        process.env.RETREAT_INQUIRY_TO_EMAIL) &&
      process.env.RETREAT_INQUIRY_FROM_EMAIL,
  );
}

function getDestinationEmail() {
  return (
    process.env.RETREAT_PAYMENT_TO_EMAIL ||
    process.env.RETREAT_INQUIRY_TO_EMAIL ||
    ""
  );
}

function validatePayload(
  body: Body,
):
  | { ok: true; data: PaymentSelectionPayload }
  | { ok: false; error: string } {
  const selectedOption = cleanText(body.selectedOption, 80);
  const option = paymentOptions.find((item) => item.id === selectedOption);

  const data: PaymentSelectionPayload = {
    firstName: cleanText(body.firstName, 80),
    lastName: cleanText(body.lastName, 80),
    email: cleanText(body.email, 160),
    phone: cleanText(body.phone, 60),
    country: cleanText(body.country, 100),
    invitingLeader: cleanText(body.invitingLeader, 160),
    selectedOption,
    selectedOptionLabel: option?.formLabel || selectedOption,
    bankTransferMethod: cleanText(body.bankTransferMethod, 80),
    paymentStatus: cleanText(body.paymentStatus, 160),
    amountAlreadySent: cleanText(body.amountAlreadySent, 80),
    paymentDate: cleanText(body.paymentDate, 40),
    transactionReference: cleanText(body.transactionReference, 300),
    questions: cleanText(body.questions, 3000),
    submittedAt: new Date().toISOString(),
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.country ||
    !data.invitingLeader ||
    !data.selectedOption ||
    !data.paymentStatus
  ) {
    return { ok: false, error: "Please complete all required fields." };
  }

  if (!option) {
    return { ok: false, error: "Please select a valid payment option." };
  }

  if (option.isBank && !data.bankTransferMethod) {
    return {
      ok: false,
      error: "Please select your preferred bank-transfer method.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (!body.consent) {
    return {
      ok: false,
      error: "Please acknowledge the enrollment statements to continue.",
    };
  }

  if (!body.paymentAmountConfirmation) {
    return {
      ok: false,
      error:
        "Please confirm your payment amount and manual payment responsibility to continue.",
    };
  }

  return { ok: true, data };
}

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (cleanText(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`payment-selection:${ip}`, 5, 60_000);
  if (!limited.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many requests. Please wait a moment and try again.",
      },
      { status: 429 },
    );
  }

  const validated = validatePayload(body);
  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, error: validated.error },
      { status: 400 },
    );
  }

  if (!isConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error:
          "Payment email is not configured yet. Please contact the retreat team directly, or set RESEND_API_KEY, RETREAT_INQUIRY_FROM_EMAIL, and RETREAT_PAYMENT_TO_EMAIL or RETREAT_INQUIRY_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = getDestinationEmail();
  const from = process.env.RETREAT_INQUIRY_FROM_EMAIL as string;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: validated.data.email,
      subject: `Wanderlust Payment Selection — ${validated.data.firstName} ${validated.data.lastName} — ${validated.data.selectedOptionLabel}`,
      html: buildPaymentSelectionEmailHtml(validated.data),
    });

    if (error) {
      console.error("Resend payment selection error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your payment selection right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    try {
      await resend.emails.send({
        from,
        to: [validated.data.email],
        subject: "Your Wanderlust payment selection",
        html: buildPaymentSelectionConfirmationHtml(validated.data.firstName),
      });
    } catch (confirmationError) {
      console.error("Payment confirmation email error:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Payment selection submission error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your payment selection right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
