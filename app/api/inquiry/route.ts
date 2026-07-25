import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildConfirmationEmailHtml,
  buildInquiryEmailHtml,
  type InquiryPayload,
} from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";

export const runtime = "nodejs";

type Body = InquiryPayload & {
  company?: string;
  consent?: boolean;
};

function isConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.RETREAT_INQUIRY_TO_EMAIL &&
      process.env.RETREAT_INQUIRY_FROM_EMAIL,
  );
}

function validatePayload(body: Body): { ok: true; data: InquiryPayload } | { ok: false; error: string } {
  const data: InquiryPayload = {
    firstName: cleanText(body.firstName, 80),
    lastName: cleanText(body.lastName, 80),
    email: cleanText(body.email, 160),
    phone: cleanText(body.phone, 60),
    city: cleanText(body.city, 100),
    stateRegion: cleanText(body.stateRegion, 100),
    country: cleanText(body.country, 100),
    drawing: cleanText(body.drawing, 3000),
    revivalArea: cleanText(body.revivalArea, 120),
    attendingWith: cleanText(body.attendingWith, 300),
    questions: cleanText(body.questions, 3000),
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.city ||
    !data.stateRegion ||
    !data.country ||
    !data.drawing ||
    !data.revivalArea ||
    !data.attendingWith
  ) {
    return { ok: false, error: "Please complete all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (data.drawing.length < 20) {
    return {
      ok: false,
      error: "Please share a bit more about what is drawing you to the retreat.",
    };
  }

  if (!body.consent) {
    return {
      ok: false,
      error: "Consent is required to submit an inquiry.",
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

  // Honeypot — silently accept to avoid tipping off bots
  if (cleanText(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`inquiry:${ip}`, 5, 60_000);
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
          "Inquiry email is not configured yet. Please contact the retreat team directly, or set RESEND_API_KEY, RETREAT_INQUIRY_TO_EMAIL, and RETREAT_INQUIRY_FROM_EMAIL.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.RETREAT_INQUIRY_TO_EMAIL as string;
  const from = process.env.RETREAT_INQUIRY_FROM_EMAIL as string;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: validated.data.email,
      subject: `Retreat inquiry — ${validated.data.firstName} ${validated.data.lastName}`,
      html: buildInquiryEmailHtml(validated.data),
    });

    if (error) {
      console.error("Resend inquiry error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your inquiry right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    // Optional confirmation to applicant — failure should not fail the inquiry
    try {
      await resend.emails.send({
        from,
        to: [validated.data.email],
        subject: "Your Wanderlust Revival Retreat inquiry",
        html: buildConfirmationEmailHtml(validated.data.firstName),
      });
    } catch (confirmationError) {
      console.error("Confirmation email error:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your inquiry right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
