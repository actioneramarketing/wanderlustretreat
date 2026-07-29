import { futurePathways } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FuturePathways() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={futurePathways.eyebrow}
            heading={futurePathways.heading}
            className="mb-14 max-w-4xl"
          />
        </Reveal>

        <div className="space-y-12 lg:space-y-16">
          {futurePathways.paths.map((path, index) => (
            <Reveal key={path.number} delay={index * 0.04}>
              <article className="grid gap-6 border-t border-[var(--line)] pt-10 lg:grid-cols-[0.28fr_1fr] lg:gap-12">
                <div>
                  <p className="editorial-number text-gold/70">{path.number}</p>
                  <p className="eyebrow mt-4 text-coral">{path.title}</p>
                </div>
                <div>
                  <h3 className="font-serif text-[clamp(1.75rem,3vw,2.4rem)] leading-tight text-ink">
                    {path.heading}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                    {path.copy}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {path.uses.map((use) => (
                      <li
                        key={use}
                        className="meta-label border-b border-teal/30 pb-1 text-cacao"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                  {path.closing ? (
                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {path.closing}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
