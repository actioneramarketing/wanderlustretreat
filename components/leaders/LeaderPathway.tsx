import { leaderPathway } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeaderPathway() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={leaderPathway.eyebrow}
            heading={leaderPathway.heading}
            className="mb-14"
          />
        </Reveal>

        <ol className="relative space-y-0 border-l border-[var(--line)] pl-8 sm:pl-10">
          {leaderPathway.steps.map((step, index) => (
            <Reveal key={step.title} delay={Math.min(index * 0.03, 0.2)}>
              <li className="relative pb-10 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[2.35rem] size-3 rounded-full bg-coral sm:-left-[2.85rem]"
                  aria-hidden="true"
                />
                <p className="eyebrow mb-2 text-teal">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
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
