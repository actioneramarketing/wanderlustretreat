import { leaders, leadersIntro } from "@/data/leaders";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

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
                <div
                  className={cn(
                    "mb-6 flex aspect-[4/5] items-center justify-center rounded-sm",
                    leader.status === "confirmed"
                      ? "bg-gradient-to-br from-forest to-jungle"
                      : "bg-gradient-to-br from-sand to-cream-dark",
                  )}
                  aria-hidden="true"
                >
                  <span
                    className={cn(
                      "font-serif text-5xl",
                      leader.status === "confirmed"
                        ? "text-cream/90"
                        : "text-cacao/50",
                    )}
                  >
                    {leader.initials}
                  </span>
                </div>
                <p className="eyebrow mb-2 text-coral">
                  {leader.status === "confirmed" ? "Confirmed" : "Coming soon"}
                </p>
                <h3 className="font-serif text-2xl text-ink">{leader.name}</h3>
                <p className="mt-1 text-sm text-muted">{leader.role}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
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
