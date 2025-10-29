import Link from "next/link";
import styles from "../info-page.module.css";

export default function TermsAndConditionsPage() {
  return (
    <div className={styles.container}>
      <article className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          Back to home
        </Link>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.subtitle}>
          These terms outline how we care for your ideas, how you may use the
          Neurema BrainStorm platform, and what to expect as we continue to
          iterate together.
        </p>
        <p className={styles.paragraph}>
          By accessing or using Neurema BrainStorm, you agree to treat the
          content within your workspace with respect for privacy and
          intellectual property. We use your study materials solely to deliver
          personalized revision prompts and do not sell or lease them to third
          parties. You remain responsible for safeguarding your login credentials
          and for the accuracy of the information you store with us.
        </p>
        <p className={styles.paragraph}>
          We may update these terms from time to time to reflect new features,
          legal requirements, or best practices learned from our community.
          Whenever we make significant changes, we will notify you through the
          app or by email. Continued use of the platform after updates signifies
          your acceptance of the revised terms. If you have any questions, reach
          out and we&apos;ll be glad to help.
        </p>
      </article>
    </div>
  );
}
