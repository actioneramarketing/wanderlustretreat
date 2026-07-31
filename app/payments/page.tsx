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
  },
  alternates: {
    canonical: "/payments",
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
