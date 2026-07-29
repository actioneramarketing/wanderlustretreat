import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildLeaderApplicationConfirmationHtml,
  buildLeaderApplicationEmailHtml,
  type LeaderApplicationPayload,
} from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { cleanText } from "@/lib/sanitize";

export const runtime = "nodejs";

type Body = Omit<LeaderApplicationPayload, "submittedAt"> & {
  company?: string;
  consent?: boolean;
};

function isConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      (process.env.RETREAT_LEADER_APPLICATION_TO_EMAIL ||
        process.env.RETREAT_INQUIRY_TO_EMAIL) &&
      process.env.RETREAT_INQUIRY_FROM_EMAIL,
  );
}

function getDestinationEmail() {
  return (
    process.env.RETREAT_LEADER_APPLICATION_TO_EMAIL ||
    process.env.RETREAT_INQUIRY_TO_EMAIL ||
    ""
  );
}

function validatePayload(
  body: Body,
): { ok: true; data: LeaderApplicationPayload } | { ok: false; error: string } {
  const data: LeaderApplicationPayload = {
    firstName: cleanText(body.firstName, 80),
    lastName: cleanText(body.lastName, 80),
    email: cleanText(body.email, 160),
    phone: cleanText(body.phone, 60),
    city: cleanText(body.city, 100),
    stateRegion: cleanText(body.stateRegion, 100),
    country: cleanText(body.country, 100),
    website: cleanText(body.website, 300),
    socialLinks: cleanText(body.socialLinks, 500),
    currentRole: cleanText(body.currentRole, 200),
    workYouLead: cleanText(body.workYouLead, 4000),
    communityAudience: cleanText(body.communityAudience, 3000),
    audienceSize: cleanText(body.audienceSize, 300),
    workshopIdea: cleanText(body.workshopIdea, 4000),
    workConnection: cleanText(body.workConnection, 3000),
    priorLeadership: cleanText(body.priorLeadership, 500),
    leadershipExperience: cleanText(body.leadershipExperience, 4000),
    canEnrollThree: cleanText(body.canEnrollThree, 500),
    potentialParticipants: cleanText(body.potentialParticipants, 3000),
    futureRetreatVision: cleanText(body.futureRetreatVision, 4000),
    participantsAsLeaders: cleanText(body.participantsAsLeaders, 3000),
    whyAligned: cleanText(body.whyAligned, 4000),
    questions: cleanText(body.questions, 3000),
    submittedAt: new Date().toISOString(),
  };

  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.phone ||
    !data.city ||
    !data.stateRegion ||
    !data.country ||
    !data.currentRole ||
    !data.workYouLead ||
    !data.communityAudience ||
    !data.audienceSize ||
    !data.workshopIdea ||
    !data.workConnection ||
    !data.priorLeadership ||
    !data.canEnrollThree ||
    !data.futureRetreatVision ||
    !data.whyAligned
  ) {
    return { ok: false, error: "Please complete all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (
    data.workYouLead.length < 20 ||
    data.workshopIdea.length < 20 ||
    data.futureRetreatVision.length < 20 ||
    data.whyAligned.length < 20
  ) {
    return {
      ok: false,
      error: "Please share a bit more detail in the longer response fields.",
    };
  }

  if (!body.consent) {
    return {
      ok: false,
      error: "Please acknowledge the application terms to continue.",
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

  const limited = rateLimit(`leader-application:${ip}`, 5, 60_000);
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
          "Leader application email is not configured yet. Please contact the retreat team directly, or set RESEND_API_KEY, RETREAT_INQUIRY_FROM_EMAIL, and RETREAT_LEADER_APPLICATION_TO_EMAIL or RETREAT_INQUIRY_TO_EMAIL.",
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
      subject: `New Wanderlust Leader Application — ${validated.data.firstName} ${validated.data.lastName}`,
      html: buildLeaderApplicationEmailHtml(validated.data),
    });

    if (error) {
      console.error("Resend leader application error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your application right now. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    try {
      await resend.emails.send({
        from,
        to: [validated.data.email],
        subject: "Your Wanderlust leader application",
        html: buildLeaderApplicationConfirmationHtml(validated.data.firstName),
      });
    } catch (confirmationError) {
      console.error("Leader confirmation email error:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Leader application submission error:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your application right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
