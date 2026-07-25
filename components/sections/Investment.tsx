import { investmentSection } from "@/data/content";
import { primaryCta } from "@/data/navigation";
import { retreatInvestment } from "@/data/retreat";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Investment() {
  return (
    <section id="investment" className="section-pad bg-jungle text-cream">
      <div className="container-editorial grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow={investmentSection.eyebrow}
            heading={investmentSection.heading}
            tone="light"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {investmentSection.copy}
          </p>
          <ul className="mt-8 space-y-3">
            {investmentSection.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base text-cream/75 before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <p className="eyebrow mb-4 text-gold">Retreat experiences from</p>
            <p className="font-serif text-5xl tracking-tight text-cream sm:text-6xl">
              {retreatInvestment.display}
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/70">
              {retreatInvestment.note}
            </p>
            <div className="mt-8">
              <ButtonLink href={primaryCta.href} className="w-full sm:w-auto">
                {primaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-cream/55">
              {investmentSection.secondaryNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
