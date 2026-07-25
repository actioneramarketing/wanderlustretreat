export type TimelineStep = {
  id: string;
  phase: string;
  title: string;
  copy: string;
};

export const timelineIntro = {
  eyebrow: "SAMPLE RETREAT FLOW",
  heading: "The Journey of the Week",
  note: "This is a thematic sample flow, not a confirmed day-by-day itinerary. The final sequence may evolve as the experience is curated.",
};

export const timeline: TimelineStep[] = [
  {
    id: "arrival",
    phase: "Arrival",
    title: "Arrive and Exhale",
    copy: "Settle into Villa Wanderlust, meet the group, share a welcoming meal, and begin leaving the outside pace behind.",
  },
  {
    id: "reconnect",
    phase: "Reconnect",
    title: "Return to Yourself",
    copy: "Reconnect with your intentions, your body, the environment, and the people who will share the journey.",
  },
  {
    id: "contribute",
    phase: "Contribute",
    title: "Give Something Forward",
    copy: "Take part in a meaningful coastal tree-planting experience.",
  },
  {
    id: "collaborate",
    phase: "Collaborate",
    title: "Move as One",
    copy: "Move through a shared teamwork experience designed around connection, adaptability, and trust.",
  },
  {
    id: "express",
    phase: "Express",
    title: "Find Your Voice",
    copy: "Clarify and share what is ready to be voiced through ActionTalks Revival Day.",
  },
  {
    id: "restore",
    phase: "Restore",
    title: "Make Room to Recover",
    copy: "Slow down through massage, breathwork, guided cold immersion, sauna, and intentional recovery.",
  },
  {
    id: "integrate",
    phase: "Integrate and Celebrate",
    title: "Carry It Forward",
    copy: "Reflect on what has changed, define what comes home with you, and celebrate the experience together.",
  },
  {
    id: "departure",
    phase: "Departure",
    title: "Return Renewed",
    copy: "Leave Costa Rica with renewed energy, deeper relationships, greater clarity, and meaningful commitments for your next chapter.",
  },
];
