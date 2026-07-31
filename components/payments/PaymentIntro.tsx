import { paymentIntro } from "@/data/payment-options";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PaymentIntro() {
  return (
    <section className="section-pad bg-cream-dark !pt-0">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={paymentIntro.eyebrow}
            heading={paymentIntro.heading}
            className="mb-6"
          />
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>{paymentIntro.copy}</p>
            <p>{paymentIntro.review}</p>
            <p className="text-base text-muted">{paymentIntro.agreementNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
