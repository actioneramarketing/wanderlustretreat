import { images } from "./images";

export type RevivalDimension = {
  id: string;
  number: string;
  title: string;
  copy: string;
  image?: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
};

export const revivalDimensions: RevivalDimension[] = [
  {
    id: "life",
    number: "01",
    title: "Revive Your Life",
    copy: "Reconnect with what excites you, what matters now, and the experiences you want the next chapter of your life to hold. Create space for clarity, possibility, play, purpose, and a renewed sense of aliveness.",
    image: {
      src: images.jungleLounge.src,
      alt: images.jungleLounge.alt,
      objectPosition: "center",
    },
  },
  {
    id: "health",
    number: "02",
    title: "Revive Your Health",
    copy: "Slow down, restore your energy, and reconnect with your body through nature, movement, massage, breathwork, intentional recovery, guided cold immersion, sauna, and deeply restorative moments.",
    image: {
      src: images.sauna.src,
      alt: images.sauna.alt,
      objectPosition: "center",
    },
  },
  {
    id: "relationships",
    number: "03",
    title: "Revive Your Relationships",
    copy: "Experience deeper conversations, meaningful community, shared challenges, honest reflection, laughter, and the kind of connection that is difficult to create inside the pace of everyday life.",
    image: {
      src: images.eveningFire.src,
      alt: images.eveningFire.alt,
      objectPosition: "center",
    },
  },
  {
    id: "business",
    number: "04",
    title: "Revive Your Business",
    copy: "Step back from the daily operation of your work to reconnect with the vision behind it. Clarify the ideas, message, contribution, and direction you are ready to bring into your next chapter.",
    image: {
      src: images.yogaPlatform.src,
      alt: images.yogaPlatform.alt,
      objectPosition: "center",
    },
  },
];
