"use client";

import homeStyles from "../page.module.css";
import styles from "./pricing.module.css";
import { pricingPlansByTier } from "@/lib/pricing";

export default function PricingPage() {
  const plans = pricingPlansByTier["personal"];

  return (
    <div className={homeStyles.page}>


      <main className={styles.main}>
        <h1 className={styles.heading}>Unlock <span className={styles.accentText}>Your Potential</span></h1>

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
