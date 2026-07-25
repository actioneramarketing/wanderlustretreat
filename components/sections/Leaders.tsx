import { leaders, leadersIntro } from "@/data/leaders";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Leaders() {
  return (
    <section id="leaders" className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={leadersIntro.eyebrow}
            heading={leadersIntro.heading}
            description={leadersIntro.copy}
            className="mb-14"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {leaders.map((leader, index) => (
            <Reveal key={leader.id} delay={index * 0.05}>
              <article className="flex h-full flex-col border border-[var(--line)] bg-cream-dark/50 p-6 sm:p-7">
                <div className="mb-6">
                  <LeaderPortrait
                    name={leader.name}
                    initials={leader.initials}
                    image={leader.image}
                    objectPosition={leader.objectPosition}
                    status={leader.status}
                  />
                </div>
                <p className="eyebrow mb-3 text-coral">
                  {leader.status === "confirmed" ? "Confirmed" : "Coming soon"}
                </p>
                <h3 className="font-serif text-[1.65rem] leading-tight text-ink sm:text-[1.85rem]">
                  {leader.name}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] text-muted">{leader.role}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {leader.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
