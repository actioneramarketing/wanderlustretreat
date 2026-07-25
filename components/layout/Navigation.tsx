"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";

const logoSrc = "/images/branding/wanderlust-revival-logo.png";

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
      <div className="container-wide flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5">
        <Link
          href="/"
          className="relative shrink-0 rounded-sm bg-black/55 px-2 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:px-2.5 sm:py-2"
          onClick={close}
        >
          <Image
            src={logoSrc}
            alt="The Wanderlust Revival Retreat"
            width={1024}
            height={375}
            priority
            className="h-auto w-[168px] sm:w-[200px] lg:w-[260px]"
            sizes="(max-width: 640px) 168px, (max-width: 1024px) 200px, 260px"
          />
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

        <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden">
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
