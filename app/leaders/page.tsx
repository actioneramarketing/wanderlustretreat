import type { Metadata } from "next";
import { FiveLeaderTeam } from "@/components/leaders/FiveLeaderTeam";
import { FuturePathways } from "@/components/leaders/FuturePathways";
import { LeaderApplicationForm } from "@/components/leaders/LeaderApplicationForm";
import { LeaderBenefits } from "@/components/leaders/LeaderBenefits";
import { LeaderCommitment } from "@/components/leaders/LeaderCommitment";
import { LeaderFaq } from "@/components/leaders/LeaderFaq";
import { LeaderFinalCta } from "@/components/leaders/LeaderFinalCta";
import { LeaderHero } from "@/components/leaders/LeaderHero";
import { LeaderPathway } from "@/components/leaders/LeaderPathway";
import { LeaderResponsibilities } from "@/components/leaders/LeaderResponsibilities";
import { MajorReward } from "@/components/leaders/MajorReward";
import { NotJustARole } from "@/components/leaders/NotJustARole";
import { TeamModel } from "@/components/leaders/TeamModel";
import { ValueSummary } from "@/components/leaders/ValueSummary";
import { WalkAwayWith } from "@/components/leaders/WalkAwayWith";
import { WhoFor } from "@/components/leaders/WhoFor";
import { WorkshopFilming } from "@/components/leaders/WorkshopFilming";
import { leaderOpportunity } from "@/data/leader-opportunity";

const pageTitle = "Lead The Wanderlust Revival Retreat | Costa Rica 2027";
const pageDescription =
  "Apply to become one of four additional leaders for The Wanderlust Revival Retreat. Lead a filmed workshop, build a team of three, and earn the opportunity to host a future week at Villa Wanderlust.";
const ogTitle = "Lead at Wanderlust. Launch What Comes Next.";
const ogDescription =
  "Join the five-person leadership team for The Wanderlust Revival Retreat, lead a filmed workshop, enroll three participants, and earn a future week at Villa Wanderlust.";
const socialShareImage = "/images/retreat/wanderlust-revival-social-share.png";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/leaders",
    images: [
      {
        url: socialShareImage,
        width: 1200,
        height: 675,
        alt: "The Wanderlust Revival Retreat at Villa Wanderlust in Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [socialShareImage],
  },
  alternates: {
    canonical: "/leaders",
  },
};

export default function LeadersOpportunityPage() {
  return (
    <>
      <LeaderHero />
      <NotJustARole />
      <TeamModel />
      <LeaderCommitment />
      <MajorReward />
      <FuturePathways />
      <WorkshopFilming />
      <LeaderBenefits />
      <LeaderResponsibilities />
      <LeaderPathway />
      <WalkAwayWith />
      <WhoFor />
      <FiveLeaderTeam />
      <ValueSummary />
      <LeaderFaq />
      <LeaderApplicationForm />
      <LeaderFinalCta />
      <p className="sr-only">{leaderOpportunity.pageDisclaimer}</p>
    </>
  );
}
