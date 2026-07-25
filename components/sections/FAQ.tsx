import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow="QUESTIONS"
            heading="Frequently Asked Questions"
            description="Thoughtful answers to the questions most people ask before requesting an invitation."
            className="mb-12"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
