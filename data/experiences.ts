import { imagePlaceholders, images } from "./images";

export type ExperienceEntry = {
  id: string;
  label: string;
  title: string;
  copy: string;
  layout: "left" | "right" | "wide" | "split" | "placeholder";
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  secondaryImages?: {
    src: string;
    alt: string;
    objectPosition?: string;
  }[];
  placeholderLabel?: string;
};

export const experiencesIntro = {
  heading: "Seven Nights Designed to Bring You Back to Life",
  copy: "Every part of the retreat is designed to create a different kind of movement—from restoration and reflection to adventure, contribution, expression, teamwork, and celebration. The final flow will remain spacious enough for discovery while giving each day a meaningful intention.",
  note: "Specific activities and scheduling may evolve as the final retreat experience is curated.",
};

export const experiences: ExperienceEntry[] = [
  {
    id: "contribution",
    label: "Contribution Day",
    title: "Leave Something Living Behind",
    copy: "Spend meaningful time along the Costa Rican coast planting trees and contributing to something that can continue growing long after the retreat has ended.",
    layout: "placeholder",
    placeholderLabel: imagePlaceholders.contribution.label,
  },
  {
    id: "teamwork",
    label: "Teamwork Day",
    title: "Discover What Becomes Possible Together",
    copy: "Enter a playful and meaningful shared challenge centered on communication, collaboration, trust, adaptability, and collective accomplishment. Final experience details will be announced.",
    layout: "left",
    image: {
      src: images.collage.src,
      alt: images.collage.alt,
      objectPosition: "center top",
    },
  },
  {
    id: "actiontalks",
    label: "ActionTalks Revival Day",
    title: "Reignite Your Voice",
    copy: "Clarify a story, message, lesson, or idea that is ready to be expressed. Through the ActionTalks experience, reconnect with what you are here to say and the contribution you are ready to make.",
    layout: "right",
    image: {
      src: images.yogaPlatform.src,
      alt: images.yogaPlatform.alt,
      objectPosition: "center",
    },
  },
  {
    id: "revitalization",
    label: "Revitalization Day",
    title: "Restore Before You Rise",
    copy: "Slow the pace and give your body and mind intentional space to recover through massage, guided cold immersion, sauna, breath, rest, reflection, and restorative experiences surrounded by the jungle.",
    layout: "split",
    image: {
      src: images.revitalization.src,
      alt: images.revitalization.alt,
      objectPosition: "center",
    },
    secondaryImages: [
      {
        src: images.sauna.src,
        alt: images.sauna.alt,
        objectPosition: "center",
      },
      {
        src: images.hotTub.src,
        alt: images.hotTub.alt,
        objectPosition: "center",
      },
    ],
  },
  {
    id: "cacao",
    label: "Cacao and Sound Healing",
    title: "Listen Beneath the Noise",
    copy: "Gather for an intentional cacao and sound experience designed to create presence, reflection, openness, and connection.",
    layout: "left",
    image: {
      src: images.cacao.src,
      alt: images.cacao.alt,
      objectPosition: "center",
    },
  },
  {
    id: "hooponopono",
    label: "Ho’oponopono and Breathwork",
    title: "Release. Reconnect. Begin Again.",
    copy: "Participate in guided practices centered on breath, reflection, forgiveness, personal responsibility, reconnection, and creating room for a new way forward.",
    layout: "right",
    image: {
      src: images.editorialStatue.src,
      alt: images.editorialStatue.alt,
      objectPosition: "center",
    },
  },
  {
    id: "adventure",
    label: "Jungle Adventure",
    title: "Remember What Aliveness Feels Like",
    copy: "Experience Costa Rica from a new perspective through a jungle or zipline adventure that brings energy, play, courage, and wonder into the week.",
    layout: "placeholder",
    placeholderLabel: imagePlaceholders.zipline.label,
  },
  {
    id: "fire",
    label: "Fire and Celebration",
    title: "Gather in the Glow",
    copy: "Come together for an unforgettable evening fire performance, shared celebration, and the kind of conversation that continues long after the formal experience ends.",
    layout: "wide",
    image: {
      src: images.eveningFire.src,
      alt: images.eveningFire.alt,
      objectPosition: "center",
    },
  },
  {
    id: "surprise",
    label: "Special Surprise",
    title: "Some Moments Are Better Left Undisclosed",
    copy: "One signature retreat experience will remain a surprise—created to bring wonder, delight, and an unexpected moment of revival into the week.",
    layout: "placeholder",
    placeholderLabel: "Surprise experience — details revealed during the retreat",
  },
];
