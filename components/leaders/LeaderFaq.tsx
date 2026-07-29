import { leaderFaqs } from "@/data/leader-opportunity";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeaderFaq() {
  return (
    <section id="leader-faq" className="section-pad bg-cream">
      <div className="container-editorial grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="QUESTIONS"
            heading="Leader Opportunity FAQ"
            className="lg:sticky lg:top-28"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <Accordion items={leaderFaqs} />
        </Reveal>
      </div>
    </section>
  );
}
