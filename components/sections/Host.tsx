import { host } from "@/data/leaders";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import { Reveal } from "@/components/ui/Reveal";

export function Host() {
  return (
    <section className="bg-jungle section-pad">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <Reveal>
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <LeaderPortrait
              name={host.name}
              initials="J"
              image={host.image}
              alt={host.imageAlt}
              objectPosition={host.objectPosition}
              status="host"
              className="ring-1 ring-white/10"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-5 text-gold">Villa Wanderlust</p>
          <h2 className="font-serif text-[clamp(2.15rem,4vw,3.35rem)] leading-[1.12] text-cream">
            Hosted at Villa Wanderlust by {host.name}
          </h2>
          <p className="meta-label mt-3 text-cream/65">{host.role}</p>
          <p className="prose-readable mt-6 text-lg leading-relaxed text-cream/85 sm:text-xl">
            {host.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
