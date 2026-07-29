import Link from "next/link";
import { leaderOpportunity } from "@/data/leader-opportunity";
import { leaders, leadersIntro } from "@/data/leaders";
import { ButtonLink } from "@/components/ui/ButtonLink";
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

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
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
                <h3 className="font-serif text-[1.5rem] leading-tight text-ink sm:text-[1.65rem]">
                  {leader.name}
                </h3>
                <p className="mt-1.5 text-[0.9375rem] text-muted">
                  {leader.role}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                  {leader.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-[var(--line)] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-3 text-teal">Lead the Retreat</p>
              <p className="font-serif text-2xl leading-tight text-ink sm:text-3xl">
                Four leader positions are open for those ready to guide a team
                and launch what comes next.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <ButtonLink href={leaderOpportunity.href}>
                Explore the Leader Opportunity
              </ButtonLink>
              <Link
                href={`${leaderOpportunity.href}#leader-application`}
                className="text-sm font-semibold tracking-[0.12em] text-coral uppercase transition-colors hover:text-jungle"
              >
                Apply to become a retreat leader
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
