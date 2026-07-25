/**
 * Centralized retreat facts.
 * Update dates, pricing, and site URL here as details are confirmed.
 */

import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: "The Wanderlust Revival Retreat",
  shortName: "Wanderlust Revival",
  /** Resolved from NEXT_PUBLIC_SITE_URL, Vercel production URL, or localhost */
  url: getSiteUrl(),
  description:
    "Revive your life, health, relationships, and business during an immersive seven-night retreat at Villa Wanderlust in Costa Rica.",
};

/** Confirmed retreat dates: May 30–June 6, 2027 */
export const retreatDates = {
  year: 2027,
  startMonth: "May",
  startDay: 30,
  endMonth: "June",
  endDay: 6,
  /** Primary display string used across the site */
  display: "May 30–June 6, 2027",
  /** Uppercase hero / label display */
  eyebrow: "MAY 30–JUNE 6, 2027 • COSTA RICA",
  /** Natural sentence form for FAQ and long-form copy */
  sentence: "May 30 through June 6, 2027",
  nights: 7,
};

export const retreatLocation = {
  venue: "Villa Wanderlust",
  region: "Costa Rica",
  area: "Near Jacó and the Pacific Coast",
  shortLine: "Villa Wanderlust • Near Jacó, Costa Rica",
  footerLine: "Villa Wanderlust, Costa Rica",
};

export const retreatInvestment = {
  min: 7500,
  max: 9000,
  display: "$7,500–$9,000",
  rangeLabel: "Retreat experiences from $7,500 to $9,000",
  note: "Accommodation and participation options will be reviewed during the invitation process.",
};

export const retreatTheme = {
  primary: "Revival of Life, Health, Relationships, and Business",
  positioning:
    "This is not simply a vacation or a traditional business retreat. It is a seven-night immersive experience combining restoration, adventure, contribution, connection, personal clarity, wellness, meaningful conversation, and renewed business vision.",
};

export const disclaimer =
  "Retreat experiences, activities, leaders, schedules, inclusions, accommodations, and pricing are subject to final confirmation and availability.";
