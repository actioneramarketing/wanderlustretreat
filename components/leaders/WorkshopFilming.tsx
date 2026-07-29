import Image from "next/image";
import { workshopFilming } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkshopFilming() {
  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={workshopFilming.eyebrow}
              heading={workshopFilming.heading}
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              {workshopFilming.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold text-ink">
              {workshopFilming.topicsIntro}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {workshopFilming.topics.map((topic) => (
                <li
                  key={topic}
                  className="border border-[var(--line)] bg-cream px-3 py-1.5 text-sm text-ink-soft"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-muted">
              {workshopFilming.reviewNote}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/6]">
              <Image
                src={workshopFilming.image.src}
                alt={workshopFilming.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                quality={90}
                className="object-cover object-[center_30%]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-sm border border-[var(--line)] bg-cream p-7 sm:p-9">
              <p className="eyebrow mb-4 text-coral">Filming details</p>
              <ul className="space-y-4">
                {workshopFilming.filmingDetails.map((detail) => (
                  <li
                    key={detail}
                    className="border-l-2 border-teal/40 pl-4 text-base leading-relaxed text-ink-soft"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-sm bg-jungle px-7 py-10 text-center sm:px-10">
              {workshopFilming.callout.map((line) => (
                <p
                  key={line}
                  className="font-serif text-[clamp(1.85rem,3.5vw,2.6rem)] leading-tight text-cream"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
