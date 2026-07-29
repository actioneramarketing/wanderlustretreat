import { leaderBenefits } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeaderBenefits() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={leaderBenefits.eyebrow}
            heading={leaderBenefits.heading}
            className="mb-14 max-w-4xl"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {leaderBenefits.items.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 0.03, 0.18)}>
              <article className="h-full border border-[var(--line)] bg-cream-dark/40 p-7 sm:p-8">
                <p className="eyebrow mb-3 text-coral">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
