import Image from "next/image";
import { host } from "@/data/leaders";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";

export function Host() {
  return (
    <section className="bg-jungle py-20 sm:py-24">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jungle/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="eyebrow mb-2 text-gold">Host</p>
              <p className="font-serif text-4xl text-cream">{host.name}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-4 text-gold">Villa Wanderlust</p>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Hosted at Villa Wanderlust by {host.name}
          </h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-cream/55 uppercase">
            {host.role}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            {host.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
