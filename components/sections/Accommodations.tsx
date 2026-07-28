import Image from "next/image";
import { accommodationsSection } from "@/data/content";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Accommodations() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading heading={accommodationsSection.heading} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              {accommodationsSection.copy.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:row-span-2 sm:aspect-auto sm:min-h-[520px]">
                <Image
                  src={images.villaBedroom.src}
                  alt={images.villaBedroom.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={images.villaLivingRoom.src}
                  alt={images.villaLivingRoom.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={images.accommodationSuite.src}
                  alt={images.accommodationSuite.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
