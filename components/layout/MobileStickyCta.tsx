"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { primaryCta } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const invitation = document.getElementById("invitation");

    const update = () => {
      const heroHeight = window.innerHeight * 0.85;
      const pastHero = window.scrollY > heroHeight;
      const nearFooter =
        window.scrollY + window.innerHeight >
        document.documentElement.scrollHeight - 520;

      let invitationVisible = false;
      if (invitation) {
        const rect = invitation.getBoundingClientRect();
        invitationVisible =
          rect.top < window.innerHeight - 80 && rect.bottom > 80;
      }

      setVisible(pastHero && !nearFooter && !invitationVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden"
          initial={reduceMotion ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <div className="rounded-2xl border border-white/10 bg-jungle/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-md">
            <ButtonLink href={primaryCta.href} className="w-full">
              {primaryCta.label}
            </ButtonLink>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
