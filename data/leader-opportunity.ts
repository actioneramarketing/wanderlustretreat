/**
 * Centralized content for the /leaders recruitment page.
 * Edit numbers, benefits, FAQs, CTAs, and disclaimers here.
 */

import { images } from "./images";
import { leaders } from "./leaders";
import { retreatDates, retreatLocation } from "./retreat";

export const leaderOpportunity = {
  openPositions: 4,
  totalLeaders: 5,
  teamEnrollmentGoal: 3,
  villaWeekValue: "nearly $13,000",
  villaWeekValueDisplay: "$13,000",
  villaWeekValuePrefix: "Nearly",
  dates: retreatDates.display,
  datesSentence: retreatDates.sentence,
  locationLine: `${retreatLocation.venue} • ${retreatLocation.region}`,
  venue: retreatLocation.venue,
  region: retreatLocation.region,
  rewardDisclaimer:
    "Earn a future week at Villa Wanderlust, valued at nearly $13,000, subject to scheduling, availability, and a separate retreat-hosting agreement.",
  pageDisclaimer:
    "Leader selection, retreat participation, filming, team requirements, future Villa access, scheduling, property use, inclusions, exclusions, and all related benefits are subject to final written agreements.",
  futureWeekNote:
    "Future retreat dates, property access, inclusions, exclusions, and hosting requirements are subject to availability and a separate written agreement.",
  ctas: {
    primary: {
      label: "Apply to Become a Retreat Leader",
      href: "#leader-application",
    },
    secondary: {
      label: "Explore the Leader Opportunity",
      href: "#opportunity",
    },
    returnHome: {
      label: "Return to the Retreat Page",
      href: "/",
    },
  },
  navLabel: "Lead the Retreat",
  footerLabel: "Leader Opportunity",
  href: "/leaders",
} as const;

export const leaderHero = {
  eyebrow: "FOUR LEADER POSITIONS AVAILABLE",
  headline: ["Lead at Wanderlust.", "Launch What Comes Next."],
  supporting:
    "The Wanderlust Revival Retreat is seeking four additional leaders to join a five-person leadership team for an immersive week in Costa Rica.",
  supportingSecondary:
    "Lead a meaningful workshop. Build a team of three participants. Have your work professionally filmed. Learn the retreat model from the inside—and earn the opportunity to host a future retreat of your own at Villa Wanderlust.",
  highlight: leaderOpportunity.rewardDisclaimer,
  /** Same approved daytime Villa hero asset used on the homepage. */
  image: images.hero,
};

export const notJustARole = {
  eyebrow: "MORE THAN HELPING LEAD A TRIP",
  heading: "This Is a Testing Ground for the Leader You Are Becoming.",
  paragraphs: [
    "You are not simply being invited to show up, teach one session, and go home.",
    "You are stepping inside a complete transformational retreat—learning how the experience is shaped, how participants are supported, how teams are guided, how meaningful workshops fit into the larger journey, and how a retreat becomes something people remember long after they leave.",
    "The Wanderlust Revival Retreat gives you a place to practice your leadership, document your work, build confidence with real participants, and begin creating the story of the retreat you may lead next.",
  ],
  callouts: [
    {
      title: "Practice in a real retreat environment",
      copy: "Step into facilitation, presence, and group leadership inside a premium week—not a classroom exercise.",
    },
    {
      title: "Lead your own meaningful workshop",
      copy: "Bring a session connected to your message, expertise, or modality and refine it with real participants.",
    },
    {
      title: "Build confidence with actual participants",
      copy: "Support a team of three through welcome, connection, and selected moments across the week.",
    },
    {
      title: "Learn the retreat model from the inside",
      copy: "Observe pacing, flow, participant care, collaboration, and how a retreat is delivered end to end.",
    },
  ],
};

export const teamModel = {
  eyebrow: "YOUR LEADER GOAL",
  heading: "Build a Team of Three.",
  paragraphs: [
    "Each Retreat Leader will be responsible for inviting and enrolling three participants who become part of their team during The Wanderlust Revival Retreat.",
    "You will not simply recruit three people and disappear into the larger group. You will help welcome them, support their experience, strengthen team connection, and guide selected moments throughout the week.",
  ],
  environmentIntro:
    "This creates a manageable and meaningful leadership environment:",
  environmentPoints: [
    "One leader",
    "Three team participants",
    "A shared experience",
    "A real opportunity to practice facilitation, support, communication, and group leadership",
  ],
  equation: {
    leader: "1 Leader",
    participants: "3 Participants",
    result: "A Complete Retreat Team",
  },
  closing:
    "With five leaders and their teams, the retreat becomes a connected community of smaller groups within the larger shared experience.",
};

