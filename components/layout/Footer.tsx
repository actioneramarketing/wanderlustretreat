import Link from "next/link";
import { navigation, primaryCta } from "@/data/navigation";
import {
  disclaimer,
  retreatLocation,
  siteConfig,
} from "@/data/retreat";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-jungle-deep text-cream">
      <div className="container-wide section-pad !pb-12 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-[clamp(1.85rem,3vw,2.5rem)] leading-tight">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-lg text-cream/75">{retreatLocation.footerLine}</p>
            <div className="mt-8">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold">Explore</p>
            <ul className="space-y-3.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold">Information</p>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={primaryCta.href}
                  className="text-base text-cream/80 transition-colors hover:text-cream"
                >
                  {primaryCta.label}
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-base text-cream/80 transition-colors hover:text-cream"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="organic-line my-10 opacity-40" />

        <div className="flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-cream/60 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl">{disclaimer}</p>
          <p className="shrink-0">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
