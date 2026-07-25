import { host } from "@/data/leaders";
import { LeaderPortrait } from "@/components/ui/LeaderPortrait";
import { Reveal } from "@/components/ui/Reveal";

export function Host() {
  return (
    <section className="bg-jungle py-20 sm:py-24">
      <div className="container-editorial grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <LeaderPortrait
              name={host.name}
              initials="J"
              image={host.image}
              objectPosition={host.objectPosition}
              status="host"
              className="ring-1 ring-white/10"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-4 text-gold">Villa Wanderlust</p>
          <h2 className="font-serif text-4xl leading-tight text-cream sm:text-5xl">
            Hosted at Villa Wanderlust by {host.name}
          </h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-cream/55 uppercase">
            {host.role}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            {host.bio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
