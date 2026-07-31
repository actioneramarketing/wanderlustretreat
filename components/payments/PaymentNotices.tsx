import {
  afterPayment,
  enrollmentNotice,
  paymentComparison,
  paymentSafety,
} from "@/data/payment-options";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PaymentNotices() {
  return (
    <>
      <section className="section-pad bg-cream">
        <div className="container-editorial grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-sm border border-[var(--line)] bg-cream-dark/40 p-7 sm:p-9">
              <h2 className="font-serif text-3xl text-ink">
                {afterPayment.heading}
              </h2>
              <ol className="mt-6 space-y-4">
                {afterPayment.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 text-base leading-relaxed text-ink-soft"
                  >
                    <span className="font-semibold text-coral">
                      {index + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="h-full rounded-sm bg-jungle px-7 py-9 text-cream sm:px-9">
              <h2 className="font-serif text-3xl leading-tight">
                {enrollmentNotice.heading}
              </h2>
              <p className="mt-5 text-base text-cream/75">
                {enrollmentNotice.intro}
              </p>
              <ul className="mt-5 space-y-3">
                {enrollmentNotice.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-gold/40 pl-4 text-base leading-relaxed text-cream/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream-dark">
        <div className="container-editorial">
          <Reveal>
            <div className="rounded-sm border border-gold/35 bg-cream px-6 py-8 sm:px-10 sm:py-10">
              <p className="eyebrow mb-4 text-coral">Payment safety</p>
              <h2 className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] text-ink">
                {paymentSafety.heading}
              </h2>
              <ul className="mt-6 space-y-3">
                {paymentSafety.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionHeading
              heading={paymentComparison.heading}
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {paymentComparison.items.map((item) => (
                <article
                  key={item.label}
                  className="border border-[var(--line)] bg-cream-dark/40 px-5 py-6"
                >
                  <p className="eyebrow text-teal">{item.label}</p>
                  <p className="mt-4 font-serif text-4xl text-jungle">
                    {item.amount}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
              {paymentComparison.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
