import { walkAwayWith } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WalkAwayWith() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading heading={walkAwayWith.heading} className="mb-12" />
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {walkAwayWith.items.map((item) => (
              <li
                key={item}
                className="border border-[var(--line)] bg-cream-dark/35 px-5 py-5 text-base leading-relaxed text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            {walkAwayWith.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
