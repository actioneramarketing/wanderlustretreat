"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  leaderHero,
  leaderOpportunity,
} from "@/data/leader-opportunity";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function LeaderHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[min(860px,calc(100svh-5.5rem))] items-end overflow-hidden sm:min-h-[min(860px,calc(100svh-6rem))]"
      aria-label="Leader opportunity introduction"
    >
      <Image
        src={leaderHero.image.src}
        alt={leaderHero.image.alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: leaderHero.imagePosition }}
      />
      <div className="image-scrim-hero absolute inset-0" aria-hidden="true" />

      <div className="container-wide relative z-10 w-full pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[44rem] lg:max-w-[48rem]"
        >
          <p className="eyebrow mb-5 text-gold">{leaderHero.eyebrow}</p>
          <h1 className="font-serif text-[2.35rem] leading-[1.08] font-medium tracking-tight text-cream sm:text-5xl lg:text-[3.75rem]">
            {leaderHero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {leaderHero.supporting}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {leaderHero.supportingSecondary}
          </p>
          <div className="meta-label mt-6 space-y-1 text-cream/75">
            <p>{leaderOpportunity.dates}</p>
            <p>{leaderOpportunity.locationLine}</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={leaderOpportunity.ctas.primary.href}>
              {leaderOpportunity.ctas.primary.label}
            </ButtonLink>
            <ButtonLink
              href={leaderOpportunity.ctas.secondary.href}
              variant="secondary"
            >
              {leaderOpportunity.ctas.secondary.label}
            </ButtonLink>
          </div>
          <p className="mt-8 max-w-lg border-l border-gold/50 pl-4 text-sm leading-relaxed text-cream/80 sm:text-base">
            {leaderHero.highlight}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
