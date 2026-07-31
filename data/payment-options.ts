/**
 * Centralized content for the invitation-only /payments page.
 * Edit payment amounts, bank placeholders, PayPal details, and copy here.
 */

import { retreatDates, retreatLocation, siteConfig } from "./retreat";

export const paymentPage = {
  retreatName: siteConfig.name,
  dates: retreatDates.display,
  locationLine: `${retreatLocation.venue} • ${retreatLocation.region}`,
  venue: retreatLocation.venue,
  region: retreatLocation.region,
  contactEmail: "fundingvillawanderlust@gmail.com",
  paypalRecipientEmail: "fundingvillawanderlust@gmail.com",
  supportContactName: "Robert Evans",
  supportContactEmail: "Robert@liveyourlist.com",
  /** Set true only after verified bank details are supplied below. */
  bankDetailsFinalized: true,
  bankDetailsPendingMessage:
    "Bank-transfer instructions are being finalized. Please contact the retreat team before sending payment.",
  agreementNote:
    "All payment plans, deadlines, installment amounts, cancellation terms, and participant responsibilities are governed by the final Retreat Participation Agreement.",
  pageDisclaimer:
    "Payment selection, enrollment, and participation are subject to receipt of required funds, signed agreements, and confirmation by the retreat team.",
} as const;

export const paymentHero = {
  badge: "Official Participant Invitation",
  headline:
    "Congratulations! You Have Been Officially Invited to Join The Wanderlust Revival Retreat.",
  supporting:
    "One of our Retreat Leaders has invited you to become part of their team for an unforgettable week of revival, connection, adventure, restoration, and meaningful transformation at Villa Wanderlust in Costa Rica.",
  securing:
    "Use the payment details below to officially secure your participation.",
  leaderNotice:
    "Please let the person who invited you know as soon as you have completed your payment or payment arrangements. Your Retreat Leader will help coordinate important team information, enrollment documents, travel preparation, and other retreat logistics.",
  placeNote:
    "Your place is secured only after required payment and retreat agreements are completed.",
};

export const paymentIntro = {
  eyebrow: "CHOOSE YOUR PAYMENT STRUCTURE",
  heading: "Select the Option That Works Best for You",
  copy: "The retreat investment varies based on the payment method and whether you choose to pay in full or use an approved payment plan.",
  review:
    "Review the four options below, choose the one that best fits your needs, and follow the corresponding instructions carefully. Your specific payment amount and schedule should already have been confirmed during your call with one of the retreat hosts.",
  agreementNote: paymentPage.agreementNote,
};

export type PaymentOptionId =
  | "bank-full"
  | "bank-plan"
  | "card-full"
  | "card-plan";

export type PaymentOption = {
  id: PaymentOptionId;
  order: number;
  amount: number;
  amountDisplay: string;
  title: string;
  method: string;
  description: string;
  badge: string;
  formLabel: string;
  instructionsHeading: string;
  instructionsCopy: string;
  isBank: boolean;
  isPlan: boolean;
};

export const paymentOptions: PaymentOption[] = [
  {
    id: "bank-full",
    order: 1,
    amount: 7500,
    amountDisplay: "$7,500",
    title: "Preferred Bank Transfer Pay-in-Full Rate",
    method: "ACH or wire transfer",
    description: "One payment by approved ACH or wire transfer.",
    badge: "Best Available Rate",
    formLabel: "$7,500 bank transfer paid in full",
    instructionsHeading: "Pay in Full by ACH or Wire Transfer",
    instructionsCopy:
      "This option provides the preferred retreat rate and completes your retreat payment in one approved bank transaction using the amount confirmed during your enrollment call.",
    isBank: true,
    isPlan: false,
  },
  {
    id: "bank-plan",
    order: 2,
    amount: 8000,
    amountDisplay: "$8,000",
    title: "Bank Transfer Payment Plan",
    method: "Scheduled ACH or wire transfer",
    description:
      "Manual ACH or wire-transfer payments on the schedule confirmed during your enrollment call.",
    badge: "Bank Payment Flexibility",
    formLabel: "$8,000 bank transfer payment plan",
    instructionsHeading: "Bank Transfer Payment Plan",
    instructionsCopy:
      "This option allows you to complete your retreat investment through scheduled ACH or wire-transfer installments. Payments are not automatically charged, and invoices will not be issued for individual installments.",
    isBank: true,
    isPlan: true,
  },
  {
    id: "card-full",
    order: 3,
    amount: 8500,
    amountDisplay: "$8,500",
    title: "Credit Card Pay-in-Full Rate",
    method: "PayPal / credit card",
    description: "One credit-card payment through PayPal.",
    badge: "Credit Card Pay in Full",
    formLabel: "$8,500 credit card paid in full through PayPal",
    instructionsHeading: "Pay in Full by Credit Card Through PayPal",
    instructionsCopy:
      "Please manually send your required retreat payment through PayPal this week using the amount confirmed during your enrollment call.",
    isBank: false,
    isPlan: false,
  },
  {
    id: "card-plan",
    order: 4,
    amount: 9000,
    amountDisplay: "$9,000",
    title: "Credit Card Payment Plan",
    method: "Scheduled PayPal payments",
    description:
      "Manual credit-card payments through PayPal on the schedule confirmed during your enrollment call.",
    badge: "Maximum Payment Flexibility",
    formLabel: "$9,000 credit card payment plan through PayPal",
    instructionsHeading: "Credit Card Payment Plan Through PayPal",
    instructionsCopy:
      "Please manually send your required retreat payment through PayPal this week. Future installments must also be submitted manually according to the schedule provided to you.",
    isBank: false,
    isPlan: true,
  },
];

