export type NavItem = {
  label: string;
  href: string;
};

/** Homepage section links — use absolute hash paths so they work from any route. */
export const navigation: NavItem[] = [
  { label: "Retreat", href: "/#retreat" },
  { label: "The Revival", href: "/#revival" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Villa", href: "/#villa" },
  { label: "Leaders", href: "/#leaders" },
  { label: "Investment", href: "/#investment" },
  { label: "FAQ", href: "/#faq" },
];

/** Extra mobile-only nav item — kept out of the desktop bar to avoid crowding. */
export const mobileOnlyNavigation: NavItem[] = [
  { label: "Lead the Retreat", href: "/leaders" },
];

export const primaryCta = {
  label: "Request Your Invitation",
  href: "/#invitation",
};

export const secondaryCta = {
  label: "Explore the Experience",
  href: "/#experiences",
};

export const leaderCta = {
  label: "Apply to Become a Retreat Leader",
  href: "/leaders#leader-application",
};
