import type { Metadata } from "next";
import { PaymentFaq } from "@/components/payments/PaymentFaq";
import { PaymentFinalCta } from "@/components/payments/PaymentFinalCta";
import { PaymentHero } from "@/components/payments/PaymentHero";
import { PaymentIntro } from "@/components/payments/PaymentIntro";
import { PaymentNotices } from "@/components/payments/PaymentNotices";
import { PaymentOptions } from "@/components/payments/PaymentOptions";
import { PaymentRequestForm } from "@/components/payments/PaymentRequestForm";
import { paymentPage } from "@/data/payment-options";

export const metadata: Metadata = {
  title: {
    absolute: "Retreat Payment Options | The Wanderlust Revival Retreat",
  },
  description:
    "Review approved payment options and enrollment instructions for The Wanderlust Revival Retreat at Villa Wanderlust in Costa Rica.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
  alternates: {
    canonical: "/payments",
  },
  openGraph: {
    title: "Retreat Payment Options | The Wanderlust Revival Retreat",
    description:
      "Invitation-only payment options for The Wanderlust Revival Retreat.",
    url: "/payments",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Retreat Payment Options | The Wanderlust Revival Retreat",
    description:
      "Invitation-only payment options for The Wanderlust Revival Retreat.",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function PaymentsPage() {
  return (
    <>
      <PaymentHero />
      <PaymentIntro />
      <PaymentOptions />
      <PaymentRequestForm />
      <PaymentNotices />
      <PaymentFaq />
      <PaymentFinalCta />
      <p className="sr-only">{paymentPage.pageDisclaimer}</p>
    </>
  );
}
