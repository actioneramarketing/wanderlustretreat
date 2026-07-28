import Image from "next/image";
import { finalCtaSection } from "@/data/content";
import { images } from "@/data/images";
import { primaryCta } from "@/data/navigation";
import { retreatDates, retreatLocation } from "@/data/retreat";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-32">
      <Image
        src={images.eveningFire.src}
        alt={images.eveningFire.alt}
        fill
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jungle-deep via-jungle-deep/80 to-jungle/55" />

      <div className="container-narrow relative z-10 text-center">
        <Reveal>
          <h2 className="font-serif text-balance text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            {finalCtaSection.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {finalCtaSection.copy}
          </p>
          <div className="meta-label mt-8 space-y-2 text-cream/75">
            <p>{retreatDates.display}</p>
            <p>{retreatLocation.footerLine}</p>
          </div>
          <div className="mt-10">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
