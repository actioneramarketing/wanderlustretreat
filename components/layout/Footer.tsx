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
      <div className="container-wide section-pad !pb-10 !pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl leading-tight">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-cream/70">{retreatLocation.footerLine}</p>
            <div className="mt-8">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold">Explore</p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold">Information</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={primaryCta.href}
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  {primaryCta.label}
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-cream/75 transition-colors hover:text-cream"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="organic-line my-10 opacity-40" />

        <div className="flex flex-col gap-4 text-sm text-cream/55 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl leading-relaxed">{disclaimer}</p>
          <p className="shrink-0">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
