import Image from "next/image";
import { majorReward } from "@/data/leader-opportunity";
import { Reveal } from "@/components/ui/Reveal";

export function MajorReward() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <Image
        src={majorReward.image.src}
        alt={majorReward.image.alt}
        fill
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-jungle-deep/88" />

      <div className="container-editorial relative z-10">
        <Reveal>
          <p className="eyebrow mb-5 text-gold">{majorReward.eyebrow}</p>
          <h2 className="max-w-4xl font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.1] whitespace-pre-line text-cream">
            {majorReward.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/85">
            {majorReward.primaryCopy}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 border border-white/15 bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-14">
            <p className="eyebrow mb-4 text-gold">{majorReward.valueLabel}</p>
            <p className="font-serif text-[clamp(3.5rem,10vw,6.5rem)] leading-none tracking-tight text-cream">
              {majorReward.valueDisplay}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-cream/80">
            {majorReward.supporting.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {majorReward.highlights.map((item) => (
              <li
                key={item}
                className="border border-white/12 bg-white/5 px-5 py-4 text-base leading-relaxed text-cream/90"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl border-l border-gold/40 pl-4 text-sm leading-relaxed text-cream/70 sm:text-base">
            {majorReward.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
