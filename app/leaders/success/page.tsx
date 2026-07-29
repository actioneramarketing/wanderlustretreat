import type { Metadata } from "next";
import Link from "next/link";
import {
  leaderApplication,
  leaderOpportunity,
} from "@/data/leader-opportunity";

export const metadata: Metadata = {
  title: "Leader Application Received",
  description: leaderApplication.successMessage,
  robots: {
    index: false,
    follow: false,
  },
};

export default function LeaderApplicationSuccessPage() {
  return (
    <div className="relative flex min-h-[80vh] items-center bg-jungle pt-28 pb-20">
      <div className="container-narrow relative z-10 text-center">
        <p className="eyebrow mb-4 text-gold">Leader Application</p>
        <h1 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">
          Thank You
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          {leaderApplication.successMessage}
        </p>
        <p className="mt-8 text-sm tracking-[0.14em] text-cream/60 uppercase">
          {leaderOpportunity.dates}
          <br />
          {leaderOpportunity.locationLine}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/leaders" className="btn-secondary inline-flex">
            Back to Leader Opportunity
          </Link>
          <Link href="/" className="btn-secondary inline-flex">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
