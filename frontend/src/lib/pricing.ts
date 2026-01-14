export type PricingTier = "personal";

export interface PricingPlan {
  id: string;
  tier: PricingTier;
  name: string;
  price: number; // in INR
  currency: "INR";
  unit: string; // e.g. "exam"
  billingNote: string;
  ctaLabel: string;
  features: string[];
}

export type PricingPlansByTier = Record<PricingTier, PricingPlan[]>;

export const pricingPlansByTier: PricingPlansByTier = {
  personal: [
    {
      id: "effective-learning",
      tier: "personal",
      name: "Effective Learning",
      price: 279,
      currency: "INR",
      unit: "exam",
      billingNote: "Valid until the set exam date",
      ctaLabel: "Get Effective",
      features: [
        "Use our latest neuro-sync engine v.e.1",
        "Access the neuroadaptive effective revision platform",
        "Get full access to all activities",
        "Access the built-in active learning support system",
        "Analyse real-time topic memory locations",
      ],
    },
    {
      id: "exam-crunch",
      tier: "personal",
      name: "Exam Crunch",
      price: 349,
      currency: "INR",
      unit: "exam",
      billingNote: "Valid until the set exam date",
      ctaLabel: "Get Crunch",
      features: [
        "Use our latest neuro-sync engine v.c.1",
        "Access a high intensity rapid revision platform",
        "Get full access to all activities",
        "Access the built-in bubble system",
        "Move across a personalised crunch schedule",
      ],
    },
  ],
};