/** Primary PayPal payment instructions shown after a credit-card option is selected. */
export const paymentRequiredThisWeek = {
  heading: "Payment Required This Week",
  intro: "Please manually send your required retreat payment through PayPal this week.",
  recipientLabel: "Send your payment to",
  recipientEmail: paymentPage.paypalRecipientEmail,
  amountCopy:
    "Your required payment amount should have been confirmed during your call with one of the retreat hosts. Please send only the amount you were instructed to pay.",
  uncertainCopy: `If you do not know the correct amount, do not guess or submit a payment until you have confirmed it. Email ${paymentPage.supportContactName} at ${paymentPage.supportContactEmail} for assistance.`,
  hostNote:
    "The retreat host will provide any additional PayPal instructions directly to you.",
  ctaLabel: "Confirm My Payment Choice",
  ctaHref: "#payment-request",
};

export const manualPaymentResponsibility = {
  heading: "Important: Payments Are Submitted Manually",
  copy: [
    "An invoice or automatic payment request will not be sent. You are responsible for manually submitting your payment by its due date.",
    "If you selected a payment plan, each future installment must also be manually submitted according to the payment schedule provided to you. The retreat team may send courtesy reminders, but you remain responsible for making every payment in full and on time.",
  ],
};

export const beforeSendingChecklist = {
  heading: "Before Sending Your Payment",
  intro: "Please confirm that:",
  items: [
    "You are sending the payment through PayPal this week.",
    `The recipient is ${paymentPage.paypalRecipientEmail}.`,
    "The payment amount matches the amount confirmed during your retreat call.",
    "You understand that future scheduled payments must also be submitted manually.",
  ],
};

export type BankDetailField = {
  label: string;
  value: string;
  /** Multi-line address or bank location block. */
  multiline?: boolean;
  /** Show a one-click copy control for accurate entry. */
  copyable?: boolean;
  /** Render as tabular digits and discourage telephone auto-linking. */
  numeric?: boolean;
};

const usBankSharedFields: BankDetailField[] = [
  {
    label: "Recipient Name",
    value: "Jaime Murphy",
    copyable: true,
  },
  {
    label: "Account Type",
    value: "Checking",
    copyable: true,
  },
  {
    label: "Routing Number",
    value: "084009519",
    copyable: true,
    numeric: true,
  },
  {
    label: "Account Number",
    value: "124449821911639",
    copyable: true,
    numeric: true,
  },
  {
    label: "Bank Name and Address",
    value: "Wise US Inc.\n108 W 13th St\nWilmington, DE 19801\nUnited States",
    multiline: true,
    copyable: true,
  },
  {
    label: "Recipient Address",
    value:
      "Jaime Murphy\n7204 West Coast Highway 45\nNewport Beach, CA 92663",
    multiline: true,
    copyable: true,
  },
];

export const domesticWireTransfer = {
  optionLabel: "Option 1",
  heading: "Domestic Wire Transfer",
  amount: {
    heading: "Amount to Send",
    value: "$7,500",
  },
  fields: usBankSharedFields,
  note: "These details are for a domestic wire transfer from a bank located in the United States.",
};