export const majorReward = {
  eyebrow: "ACHIEVE YOUR TEAM GOAL",
  heading: "Enroll Three People.\nEarn an Entire Retreat Week of Your Own.",
  primaryCopy:
    "When you reach your goal of enrolling three people for your Wanderlust team, you will earn the opportunity to reserve the full Villa Wanderlust retreat facility for one week and host a future retreat of your own.",
  valueLabel: "This future retreat week is valued at nearly",
  valueDisplay: leaderOpportunity.villaWeekValueDisplay,
  supporting: [
    "Instead of leaving Costa Rica with only memories and ideas, you can leave knowing that the setting for your own future retreat is waiting for you.",
    "You will be able to pencil in a future retreat date, subject to mutual availability and final agreement, and begin shaping the next experience while the energy, lessons, relationships, and content from Wanderlust are still fresh.",
  ],
  highlights: [
    "Exclusive use of the Villa Wanderlust retreat facility for one week",
    "Space to host your own future retreat",
    "A premium Costa Rica setting already connected to your leadership story",
    "Nearly $13,000 in property value",
    "Earned by reaching your three-person team goal",
  ],
  note: leaderOpportunity.futureWeekNote,
  image: images.villaEveningExterior,
};

export const futurePathways = {
  eyebrow: "YOUR FUTURE RETREAT PATH",
  heading: "One Reward.\nSeveral Powerful Ways to Use It.",
  paths: [
    {
      number: "01",
      title: "Invite Your Team Back",
      heading: "Turn This Retreat Into the Beginning of a Longer Journey",
      copy: "Pencil in your future Villa Wanderlust week and invite your three Wanderlust participants to continue with you. The first retreat becomes the shared foundation. Your future retreat becomes the next chapter—allowing you to deepen the work, build on relationships, and guide your team through a more focused experience of your own creation.",
      uses: [
        "Follow-up retreat",
        "Advanced experience",
        "Deeper implementation",
        "Community continuation",
        "Annual or recurring gathering",
      ],
    },
    {
      number: "02",
      title: "Train Your Three Future Leaders",
      heading: "Let Your Participants Become the Leaders of What Comes Next",
      copy: "Your three participants can attend The Wanderlust Revival Retreat as members of your team, experience the model firsthand, and then become the three leaders who help you deliver your future Villa Wanderlust retreat.",
      uses: [
        "Experience the retreat first as participants",
        "Understand the culture and expectations",
        "See how teams and workshops are guided",
        "Discover where their own leadership may fit",
        "Prepare to support or co-lead your future retreat",
      ],
      closing: "The Wanderlust experience becomes their testing ground too.",
    },
    {
      number: "03",
      title: "Build a Second Leader Pathway",
      heading: "Help Your Future Leaders Earn Retreat Opportunities of Their Own",
      copy: "Your future leaders may choose to build communities and teams for the next retreat, developing their own leadership experience and potentially qualifying for future opportunities connected to the retreat model.",
      uses: [
        "Leadership development",
        "Community building",
        "Shared facilitation practice",
        "Pathway thinking for what comes next",
      ],
      closing:
        "Future opportunities, leader roles, and rewards would be governed by the terms created for that specific retreat.",
    },
  ],
};

export const workshopFilming = {
  eyebrow: "CAPTURE YOUR LEADERSHIP",
  heading: "Teach What You Believe.\nLeave With the Story to Prove It.",
  paragraphs: [
    "Each selected leader will guide a meaningful workshop, session, conversation, or experience connected to their message, expertise, or modality.",
    "Your workshop will be professionally filmed so you can leave with valuable footage of yourself leading in a real transformational retreat environment.",
  ],
  topicsIntro: "Possible workshop areas may include:",
  topics: [
    "Life clarity",
    "Whole-life wellness",
    "Relationships and connection",
    "Business and leadership",
    "Purpose",
    "Communication",
    "Breathwork",
    "Movement",
    "Healing",
    "Creativity",
    "Music",
    "Mindset",
    "Personal development",
    "Teamwork",
    "Contribution",
    "Other aligned modalities",
  ],
  reviewNote:
    "Workshop concepts will be reviewed with the retreat team to ensure they fit the overall flow, values, safety standards, and participant experience.",
  filmingDetails: [
    "The workshop is planned to be professionally filmed",
    "Final recording format, length, editing, deliverables, and usage rights will be confirmed in the leader agreement",
  ],
  callout: ["Lead It.", "Film It.", "Use It to Launch What Comes Next."],
  image: images.cacao,
};

