import type { Metadata } from "next";
import Link from "next/link";
import { inquirySection } from "@/data/content";
import { retreatDates, retreatLocation } from "@/data/retreat";

export const metadata: Metadata = {
  title: "Inquiry Received",
  description: inquirySection.successMessage,
  robots: {
    index: false,
    follow: false,
  },
};

export default function InquirySuccessPage() {
  return (
    <div className="relative flex min-h-[80vh] items-center bg-jungle pt-28 pb-20">
      <div className="container-narrow relative z-10 text-center">
        <p className="eyebrow mb-4 text-gold">Invitation Request</p>
        <h1 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">
          Thank You
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          {inquirySection.successMessage}
        </p>
        <p className="mt-8 text-sm tracking-[0.14em] text-cream/60 uppercase">
          {retreatDates.display}
          <br />
          {retreatLocation.shortLine}
        </p>
        <p className="mt-10">
          <Link
            href="/"
            className="btn-secondary inline-flex"
          >
            Return Home
          </Link>
        </p>
      </div>
    </div>
  );
}