export const achBankTransfer = {
  optionLabel: "Option 2",
  heading: "ACH Bank Transfer",
  amount: {
    heading: "Amount to Send",
    value: "$7,500",
  },
  fields: usBankSharedFields,
  note: "These details are for an ACH transfer from a bank located in the United States.",
};

export const internationalPaymentNotice = {
  heading: "Sending Payment From Outside the United States?",
  copy: "Do not use the domestic ACH or wire-transfer instructions above. An international SWIFT transfer requires different payment information. Please contact the retreat team to request the correct international SWIFT transfer details before sending your payment.",
};

export const bankPaymentReference = {
  heading: "Payment Reference",
  copy: "When your bank permits a memo or reference field, include the following:",
  value: "Wanderlust Retreat – [Participant’s Full Name]",
};

export const bankPaymentConfirmation = {
  heading: "Confirm Your Transfer",
  copy: "After sending the transfer, submit confirmation through this page or email the retreat team with:",
  items: [
    "Participant’s full name",
    "Amount sent",
    "Date sent",
    "Transfer method: ACH or domestic wire",
    "Transaction or confirmation number, when available",
  ],
  privacyNote:
    "Do not include your bank-account number in the confirmation.",
};

export const bankPaymentExtras = {
  feeNote:
    "Bank charges, intermediary-bank charges, foreign-exchange costs, and transfer fees are the participant’s responsibility unless the final agreement states otherwise. The full required USD amount must be received.",
  officialNote:
    "Your payment plan becomes official only after the Retreat Participation Agreement has been completed and the first required payment has been received.",
};

export const paymentForm = {
  heading: "Confirm Your Payment Choice",
  copy: "Tell us which payment option you have selected. The retreat team will review your selection and send any bank instructions, agreement, or next steps required to complete your enrollment.",
  submitLabel: "Submit Payment Selection",
  successMessage:
    "Thank you. Your payment selection has been received. The retreat team will review it and send any required payment instructions, agreement, or next steps.",
  bankMethodOptions: [
    "ACH",
    "Domestic wire",
    "International wire",
    "Not sure",
  ],
  paymentStatusOptions: [
    "I need payment instructions",
    "I am ready to make payment",
    "I have already sent payment",
    "I need help choosing an option",
  ],
  paymentAmountConfirmation:
    "I confirm that I am sending the payment amount provided during my retreat enrollment call and understand that I am responsible for manually submitting all scheduled payments by their respective due dates.",
  acknowledgments: [
    "I understand that submitting this form does not by itself secure my place.",
    "My participation is confirmed only after required payment and retreat agreements are completed.",
    "I will notify the Retreat Leader who invited me after making payment.",
  ],
};

export const afterPayment = {
  heading: "After You Make a Payment",
  steps: [
    "Save your bank or PayPal confirmation.",
    "For bank transfers, submit or email confirmation with your full name, amount sent, date sent, transfer method (ACH or domestic wire), and transaction number when available. Do not include your bank-account number.",
    "Notify the Retreat Leader who invited you.",
    "Watch for your Retreat Participation Agreement and logistics information.",
    "Remember each upcoming due date and manually send every payment on time.",
    "Do not book nonrefundable travel until the retreat team confirms the appropriate travel details.",
  ],
};

export const enrollmentNotice = {
  heading: "Payment alone may not complete enrollment.",
  intro: "A participant’s place becomes official only after:",
  items: [
    "The required payment or first installment is received",
    "The Retreat Participation Agreement is signed",
    "Required participant information is submitted",
    "The retreat team confirms enrollment",
  ],
};

export const paymentSafety = {
  heading: "Protect Your Payment",
  items: [
    "Verify that payment instructions match the information on this official page or a personalized message from the retreat team.",
    "Never send payment to a different email address or bank account based only on an unexpected message.",
    "Contact the retreat team before paying if any instruction appears different.",
    "Include “Wanderlust Retreat – [Participant’s Full Name]” in the transfer memo or reference field when your bank permits it.",
    "Keep your receipt or transaction confirmation.",
    `If you do not know the correct amount to send, email ${paymentPage.supportContactName} at ${paymentPage.supportContactEmail} before submitting payment.`,
  ],
};

