import { escapeHtml } from "./sanitize";

export type InquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  stateRegion: string;
  country: string;
  drawing: string;
  revivalArea: string;
  attendingWith: string;
  questions: string;
};

export function buildInquiryEmailHtml(data: InquiryPayload): string {
  const rows: Array<[string, string]> = [
    ["First name", data.firstName],
    ["Last name", data.lastName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["City", data.city],
    ["State / region", data.stateRegion],
    ["Country", data.country],
    ["What is drawing you to the retreat?", data.drawing],
    ["Area most ready for revival", data.revivalArea],
    ["Attending alone or with someone?", data.attendingWith],
    ["Questions", data.questions || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #e8dfd0;font-family:Georgia,serif;font-size:13px;color:#5c4033;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #e8dfd0;font-family:Arial,sans-serif;font-size:15px;color:#1a2e24;vertical-align:top;">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f7f3eb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #e8dfd0;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background:#1a2e24;padding:28px 24px;">
                <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#b8a06a;">New Inquiry</p>
                <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#f7f3eb;line-height:1.25;">The Wanderlust Revival Retreat</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${tableRows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 16px 28px;font-family:Arial,sans-serif;font-size:12px;color:#6b6258;">
                Submitted via the retreat website invitation form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export type LeaderApplicationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  stateRegion: string;
  country: string;
  website: string;
  socialLinks: string;
  currentRole: string;
  workYouLead: string;
  communityAudience: string;
  audienceSize: string;
  workshopIdea: string;
  workConnection: string;
  priorLeadership: string;
  leadershipExperience: string;
  canEnrollThree: string;
  potentialParticipants: string;
  commitmentPath: string;
  firstParticipantNote: string;
  futureRetreatVision: string;
  participantsAsLeaders: string;
  whyAligned: string;
  questions: string;
  submittedAt: string;
};

function emailSection(
  title: string,
  rows: Array<[string, string]>,
): string {
  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #e8dfd0;font-family:Georgia,serif;font-size:13px;color:#5c4033;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #e8dfd0;font-family:Arial,sans-serif;font-size:15px;color:#1a2e24;vertical-align:top;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");

  return `
    <tr>
      <td style="padding:24px 16px 8px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#4a7c7a;">
        ${escapeHtml(title)}
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${tableRows}
        </table>
      </td>
    </tr>`;
}

export function buildLeaderApplicationEmailHtml(
  data: LeaderApplicationPayload,
): string {
  const sections = [
    emailSection("Applicant details", [
      ["First name", data.firstName],
      ["Last name", data.lastName],
      ["Email", data.email],
      ["Phone", data.phone],
      ["City", data.city],
      ["State / region", data.stateRegion],
      ["Country", data.country],
      ["Website", data.website || "—"],
      ["Social-media links", data.socialLinks || "—"],
      ["Current role or business", data.currentRole],
    ]),
    emailSection("Leadership background", [
      ["Work you lead", data.workYouLead],
      ["Prior leadership", data.priorLeadership],
      ["Leadership experience", data.leadershipExperience || "—"],
      ["Why aligned now", data.whyAligned],
    ]),
    emailSection("Audience and team potential", [
      ["Community / audience", data.communityAudience],
      ["Approximate audience size", data.audienceSize],
      ["Can enroll three participants", data.canEnrollThree],
      ["Potential participants", data.potentialParticipants || "—"],
      ["Preferred commitment path", data.commitmentPath],
      [
        "Potential first participant note",
        data.firstParticipantNote || "—",
      ],
      [
        "Participants as future guests / leaders",
        data.participantsAsLeaders || "—",
      ],
    ]),
    emailSection("Workshop concept", [
      ["Workshop idea", data.workshopIdea],
      ["Connection to retreat themes", data.workConnection],
    ]),
    emailSection("Future retreat vision", [
      ["Future retreat vision", data.futureRetreatVision],
    ]),
    emailSection("Questions", [["Questions", data.questions || "—"]]),
    emailSection("Submission", [["Submitted at", data.submittedAt]]),
  ].join("");

  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f7f3eb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:680px;background:#ffffff;border:1px solid #e8dfd0;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background:#1a2e24;padding:28px 24px;">
                <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#b8a06a;">Leader Application</p>
                <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#f7f3eb;line-height:1.25;">The Wanderlust Revival Retreat</h1>
              </td>
            </tr>
            ${sections}
            <tr>
              <td style="padding:20px 16px 28px;font-family:Arial,sans-serif;font-size:12px;color:#6b6258;">
                Submitted via the retreat website leader application form. This is an application, not acceptance.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildLeaderApplicationConfirmationHtml(
  firstName: string,
): string {
  const name = escapeHtml(firstName);
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f7f3eb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e8dfd0;border-radius:8px;">
            <tr>
              <td style="padding:36px 28px;">
                <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#4a7c7a;">The Wanderlust Revival Retreat</p>
                <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#1a2e24;">Thank you, ${name}.</h1>
                <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:16px;line-height:1.65;color:#3d4a42;">
                  Your leader application has been received. The retreat team will review it and contact you regarding fit and next steps.
                </p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#6b6258;">
                  Submitting an application does not reserve a leader position or guarantee acceptance.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildConfirmationEmailHtml(firstName: string): string {
  const name = escapeHtml(firstName);
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f7f3eb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3eb;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e8dfd0;border-radius:8px;">
            <tr>
              <td style="padding:36px 28px;">
                <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#4a7c7a;">The Wanderlust Revival Retreat</p>
                <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#1a2e24;">Thank you, ${name}.</h1>
                <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:16px;line-height:1.65;color:#3d4a42;">
                  Your request has been received. A member of the retreat team will be in touch with next steps.
                </p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#6b6258;">
                  Submitting an inquiry does not reserve a place or obligate you to enroll.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
