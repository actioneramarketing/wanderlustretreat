/**
 * Centralized image paths and alt text.
 * Placeholder slots are reserved for photos still to be added.
 */

export const images = {
  hero: {
    src: "/images/retreat/wanderlust-retreat-hero.jpg",
    /** Decorative hero background — empty alt avoids duplicate screen-reader content */
    alt: "",
  },
  poolPavilion: {
    src: "/images/retreat/hero-pool-pavilion.png",
    alt: "Turquoise pool and open-air wooden pavilion nestled in the Costa Rican jungle at Villa Wanderlust",
  },
  eveningFire: {
    src: "/images/retreat/evening-fire-circle.png",
    alt: "Evening fire circle with teal chairs and warm string lights at Villa Wanderlust",
  },
  cacao: {
    src: "/images/retreat/cacao-sound-healing.png",
    alt: "Cacao and sound healing ceremony in an open-air pavilion surrounded by jungle",
  },
  revitalization: {
    src: "/images/retreat/revitalization-session.png",
    alt: "Guests resting in guided restoration on the open-air wooden pavilion at Villa Wanderlust",
  },
  sauna: {
    src: "/images/retreat/barrel-sauna.png",
    alt: "Wooden barrel sauna nestled among tropical hillside foliage at Villa Wanderlust",
  },
  hotTub: {
    src: "/images/retreat/jungle-hot-tub.png",
    alt: "Outdoor hot tub under a pavilion roof surrounded by lush jungle greenery",
  },
  yogaPlatform: {
    src: "/images/retreat/yoga-platform.png",
    alt: "Open-air yoga and gathering platform with vaulted wood ceiling overlooking the jungle",
  },
  collage: {
    src: "/images/retreat/experience-collage.png",
    alt: "Collage of yoga, breathwork, and pavilion scenes from the Villa Wanderlust retreat experience",
  },
  editorialStatue: {
    src: "/images/retreat/editorial-statue.png",
    alt: "Carved wooden figure in quiet reflection against soft jungle light",
  },
  accommodationSuite: {
    src: "/images/retreat/accommodation-suite.png",
    alt: "Bright bedroom with natural wood furnishings and a large window overlooking the jungle",
  },
  accommodationBedroom: {
    src: "/images/retreat/accommodation-bedroom.png",
    alt: "Warm wood-paneled bedroom with white linens and jungle views at Villa Wanderlust",
  },
  accommodationBath: {
    src: "/images/retreat/accommodation-bath.png",
    alt: "Natural stone bathroom with wood ceiling and soft ambient lighting",
  },
  jungleLounge: {
    src: "/images/retreat/jungle-lounge.png",
    alt: "Carved wooden daybed with teal cushions in a lush outdoor lounge area",
  },
} as const;

/**
 * Placeholder slots for photos to add before launch.
 * Keep these keys so sections can reference them when assets arrive.
 */
export const imagePlaceholders = {
  beach: {
    src: null as string | null,
    alt: "Coastal Costa Rica near Villa Wanderlust",
    label: "Beach / Pacific Coast photo pending",
  },
  zipline: {
    src: null as string | null,
    alt: "Jungle adventure or zipline experience",
    label: "Adventure / zipline photo pending",
  },
  food: {
    src: null as string | null,
    alt: "Shared meals at the retreat",
    label: "Food / dining photo pending",
  },
  contribution: {
    src: null as string | null,
    alt: "Coastal tree planting contribution experience",
    label: "Contribution Day photo pending",
  },
  groupConnection: {
    src: null as string | null,
    alt: "Group connection and conversation at the retreat",
    label: "Group connection photo pending",
  },
  leaders: {
    src: null as string | null,
    alt: "Retreat leaders",
    label: "Leader portraits pending",
  },
} as const;
