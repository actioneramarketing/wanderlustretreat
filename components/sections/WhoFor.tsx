import { whoForSection } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhoFor() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-editorial grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading heading={whoForSection.heading} className="mb-8" />
          <ul className="space-y-5">
            {whoForSection.fits.map((item) => (
              <li
                key={item}
                className="border-l border-teal/50 pl-5 text-lg leading-relaxed text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-sm bg-cream-dark p-8 sm:p-10">
            <h3 className="font-serif text-3xl text-ink sm:text-4xl">
              {whoForSection.notHeading}
            </h3>
            <ul className="mt-8 space-y-5">
              {whoForSection.notFits.map((item) => (
                <li
                  key={item}
                  className="text-base leading-relaxed text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
