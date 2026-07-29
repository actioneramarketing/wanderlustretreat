import { whoFor, whoNotFor } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoFor() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={whoFor.eyebrow}
              heading={whoFor.heading}
              className="mb-8"
            />
            <ul className="space-y-3.5">
              {whoFor.fits.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base font-semibold text-ink">
              {whoFor.typesIntro}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {whoFor.types.map((type) => (
                <li
                  key={type}
                  className="border border-[var(--line)] bg-cream px-3 py-1.5 text-sm text-ink-soft"
                >
                  {type}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {whoFor.credentialNote}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-sm border border-[var(--line)] bg-cream p-7 sm:p-9">
              <h3 className="font-serif text-[clamp(1.85rem,3vw,2.35rem)] leading-tight text-ink">
                {whoNotFor.heading}
              </h3>
              <ul className="mt-8 space-y-3.5">
                {whoNotFor.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-sand-deep pl-4 text-base leading-relaxed text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
