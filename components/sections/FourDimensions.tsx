import Image from "next/image";
import { fourDimensionsIntro } from "@/data/content";
import { revivalDimensions } from "@/data/revival";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FourDimensions() {
  return (
    <section id="revival" className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={fourDimensionsIntro.eyebrow}
            heading={fourDimensionsIntro.heading}
            className="mb-14 max-w-3xl"
          />
        </Reveal>

        <div className="space-y-8 lg:space-y-10">
          {revivalDimensions.map((dimension, index) => {
            const reverse = index % 2 === 1;

            return (
              <Reveal key={dimension.id} delay={index * 0.05}>
                <article
                  className={cn(
                    "grid overflow-hidden rounded-sm border border-[var(--line)] bg-cream lg:grid-cols-2",
                    reverse && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="relative min-h-[280px] lg:min-h-[360px]">
                    {dimension.image ? (
                      <Image
                        src={dimension.image.src}
                        alt={dimension.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        style={{
                          objectPosition: dimension.image.objectPosition,
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle/40 to-transparent" />
                    <span className="editorial-number absolute bottom-5 left-6 text-cream/90">
                      {dimension.number}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <p className="eyebrow mb-3 text-coral">
                      Dimension {dimension.number}
                    </p>
                    <h3 className="font-serif text-3xl text-ink sm:text-4xl">
                      {dimension.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                      {dimension.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
