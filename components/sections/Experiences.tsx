import Image from "next/image";
import { experiences } from "@/data/experiences";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Experiences() {
  return (
    <section id="experiences" className="section-pad bg-cream">
      <div className="container-editorial space-y-20 lg:space-y-28">
        {experiences.map((experience, index) => (
          <Reveal key={experience.id} delay={Math.min(index * 0.03, 0.15)}>
            {experience.layout === "wide" && experience.image ? (
              <article className="relative overflow-hidden rounded-sm">
                <div className="relative aspect-[16/10] min-h-[360px] sm:aspect-[21/9]">
                  <Image
                    src={experience.image.src}
                    alt={experience.image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    style={{ objectPosition: experience.image.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-jungle-deep/85 via-jungle/55 to-jungle/20" />
                </div>
                <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-14">
                  <div className="max-w-xl">
                    <p className="eyebrow mb-3 text-gold">{experience.label}</p>
                    <h3 className="font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
                      {experience.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-cream/85 sm:text-lg">
                      {experience.copy}
                    </p>
                  </div>
                </div>
              </article>
            ) : experience.layout === "split" && experience.image ? (
              <article>
                <div className="mb-8 max-w-2xl">
                  <p className="eyebrow mb-3">{experience.label}</p>
                  <h3 className="font-serif text-3xl text-ink sm:text-4xl lg:text-5xl">
                    {experience.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                    {experience.copy}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-sm md:col-span-7 md:aspect-auto md:min-h-[420px]">
                    <Image
                      src={experience.image.src}
                      alt={experience.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-4 md:col-span-5">
                    {experience.secondaryImages?.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[16/11] overflow-hidden rounded-sm"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 35vw"
                          className="object-cover"
                          style={{ objectPosition: image.objectPosition }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ) : experience.layout === "placeholder" ? (
              <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <p className="eyebrow mb-3">{experience.label}</p>
                  <h3 className="font-serif text-3xl text-ink sm:text-4xl">
                    {experience.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                    {experience.copy}
                  </p>
                </div>
                <ImagePlaceholder
                  label={experience.placeholderLabel || experience.label}
                  className={cn(index % 2 === 1 && "lg:order-1")}
                />
              </article>
            ) : (
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                  experience.layout === "right" &&
                    "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <p className="eyebrow mb-3">{experience.label}</p>
                  <h3 className="font-serif text-3xl text-ink sm:text-4xl">
                    {experience.title}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                    {experience.copy}
                  </p>
                </div>
                {experience.image ? (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-sm",
                      experience.id === "hooponopono"
                        ? "aspect-[4/5] max-w-md lg:ml-auto"
                        : "aspect-[16/11]",
                    )}
                  >
                    <Image
                      src={experience.image.src}
                      alt={experience.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                      style={{ objectPosition: experience.image.objectPosition }}
                    />
                  </div>
                ) : null}
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
