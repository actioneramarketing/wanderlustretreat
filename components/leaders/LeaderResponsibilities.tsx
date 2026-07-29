import { leaderResponsibilities } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeaderResponsibilities() {
  return (
    <section className="section-pad bg-forest text-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={leaderResponsibilities.eyebrow}
            heading={leaderResponsibilities.heading}
            tone="light"
            className="mb-10 max-w-4xl"
          />
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-cream/75">
            {leaderResponsibilities.closing}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="columns-1 gap-x-12 sm:columns-2">
            {leaderResponsibilities.items.map((item) => (
              <li
                key={item}
                className="mb-4 break-inside-avoid border-l border-coral/50 pl-4 text-base leading-relaxed text-cream/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
