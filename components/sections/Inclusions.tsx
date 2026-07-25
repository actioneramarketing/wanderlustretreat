import {
  exclusions,
  exclusionsIntro,
  exclusionsNote,
  inclusions,
  inclusionsIntro,
} from "@/data/inclusions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Inclusions() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={inclusionsIntro.eyebrow}
            heading={inclusionsIntro.heading}
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ul className="columns-1 gap-x-10 sm:columns-2">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="mb-4 break-inside-avoid border-l-2 border-teal/40 pl-4 text-base leading-relaxed text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {inclusionsIntro.confirmationNote}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="rounded-sm border border-[var(--line)] bg-cream p-7 sm:p-8">
              <p className="eyebrow mb-4 text-coral">{exclusionsIntro}</p>
              <ul className="space-y-3">
                {exclusions.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {exclusionsNote}
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
