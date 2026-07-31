import {
  paymentHero,
  paymentPage,
} from "@/data/payment-options";
import { Reveal } from "@/components/ui/Reveal";

export function PaymentHero() {
  return (
    <section className="section-pad bg-cream pt-28 sm:pt-32">
      <div className="container-editorial">
        <Reveal>
          <div className="inline-flex items-center border border-coral/40 bg-cream-dark/60 px-4 py-2">
            <p className="meta-label text-coral">{paymentHero.badge}</p>
          </div>
          <h1 className="mt-7 max-w-4xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.1] text-ink">
            {paymentHero.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {paymentHero.supporting}
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink">
            {paymentHero.securing}
          </p>
          <div className="mt-8 max-w-3xl border-l-2 border-coral/50 bg-cream-dark/40 py-5 pl-5 pr-4">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              {paymentHero.leaderNotice}
            </p>
          </div>
          <div className="meta-label mt-8 space-y-1 text-muted">
            <p>{paymentPage.dates}</p>
            <p>{paymentPage.locationLine}</p>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {paymentHero.placeNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
