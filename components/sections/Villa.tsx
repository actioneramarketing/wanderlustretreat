import Image from "next/image";
import { villaSection } from "@/data/content";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const gallery = [
  {
    ...images.villaPoolDaytime,
    className: "md:col-span-7 md:row-span-2 min-h-[280px] md:min-h-full",
    sizes: "(max-width: 768px) 100vw, 58vw",
    objectPosition: "center",
  },
  {
    ...images.villaLivingRoom,
    className: "md:col-span-5 min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 42vw",
    objectPosition: "center",
  },
  {
    ...images.villaBedroom,
    className: "md:col-span-5 min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 42vw",
    objectPosition: "center",
  },
  {
    ...images.poolPavilion,
    className: "md:col-span-4 min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 33vw",
    objectPosition: "center",
  },
  {
    ...images.hotTub,
    className: "md:col-span-4 min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 33vw",
    objectPosition: "center",
  },
  {
    ...images.accommodationSuite,
    className: "md:col-span-4 min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 33vw",
    objectPosition: "center",
  },
];

export function Villa() {
  return (
    <section id="villa" className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={villaSection.eyebrow}
            heading={villaSection.heading}
            className="mb-6"
          />
          <div className="mb-10 max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
            {villaSection.copy.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-3">
            {villaSection.features.map((feature) => (
              <li
                key={feature}
                className="meta-label border-b border-coral/40 pb-1 text-cacao"
              >
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid auto-rows-[220px] gap-3 md:grid-cols-12 md:grid-rows-2 md:auto-rows-[240px]">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-sm ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={item.sizes}
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  style={{ objectPosition: item.objectPosition }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 relative aspect-[21/8] overflow-hidden rounded-sm sm:aspect-[21/7]">
            <Image
              src={images.villaEveningExterior.src}
              alt={images.villaEveningExterior.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jungle/50 to-transparent" />
            <p className="absolute bottom-5 left-5 font-serif text-xl text-cream sm:text-2xl">
              Restorative spaces woven into the jungle
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
