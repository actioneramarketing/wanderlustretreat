import { retreatDates } from "./retreat";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "when",
    question: "When is the retreat?",
    answer: `The Wanderlust Revival Retreat will take place from ${retreatDates.sentence}. Final arrival times and transportation instructions will be provided during enrollment.`,
  },
  {
    id: "where",
    question: "Where will the retreat be held?",
    answer: "At Villa Wanderlust near Jacó, Costa Rica.",
  },
  {
    id: "airport",
    question: "Which airport should I fly into?",
    answer:
      "Final airport and arrival instructions will be provided during enrollment.",
  },
  {
    id: "transportation",
    question: "Is transportation included?",
    answer:
      "Transportation from a designated arrival or meeting location on May 30, along with scheduled retreat transportation, is planned to be included. Final details will be confirmed before enrollment.",
  },
  {
    id: "airfare",
    question: "Is airfare included?",
    answer:
      "No. Participants are responsible for airfare to and from Costa Rica.",
  },
  {
    id: "meals",
    question: "Are meals included?",
    answer:
      "All meals during the core retreat experience are planned to be included. Final arrival-day and departure-day meal details will be confirmed.",
  },
  {
    id: "accommodations",
    question: "What type of accommodations are available?",
    answer:
      "Villa Wanderlust offers a variety of room configurations. Room assignments and accommodation options will be reviewed during enrollment.",
  },
  {
    id: "dietary",
    question: "Can dietary needs be accommodated?",
    answer:
      "Participants will be asked to share dietary requirements before the retreat. Accommodation is subject to the property and culinary team’s capabilities.",
  },
  {
    id: "fitness",
    question: "Do I need to be physically fit?",
    answer:
      "The retreat will include optional or adaptable wellness and adventure elements. Participants should disclose relevant needs before enrollment so the team can discuss fit and accommodations.",
  },
  {
    id: "insurance",
    question: "Is travel insurance required?",
    answer:
      "Travel insurance is strongly recommended for all participants. Final requirements will be shared during enrollment if any become mandatory.",
  },
  {
    id: "companion",
    question: "Can I attend with a spouse, partner, or colleague?",
    answer:
      "Yes, subject to fit, space, and accommodation availability. Each participant must complete the enrollment process.",
  },
  {
    id: "after-inquiry",
    question: "What happens after I request an invitation?",
    answer:
      "The retreat team will review the inquiry and contact the applicant to discuss the experience, availability, fit, accommodation options, and enrollment details.",
  },
  {
    id: "cancellation",
    question: "What is the cancellation policy?",
    answer:
      "Final payment and cancellation terms will be provided in the retreat agreement before enrollment is completed.",
  },
  {
    id: "itinerary",
    question: "Will the itinerary change?",
    answer:
      "Possibly. The experience may evolve based on weather, safety, local conditions, leadership, and the final retreat design.",
  },
];
