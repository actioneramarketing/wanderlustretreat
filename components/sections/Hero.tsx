"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { heroSection } from "@/data/content";
import { images } from "@/data/images";
import { primaryCta, secondaryCta } from "@/data/navigation";
import { retreatDates, retreatLocation, siteConfig } from "@/data/retreat";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="retreat"
      className="relative flex min-h-[min(820px,calc(100svh-5.5rem))] items-end overflow-hidden sm:min-h-[min(820px,calc(100svh-6rem))]"
      aria-label="Retreat introduction"
    >
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div className="image-scrim-hero absolute inset-0" aria-hidden="true" />

      <div className="container-wide relative z-10 w-full pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[42rem] lg:max-w-[46rem]"
        >
          <p className="eyebrow mb-5 text-gold">{retreatDates.eyebrow}</p>
          <p className="mb-4 font-serif text-xl text-cream/90 sm:text-2xl">
            {siteConfig.name}
          </p>
          <h1 className="font-serif text-[2.35rem] leading-[1.08] font-medium tracking-tight text-cream sm:text-5xl lg:text-[3.75rem]">
            {heroSection.headline.map((line) => (
              <span key={line} className="block">
                {line.includes("Revive") ? (
                  <>
                    <span className="revival-accent not-italic text-coral-soft">
                      Revive
                    </span>{" "}
                    {line.replace("Revive ", "")}
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {heroSection.supporting}
          </p>
          <p className="mt-5 text-sm tracking-[0.14em] text-cream/75 uppercase">
            {retreatLocation.shortLine}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </motion.div>

        <a
          href="#opening"
          className="mt-12 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-cream/70 uppercase transition-colors hover:text-cream"
        >
          Scroll
          <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
