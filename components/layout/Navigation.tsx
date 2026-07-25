"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, primaryCta } from "@/data/navigation";
import { siteConfig } from "@/data/retreat";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-jungle/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-cream sm:text-xl"
          onClick={close}
        >
          <span className="block leading-none">{siteConfig.shortName}</span>
          <span className="mt-0.5 block text-[0.65rem] tracking-[0.22em] text-cream/65 uppercase">
            Retreat
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8rem] tracking-[0.12em] text-cream/80 uppercase transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={primaryCta.href} className="!px-5 !py-2.5 text-xs">
            {primaryCta.label}
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ButtonLink
            href={primaryCta.href}
            className="!px-3.5 !py-2 text-[0.7rem]"
            onClick={close}
          >
            Invitation
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-white/10 bg-jungle lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              className="container-wide flex flex-col gap-1 py-4"
              aria-label="Mobile"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 font-serif text-2xl text-cream"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 px-2 pb-2">
                <ButtonLink
                  href={primaryCta.href}
                  className="w-full"
                  onClick={close}
                >
                  {primaryCta.label}
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
