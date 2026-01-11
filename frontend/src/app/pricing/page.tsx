"use client";

import { useState } from "react";
// import Link from "next/link"; // unused
import homeStyles from "../page.module.css";
import styles from "./pricing.module.css";
import { pricingPlansByTier, type PricingTier } from "@/lib/pricing";

const tiers: { id: PricingTier; label: string }[] = [
  { id: "personal", label: "Personal" },
  { id: "business", label: "Business" },
];

export default function PricingPage() {
  const [activeTier, setActiveTier] = useState<PricingTier>("personal");
  const plans = pricingPlansByTier[activeTier];

  return (
    <div className={homeStyles.page}>


      <main className={styles.main}>
        <h1 className={styles.heading}>Unlock <span className={styles.accentText}>Your Potential</span></h1>

        <div className={styles.tierToggle}>
          <div className={styles.tierPill}>
            {tiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                className={`${styles.tierButton} ${activeTier === tier.id ? styles.tierButtonActive : ""
                  }`}
                onClick={() => setActiveTier(tier.id)}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        <section className={styles.cards} aria-label="Pricing plans">
          {plans.map((plan) => (
            <article key={plan.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{plan.name}</h2>
                <div className={styles.priceRow}>
                  <span className={styles.priceSymbol}>₹</span>
                  <span className={styles.priceValue}>{plan.price}</span>
                </div>
                <div className={styles.priceMeta}>
                  {plan.currency} / {plan.unit} • {plan.billingNote}
                </div>
              </header>

              <div className={styles.cardBody}>
                <p className={styles.cardLead}>{plan.ctaLabel} plan for Neurema.</p>
                <button type="button" className={styles.ctaButton}>
                  {plan.ctaLabel}
                </button>
                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