export const leaderBenefits = {
  eyebrow: "WHAT YOU RECEIVE",
  heading: "A Retreat Experience Designed to Build Your Leadership.",
  items: [
    {
      title: "Attend the Retreat as a Leader",
      copy: "Experience the Costa Rican retreat while stepping into a meaningful and visible leadership role.",
    },
    {
      title: "Earn Your Retreat Participation",
      copy: "Selected leaders who fulfill the agreed leader requirements and team enrollment expectations may receive their retreat participation according to the final leader agreement.",
    },
    {
      title: "Lead a Signature Workshop",
      copy: "Guide an experience connected to your own message, expertise, and future direction.",
    },
    {
      title: "Receive Professional Workshop Footage",
      copy: "Capture real footage that can support your website, speaker reel, future retreat page, social content, applications, and marketing.",
    },
    {
      title: "Practice With Real Participants",
      copy: "Develop confidence, adaptability, and presence inside a real retreat rather than only imagining what leadership will feel like.",
    },
    {
      title: "Learn the Retreat Model",
      copy: "Experience the pacing, flow, team structure, workshops, logistics, relationship-building, participant care, integration, and storytelling from the inside.",
    },
    {
      title: "Build Your Future Leadership Team",
      copy: "Bring three people who may become participants, ambassadors, support leaders, or future co-leaders.",
    },
    {
      title: "Earn a Future Week at Villa Wanderlust",
      copy: "Reach the three-person enrollment goal and unlock the opportunity to host your own future retreat week, valued at nearly $13,000.",
    },
  ],
};

export const leaderResponsibilities = {
  eyebrow: "WHAT LEADERS COMMIT TO",
  heading: "A Meaningful Opportunity Comes With Meaningful Responsibility.",
  items: [
    "Enroll three aligned participants for your retreat team",
    "Participate in leader planning and preparation calls",
    "Develop a workshop or experience aligned with the retreat",
    "Collaborate with the host and other leaders",
    "Support the three people on your team",
    "Help create a welcoming and respectful group culture",
    "Participate fully in retreat activities",
    "Follow safety, property, conduct, and facilitation standards",
    "Communicate clearly before and during the retreat",
    "Help with selected team activities or group moments",
    "Promote the retreat honestly and professionally",
    "Sign the final leader agreement",
    "Respect participant privacy and media permissions",
  ],
  closing:
    "This is not a passive complimentary vacation. Leaders are active contributors to the quality, safety, and success of the retreat.",
};

export const leaderPathway = {
  eyebrow: "FROM INTEREST TO YOUR OWN RETREAT",
  heading: "The Wanderlust Leader Pathway",
  steps: [
    {
      title: "Apply for a Leader Position",
      copy: "Share your background, work, audience, workshop idea, and future retreat vision.",
    },
    {
      title: "Explore Fit With the Retreat Team",
      copy: "Discuss whether your message, community, leadership style, and goals align with the experience.",
    },
    {
      title: "Clarify Your Workshop and Team",
      copy: "Choose what you will lead and identify the three people you would most like to bring.",
    },
    {
      title: "Invite and Enroll Your Team",
      copy: "Use approved messaging, personal conversations, and your existing community to build your team of three.",
    },
    {
      title: "Prepare to Lead",
      copy: "Participate in planning calls, refine your workshop, understand the retreat flow, and begin preparing your participants.",
    },
    {
      title: "Lead at Villa Wanderlust",
      copy: "Guide your workshop, support your team, collaborate with the other leaders, and experience the full retreat model.",
    },
    {
      title: "Capture Your Work",
      copy: "Have your workshop filmed and gather approved photos, stories, and content connected to your leadership.",
    },
    {
      title: "Plan Your Future Retreat",
      copy: "Once you have met the requirements, work with Villa Wanderlust to pencil in a mutually available future week, subject to a separate agreement.",
    },
    {
      title: "Launch What Comes Next",
      copy: "Use your experience, team, footage, clarity, and future venue opportunity to create and promote your own retreat.",
    },
  ],
};

