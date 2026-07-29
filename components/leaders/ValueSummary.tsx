import { valueSummary } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ValueSummary() {
  return (
    <section className="section-pad bg-jungle text-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            heading={valueSummary.heading}
            tone="light"
            className="mb-12 max-w-4xl"
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col gap-3 sm:gap-2">
            {valueSummary.stack.map((item, index) => (
              <div key={item} className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <p className="font-serif text-2xl text-cream sm:text-3xl">
                  {item}
                </p>
                {index < valueSummary.stack.length - 1 ? (
                  <p
                    className="font-serif text-2xl text-coral sm:text-3xl"
                    aria-hidden="true"
                  >
                    +
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 border border-white/15 bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10">
            <p className="eyebrow mb-3 text-gold">{valueSummary.valueLabel}</p>
            <p className="font-serif text-[clamp(2.8rem,8vw,5rem)] leading-none text-cream">
              <span className="mr-3 text-[0.45em] tracking-[0.12em] uppercase text-cream/70">
                {valueSummary.valuePrefix}
              </span>
              {valueSummary.valueDisplay}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {valueSummary.supporting}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
