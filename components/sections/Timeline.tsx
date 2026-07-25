import { timeline, timelineIntro } from "@/data/timeline";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section className="section-pad bg-forest text-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={timelineIntro.eyebrow}
            heading={timelineIntro.heading}
            tone="light"
            className="mb-4"
          />
          <p className="mb-14 max-w-2xl text-cream/65">{timelineIntro.note}</p>
        </Reveal>

        <ol className="relative space-y-0 border-l border-cream/15 pl-8 sm:pl-10">
          {timeline.map((step, index) => (
            <Reveal key={step.id} delay={Math.min(index * 0.04, 0.2)}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[2.35rem] size-3 rounded-full bg-coral sm:-left-[2.85rem]"
                  aria-hidden="true"
                />
                <p className="eyebrow mb-2 text-gold">
                  {String(index + 1).padStart(2, "0")} · {step.phase}
                </p>
                <h3 className="font-serif text-2xl text-cream sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
                  {step.copy}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
