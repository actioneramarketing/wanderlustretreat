import Image from "next/image";
import { experiencesIntro } from "@/data/experiences";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureIntro() {
  return (
    <section className="relative overflow-hidden bg-jungle py-24 sm:py-28">
      <Image
        src={images.yogaPlatform.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-deep/80 via-jungle/85 to-jungle-deep/90" />

      <div className="container-narrow relative z-10 text-center">
        <Reveal>
          <p className="eyebrow mb-5 text-gold">The Signature Experience</p>
          <h2 className="font-serif text-balance text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
            {experiencesIntro.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {experiencesIntro.copy}
          </p>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-cream/55">
            {experiencesIntro.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
