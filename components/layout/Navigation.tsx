"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, primaryCta } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

const logoSrc = "/images/branding/wanderlust-revival-logo.png";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white shadow-[0_1px_0_rgba(20,40,32,0.04)]">
      <div className="container-wide relative flex min-h-[72px] items-center justify-between gap-4 py-3 sm:min-h-[84px] sm:py-3.5 lg:min-h-[96px]">
        <Link
          href="/"
          className="relative z-10 shrink-0"
          onClick={close}
        >
          <Image
            src={logoSrc}
            alt="The Wanderlust Revival Retreat"
            width={1024}
            height={375}
            priority
            className="h-auto w-[168px] sm:w-[210px] xl:w-[255px]"
            sizes="(max-width: 640px) 168px, (max-width: 1280px) 210px, 255px"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:flex 2xl:gap-7"
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium tracking-[0.14em] text-jungle uppercase transition-colors hover:text-coral focus-visible:text-coral"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 hidden xl:block">
          <ButtonLink href={primaryCta.href} className="!px-5 !py-2.5 text-xs">
            {primaryCta.label}
          </ButtonLink>
        </div>

        <div className="relative z-10 flex items-center xl:hidden">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-jungle/20 text-jungle transition-colors hover:border-coral/50 hover:text-coral"
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
            className="border-t border-[var(--line)] bg-white xl:hidden"
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
                  className="rounded-md px-2 py-3 font-serif text-2xl text-jungle transition-colors hover:text-coral"
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