export const walkAwayWith = {
  heading: "Leave With More Than a Successful Week.",
  items: [
    "Real experience leading inside a transformational retreat",
    "A workshop delivered to real participants",
    "Professional footage of your workshop",
    "Greater confidence as a facilitator",
    "A clearer retreat concept of your own",
    "A leadership story connected to Costa Rica",
    "Three people who understand your work more deeply",
    "Potential future co-leaders or ambassadors",
    "Insight into retreat pacing, structure, and participant care",
    "New professional and personal relationships",
    "A future week at Villa Wanderlust after achieving the team goal",
    "Momentum to launch what comes next",
  ],
  note: "Outcomes vary. This opportunity does not guarantee business success, future enrollment, media results, or income.",
};

export const whoFor = {
  eyebrow: "THE RIGHT FIT",
  heading: "This Opportunity Is Designed for Leaders Who…",
  fits: [
    "Have a message, methodology, modality, or body of work to share",
    "Already lead, teach, facilitate, coach, create, heal, speak, or build community",
    "Want to gain real retreat-leadership experience",
    "Have an existing audience or personal network",
    "Feel confident they can invite three aligned people",
    "Want professional footage of themselves leading",
    "Are serious about hosting a future retreat",
    "Value collaboration over ego",
    "Can support participants responsibly",
    "Are willing to prepare, communicate, and follow through",
    "Want to create an experience that serves people deeply",
    "See Wanderlust as the beginning of a larger leadership path",
  ],
  typesIntro: "Potential leader types include:",
  types: [
    "Coaches",
    "Facilitators",
    "Wellness practitioners",
    "Speakers",
    "Authors",
    "Creators",
    "Musicians",
    "Movement leaders",
    "Breathwork practitioners",
    "Relationship guides",
    "Business mentors",
    "Community builders",
    "Personal-development leaders",
    "Purpose-driven entrepreneurs",
  ],
  credentialNote:
    "For regulated or higher-risk modalities, appropriate training, licensing, and safety standards still apply.",
};

export const whoNotFor = {
  heading: "This May Not Be the Right Role When…",
  items: [
    "You are mainly looking for a complimentary vacation",
    "You do not want responsibility for a team",
    "You are uncomfortable inviting people into the retreat",
    "You cannot commit to preparation calls and planning",
    "You are unwilling to collaborate with other leaders",
    "You expect complete control over the retreat schedule",
    "You require guaranteed business, financial, or media results",
    "You are not willing to follow safety and participant-care standards",
    "You do not yet have a message or experience you feel prepared to guide",
    "You are unable to sign and follow the leader agreement",
  ],
};

/** Confirmed leaders for the five-leader display (open slots filled separately). */
export const confirmedLeadersForDisplay = leaders.filter(
  (leader) => leader.status === "confirmed",
);

export const fiveLeaderTeam = {
  eyebrow: "ONE RETREAT. FIVE LEADERS.",
  heading: "Different Gifts.\nOne Integrated Experience.",
  copy: "The Wanderlust Revival Retreat will be guided by a total of five leaders, each bringing a distinct message, workshop, perspective, and team. Four additional leader positions are currently being sought.",
  openCardLabel: "Leader Position Available",
  openCardSupporting:
    "Workshop and team focus selected during the leader process.",
};

export const valueSummary = {
  heading: "What Could This Opportunity Be Worth to Your Future?",
  stack: [
    "Retreat leadership experience",
    "Professional workshop filming",
    "Three-person team development",
    "Retreat-model training",
    "Future retreat planning",
    "One week at Villa Wanderlust",
  ],
  valueLabel: "Future Villa Week Value",
  valueDisplay: leaderOpportunity.villaWeekValueDisplay,
  valuePrefix: leaderOpportunity.villaWeekValuePrefix,
  supporting:
    "The deeper value may be the confidence, content, relationships, leadership experience, and real retreat pathway you carry forward.",
};