export const paymentComparison = {
  heading: "A Clear Look at Your Options",
  note: "The total investment reflects both the payment method and payment schedule selected. Send only the amount confirmed during your enrollment call.",
  items: [
    {
      label: "Lowest Available Rate",
      amount: "$7,500",
      detail: "Bank transfer paid in full",
    },
    {
      label: "Bank Payment Flexibility",
      amount: "$8,000",
      detail: "Scheduled bank-transfer plan",
    },
    {
      label: "Credit Card Pay in Full",
      amount: "$8,500",
      detail: "One PayPal payment",
    },
    {
      label: "Maximum Flexibility",
      amount: "$9,000",
      detail: "Scheduled credit-card payments through PayPal",
    },
  ],
};

export const paymentFaqs = [
  {
    id: "lowest-rate",
    question: "Which payment option offers the lowest retreat price?",
    answer:
      "The $7,500 bank-transfer pay-in-full option offers the preferred rate.",
  },
  {
    id: "credit-card",
    question: "Can I pay by credit card?",
    answer:
      "Yes. Approved participants may pay by credit card through PayPal. Please manually send your required payment this week.",
  },
  {
    id: "paypal-recipient",
    question: "Where do I send PayPal payments?",
    answer: `Send PayPal payments to ${paymentPage.paypalRecipientEmail}. Verify the recipient email and send only the payment amount confirmed during your enrollment call. The retreat host will provide any additional PayPal instructions directly to you.`,
  },
  {
    id: "payment-amount",
    question: "How do I know how much to send?",
    answer: `Your payment amount should have been confirmed during your call with one of the retreat hosts. If you do not know the correct amount, do not guess. Email ${paymentPage.supportContactName} at ${paymentPage.supportContactEmail} before submitting payment.`,
  },
  {
    id: "when-to-pay",
    question: "When do I need to send my PayPal payment?",
    answer:
      "Please manually send your required retreat payment through PayPal this week.",
  },
  {
    id: "invoices",
    question: "Will I receive an invoice or automatic payment request?",
    answer:
      "No. An invoice or automatic payment request will not be sent. You are responsible for manually submitting this payment by its due date. If you selected a payment plan, each future installment must also be submitted manually according to the schedule provided to you.",
  },
  {
    id: "ach",
    question: "Can I pay by ACH?",
    answer:
      "Yes. Use the ACH Bank Transfer details on this page for transfers from a bank located in the United States.",
  },
  {
    id: "wire",
    question: "Can I pay by domestic wire transfer?",
    answer:
      "Yes. Use the Domestic Wire Transfer details on this page for wires from a bank located in the United States.",
  },
  {
    id: "international",
    question: "Can I send payment from outside the United States?",
    answer:
      "Do not use the domestic ACH or wire-transfer instructions on this page. An international SWIFT transfer requires different payment information. Contact the retreat team to request the correct international SWIFT transfer details before sending payment.",
  },
  {
    id: "fees",
    question: "Who pays bank or international wire fees?",
    answer:
      "Unless the Retreat Participation Agreement states otherwise, the participant is responsible for bank, intermediary, currency-conversion, or transfer charges, and the required USD amount must be received in full.",
  },
  {
    id: "installments",
    question: "When are payment-plan installments due?",
    answer:
      "Your payment schedule should have been confirmed during your call with one of the retreat hosts and will also be reflected in the Retreat Participation Agreement. You are responsible for manually submitting each installment by its scheduled due date.",
  },
  {
    id: "form-secures",
    question: "Is my place secured when I submit the form?",
    answer:
      "No. The form communicates your selection. Enrollment is completed only after the required payment and agreements are received and confirmed.",
  },
  {
    id: "tell-leader",
    question: "Should I tell the person who invited me?",
    answer:
      "Yes. Notify your Retreat Leader when you choose an option and again after your payment has been completed so team and logistics information can be coordinated.",
  },
  {
    id: "help",
    question: "What if I need help?",
    answer: `Use the payment request form or email ${paymentPage.supportContactName} at ${paymentPage.supportContactEmail} before sending funds.`,
  },
];

export const paymentFinalCta = {
  heading: "You’re One Step Closer to Costa Rica",
  copy: "Once your payment option, required payment, and participation agreement are complete, the retreat team and the Leader who invited you will help you prepare for the journey ahead.",
  primaryLabel: "Confirm My Payment Choice",
  primaryHref: "#payment-request",
  secondaryLabel: "Return to the Retreat Overview",
  secondaryHref: "/",
};

export function getPaymentOption(id: PaymentOptionId | null) {
  if (!id) return null;
  return paymentOptions.find((option) => option.id === id) ?? null;
}

export function isPlaceholderValue(value: string) {
  return value.trim().startsWith("[ADD ") && value.trim().endsWith("]");
}
