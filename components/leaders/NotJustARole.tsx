import { notJustARole } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NotJustARole() {
  return (
    <section id="opportunity" className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={notJustARole.eyebrow}
            heading={notJustARole.heading}
            className="mb-8 max-w-4xl"
          />
          <div className="prose-readable max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            {notJustARole.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {notJustARole.callouts.map((callout, index) => (
            <Reveal key={callout.title} delay={index * 0.05}>
              <article className="border-t border-coral/35 pt-6">
                <p className="editorial-number mb-3 text-gold/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]">
                  {callout.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {callout.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
