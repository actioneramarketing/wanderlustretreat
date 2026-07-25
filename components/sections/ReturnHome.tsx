import Image from "next/image";
import { returnHomeSection } from "@/data/content";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";

export function ReturnHome() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <Image
        src={images.revitalization.src}
        alt={images.revitalization.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-jungle-deep/80" />

      <div className="container-editorial relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-gold">After Costa Rica</p>
            <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              {returnHomeSection.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              {returnHomeSection.copy}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {returnHomeSection.takeaways.map((item) => (
              <li
                key={item}
                className="border border-white/15 bg-white/5 px-5 py-5 text-base leading-relaxed text-cream/90 backdrop-blur-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
