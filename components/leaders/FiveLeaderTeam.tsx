import {
  confirmedLeadersForDisplay,
  fiveLeaderTeam,
  leaderOpportunity,
} from "@/data/leader-opportunity";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FiveLeaderTeam() {
  const openSlots = Array.from(
    { length: leaderOpportunity.openPositions },
    (_, index) => index + 1,
  );

  return (
    <section className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={fiveLeaderTeam.eyebrow}
            heading={fiveLeaderTeam.heading}
            description={fiveLeaderTeam.copy}
            className="mb-14 max-w-4xl"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {confirmedLeadersForDisplay.map((leader, index) => (
            <Reveal key={leader.id} delay={index * 0.04}>
              <article className="flex h-full flex-col border border-[var(--line)] bg-cream-dark/50 p-5 sm:p-6">
                <div className="mb-5">
                  <LeaderPortrait
                    name={leader.name}
                    initials={leader.initials}
                    image={leader.image}
                    objectPosition={leader.objectPosition}
                    status={leader.status}
                  />
                </div>
                <p className="eyebrow mb-3 text-coral">Confirmed</p>
                <h3 className="font-serif text-[1.45rem] leading-tight text-ink sm:text-[1.6rem]">
                  {leader.name}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{leader.role}</p>
              </article>
            </Reveal>
          ))}

          {openSlots.map((slot, index) => (
            <Reveal
              key={`open-${slot}`}
              delay={(confirmedLeadersForDisplay.length + index) * 0.04}
            >
              <article className="flex h-full flex-col border border-dashed border-teal/40 bg-cream p-5 sm:p-6">
                <div className="mb-5">
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-forest/90 via-jungle to-jungle-deep">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 25%, rgba(184,160,106,0.45), transparent 42%), radial-gradient(circle at 75% 70%, rgba(74,124,122,0.4), transparent 45%)",
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative font-serif text-4xl text-cream/85">
                      {String(slot).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <p className="eyebrow mb-3 text-teal">Open</p>
                <h3 className="font-serif text-[1.45rem] leading-tight text-ink sm:text-[1.6rem]">
                  {fiveLeaderTeam.openCardLabel}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {fiveLeaderTeam.openCardSupporting}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
