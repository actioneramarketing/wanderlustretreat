import Image from "next/image";
import {
  leaderFinalCta,
  leaderOpportunity,
} from "@/data/leader-opportunity";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function LeaderFinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <Image
        src={leaderFinalCta.image.src}
        alt={leaderFinalCta.image.alt}
        fill
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/80 to-jungle/55" />

      <div className="container-narrow relative z-10 text-center">
        <Reveal>
          <h2 className="font-serif text-balance text-4xl leading-tight whitespace-pre-line text-cream sm:text-5xl lg:text-6xl">
            {leaderFinalCta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {leaderFinalCta.copy}
          </p>
          <div className="meta-label mt-8 space-y-2 text-cream/75">
            <p>{leaderOpportunity.dates}</p>
            <p>{leaderOpportunity.locationLine}</p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={leaderOpportunity.ctas.primary.href}>
              {leaderOpportunity.ctas.primary.label}
            </ButtonLink>
            <ButtonLink
              href={leaderOpportunity.ctas.returnHome.href}
              variant="secondary"
            >
              {leaderOpportunity.ctas.returnHome.label}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
