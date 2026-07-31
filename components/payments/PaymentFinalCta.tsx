import { paymentFinalCta, paymentPage } from "@/data/payment-options";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function PaymentFinalCta() {
  return (
    <section className="section-pad bg-jungle text-cream">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="font-serif text-balance text-4xl leading-tight sm:text-5xl">
            {paymentFinalCta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {paymentFinalCta.copy}
          </p>
          <div className="meta-label mt-8 space-y-2 text-cream/70">
            <p>{paymentPage.dates}</p>
            <p>{paymentPage.locationLine}</p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={paymentFinalCta.primaryHref}>
              {paymentFinalCta.primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={paymentFinalCta.secondaryHref}
              variant="secondary"
            >
              {paymentFinalCta.secondaryLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
