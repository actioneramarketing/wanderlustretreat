import Image from "next/image";
import { openingSection } from "@/data/content";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Opening() {
  return (
    <section id="opening" className="section-pad bg-cream">
      <div className="container-editorial grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={openingSection.eyebrow}
            heading={openingSection.heading}
          />
          <div className="prose-readable mt-8 space-y-5 text-lg leading-relaxed text-ink-soft sm:text-xl">
            {openingSection.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={images.jungleLounge.src}
              alt={images.jungleLounge.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden w-40 overflow-hidden rounded-sm border-4 border-cream shadow-xl sm:block lg:-left-8 lg:w-48">
            <div className="relative aspect-[3/4]">
              <Image
                src={images.editorialStatue.src}
                alt={images.editorialStatue.alt}
                fill
                sizes="192px"
                className="object-cover object-[30%_center]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
