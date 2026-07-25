import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for inquiries submitted through The Wanderlust Revival Retreat website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="section-pad bg-cream pt-32">
      <article className="container-narrow">
        <p className="eyebrow mb-4">Information</p>
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">Privacy</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            When you submit an inquiry through this website, the information you
            provide is used solely to respond to your request and to discuss
            potential participation in The Wanderlust Revival Retreat.
          </p>
          <p>
            Inquiry details may be shared with the retreat team responsible for
            reviewing applications and coordinating enrollment. We do not sell
            your information.
          </p>
          <p>
            Final legal business details, data retention practices, and a
            complete privacy policy will be published before public launch.
          </p>
          <p>
            If you have questions about an inquiry you submitted, please reply
            to the retreat team using the contact channel provided in their
            follow-up message.
          </p>
        </div>
        <p className="mt-10">
          <Link href="/" className="text-teal underline-offset-4 hover:underline">
            Return to the retreat page
          </Link>
        </p>
      </article>
    </div>
  );
}
