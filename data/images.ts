/**
 * Centralized image paths and alt text.
 * Curated photos live in /public/images/retreat/curated/.
 * Placeholder slots are reserved for photos still to be added.
 */

const curated = "/images/retreat/curated";

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
    src: `${curated}/cacao-sound-session.jpg`,
    alt: "Cacao and sound healing ceremony with singing bowls in an open-air pavilion surrounded by jungle",
  },
  revitalization: {
    src: `${curated}/retreat-breathwork-session.jpg`,
    alt: "Guests resting in a guided breathwork session on the open-air wooden pavilion at Villa Wanderlust",
  },
  sauna: {
    src: `${curated}/sauna-guest.jpg`,
    alt: "Guest resting peacefully in the wooden sauna during a restorative wellness moment",
  },
  saunaExterior: {
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
    src: `${curated}/villa-bedroom.jpg`,
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
  connectionGroupTable: {
    src: `${curated}/connection-group-table.jpg`,
    alt: "Guests laughing together around a wooden table during an evening gathering at the retreat",
  },
  reviveLifeZipline: {
    src: `${curated}/revive-life-zipline.jpg`,
    alt: "Guest smiling with joy while ziplining through the Costa Rican jungle canopy",
  },
  teamworkCooking: {
    src: `${curated}/teamwork-cooking.jpg`,
    alt: "Retreat guests collaborating and laughing while preparing food together outdoors",
  },
  jungleWaterfall: {
    src: `${curated}/jungle-waterfall.jpg`,
    alt: "Guest swimming in a natural jungle pool beneath a cascading waterfall in Costa Rica",
  },
  groupPoolConnection: {
    src: `${curated}/group-pool-connection.jpg`,
    alt: "Friends connecting and smiling together in and around the villa pool surrounded by jungle",
  },
  communalDinner: {
    src: `${curated}/communal-dinner.jpg`,
    alt: "Long candlelit communal dinner table under string lights with guests gathered in celebration",
  },
  platedMeal: {
    src: `${curated}/plated-meal.jpg`,
    alt: "Beautifully plated gourmet meal served as part of the curated retreat dining experience",
  },
  villaPoolDaytime: {
    src: `${curated}/villa-pool-daytime.jpg`,
    alt: "Turquoise daytime pool with tropical foliage and teal seating at Villa Wanderlust",
  },
  villaLivingRoom: {
    src: `${curated}/villa-living-room.jpg`,
    alt: "Bright open living room with vaulted wood ceilings and jungle views at Villa Wanderlust",
  },
  villaBedroom: {
    src: `${curated}/villa-bedroom.jpg`,
    alt: "Warm wood-paneled bedroom with white linens and an en-suite bathroom at Villa Wanderlust",
  },
  villaEveningExterior: {
    src: `${curated}/villa-evening-exterior.jpg`,
    alt: "Villa Wanderlust glowing at night with string lights, teal chairs, and inviting outdoor seating",
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
    src: images.reviveLifeZipline.src,
    alt: images.reviveLifeZipline.alt,
    label: "Adventure / zipline photo",
  },
  food: {
    src: images.platedMeal.src,
    alt: images.platedMeal.alt,
    label: "Food / dining photo",
  },
  contribution: {
    src: null as string | null,
    alt: "Coastal tree planting contribution experience",
    label: "Contribution Day photo pending",
  },
  groupConnection: {
    src: images.connectionGroupTable.src,
    alt: images.connectionGroupTable.alt,
    label: "Group connection photo",
  },
  leaders: {
    src: null as string | null,
    alt: "Retreat leaders",
    label: "Leader portraits pending",
  },
} as const;
