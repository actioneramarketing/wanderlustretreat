import { teamModel } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamModel() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={teamModel.eyebrow}
            heading={teamModel.heading}
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            {teamModel.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-base font-semibold text-ink">
            {teamModel.environmentIntro}
          </p>
          <ul className="mt-4 space-y-3">
            {teamModel.environmentPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
              >
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted">
            {teamModel.closing}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-[var(--line)] bg-cream px-6 py-10 text-center sm:px-10 sm:py-14">
            <p className="font-serif text-3xl text-ink sm:text-4xl">
              {teamModel.equation.leader}
            </p>
            <p className="my-4 font-serif text-3xl text-coral" aria-hidden="true">
              +
            </p>
            <p className="font-serif text-3xl text-ink sm:text-4xl">
              {teamModel.equation.participants}
            </p>
            <div className="organic-line my-8 opacity-60" />
            <p className="font-serif text-2xl leading-tight text-jungle sm:text-3xl">
              {teamModel.equation.result}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
