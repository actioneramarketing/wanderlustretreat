/**
 * Retreat leadership data.
 *
 * DEV NOTE: Replace placeholder biography before launch.
 * Do not invent credentials, job titles, or accomplishments.
 */

export type Leader = {
  id: string;
  name: string;
  role: string;
  status: "confirmed" | "tba";
  initials: string;
  bio: string;
  /** Portrait path when available; null uses initials placeholder */
  image: string | null;
};

export type Host = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
};

export const leadersIntro = {
  eyebrow: "GUIDED WITH INTENTION",
  heading: "Four Leaders.\nFour Perspectives.\nOne Transformational Journey.",
  copy: "The Wanderlust Revival Retreat will be guided by four leaders whose perspectives and experiences will help participants explore revival across life, health, relationships, and business.",
};

export const leaders: Leader[] = [
  {
    id: "kristen-becher",
    name: "Kristen Becher",
    role: "Confirmed Revival Leader",
    status: "confirmed",
    initials: "KB",
    // DEV: Replace placeholder biography before launch.
    bio: "Kristen’s complete biography and retreat focus will be added as the leadership experience is finalized.",
    image: null,
  },
  {
    id: "leader-2",
    name: "Revival Leader To Be Announced",
    role: "Revival Leader",
    status: "tba",
    initials: "02",
    bio: "A confirmed leader will be announced as the retreat experience is finalized.",
    image: null,
  },
  {
    id: "leader-3",
    name: "Revival Leader To Be Announced",
    role: "Revival Leader",
    status: "tba",
    initials: "03",
    bio: "A confirmed leader will be announced as the retreat experience is finalized.",
    image: null,
  },
  {
    id: "leader-4",
    name: "Revival Leader To Be Announced",
    role: "Revival Leader",
    status: "tba",
    initials: "04",
    bio: "A confirmed leader will be announced as the retreat experience is finalized.",
    image: null,
  },
];

export const host: Host = {
  id: "jai",
  name: "Jai",
  role: "Retreat Host · Creator of Villa Wanderlust",
  // DEV: Replace placeholder biography before launch.
  bio: "Jai created Villa Wanderlust as a place where people can step away from familiar patterns, reconnect with nature, gather in meaningful community, and create experiences that stay with them long after they return home. Her complete story and role in the retreat will be added as the experience is finalized.",
  image: null,
};