export const leaderFaqs = [
  {
    id: "how-many",
    question: "How many leaders are being selected?",
    answer:
      "Four additional leaders are being selected, creating a total team of five retreat leaders.",
  },
  {
    id: "when",
    question: "When is The Wanderlust Revival Retreat?",
    answer: `${retreatDates.sentence}, at Villa Wanderlust in Costa Rica.`,
  },
  {
    id: "participant-goal",
    question: "What is the participant goal for each leader?",
    answer:
      "Each selected leader will be expected to enroll three aligned participants for their team.",
  },
  {
    id: "enroll-three",
    question: "What happens when I enroll three people?",
    answer:
      "Once you satisfy the final leader requirements and your three participants complete the required enrollment process, you become eligible for a future one-week Villa Wanderlust retreat opportunity, subject to scheduling, availability, and a separate written agreement.",
  },
  {
    id: "value",
    question: "Is the future Villa week really worth nearly $13,000?",
    answer:
      "The retreat organizer has identified the property-week value as nearly $13,000. Final dates, access, inclusions, exclusions, and terms will be outlined in the future retreat-hosting agreement.",
  },
  {
    id: "reserve-early",
    question: "Can I reserve my future retreat date before the 2027 retreat?",
    answer:
      "A leader may be able to pencil in a mutually available future week as part of planning, but a tentative date does not become final until all requirements are satisfied and a separate agreement is completed.",
  },
  {
    id: "participants-become-leaders",
    question: "Can my three participants become leaders on my future retreat?",
    answer:
      "Yes, that may be one of the most powerful ways to use the experience. They can attend Wanderlust as participants, learn the model firsthand, and potentially prepare to support or co-lead your future retreat, subject to your future retreat plans and any applicable standards.",
  },
  {
    id: "invite-same-three",
    question: "Can I invite the same three people to my future retreat?",
    answer:
      "Yes. You may choose to create a follow-up retreat for your original team, subject to your own future retreat structure, agreement, pricing, and capacity.",
  },
  {
    id: "filming",
    question: "Will my workshop be filmed?",
    answer:
      "The current plan is to professionally film each leader’s approved workshop. Final recording format, deliverables, editing, permissions, and usage rights will be confirmed in the leader agreement.",
  },
  {
    id: "workshop-type",
    question: "What kind of workshop can I lead?",
    answer:
      "The workshop should reflect your expertise or message while fitting the larger retreat experience. Topics and formats will be reviewed with the retreat team before confirmation.",
  },
  {
    id: "travel-costs",
    question: "Does being a leader cover all of my travel costs?",
    answer:
      "The final leader agreement will explain exactly what is included and what each leader remains responsible for, including travel, personal expenses, insurance, and any optional activities.",
  },
  {
    id: "airfare",
    question: "Is airfare included?",
    answer:
      "Airfare is not assumed to be included. Final leader travel responsibilities will be confirmed before acceptance.",
  },
  {
    id: "audience",
    question: "Do I need an existing audience?",
    answer:
      "Leaders should have a credible network, audience, client base, community, or personal relationships from which they can invite three aligned participants. Audience size alone is not the deciding factor.",
  },
  {
    id: "commitment",
    question: "Is applying a commitment?",
    answer:
      "No. Applying begins a conversation about fit, goals, responsibilities, and the leader agreement.",
  },
  {
    id: "acceptance",
    question: "Is acceptance guaranteed?",
    answer:
      "No. There are only four open positions, and leaders will be selected based on fit, readiness, alignment, workshop value, leadership ability, and confidence in building an appropriate team.",
  },
];

export const leaderApplication = {
  heading: "Apply to Lead at Wanderlust",
  copy: "Tell us about your work, your community, what you would like to lead, and the retreat you may want to create next.",
  successMessage:
    "Thank you. Your leader application has been received. The retreat team will review it and contact you regarding fit and next steps.",
  submitLabel: "Submit Leader Application",
  consentItems: [
    "This is an application, not automatic acceptance",
    "The leader role includes real responsibilities",
    "Future Villa access is conditional and subject to a separate agreement",
    "Final terms will be provided before acceptance",
  ],
};

export const leaderFinalCta = {
  heading: "Lead the Retreat.\nBuild Your Team.\nCreate What Comes Next.",
  copy: "Four leader positions are available for those ready to bring their work into a real retreat, guide a team of three, capture their leadership on film, and begin building a future retreat of their own.",
  image: images.villaEveningExterior,
};
