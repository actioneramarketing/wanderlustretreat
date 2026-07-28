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
            className="mb-12 max-w-3xl lg:mb-16"
          />
        </Reveal>

        <div className="space-y-7 lg:space-y-9">
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
                  <div className="relative min-h-[300px] lg:min-h-[380px]">
                    {dimension.image ? (
                      <Image
                        src={dimension.image.src}
                        alt={dimension.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                        className="object-cover"
                        style={{
                          objectPosition: dimension.image.objectPosition,
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle/45 to-transparent" />
                    <span className="editorial-number absolute bottom-5 left-6 text-cream/90">
                      {dimension.number}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 xl:p-14">
                    <p className="eyebrow mb-4 text-coral">
                      Dimension {dimension.number}
                    </p>
                    <h3 className="font-serif text-[clamp(1.85rem,3vw,2.35rem)] leading-tight text-ink">
                      {dimension.title}
                    </h3>
                    <p className="prose-readable mt-5 text-lg leading-relaxed text-ink-soft">
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
