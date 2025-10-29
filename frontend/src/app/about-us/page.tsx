import Link from "next/link";
import styles from "../info-page.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <article className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          Back to home
        </Link>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          Neurema BrainStorm was founded by a small team of educators, artists,
          and engineers who believe that learning sticks best when it feels
          inspiring.
        </p>
        <p className={styles.paragraph}>
          Our studio started as an after-hours experiment to make study sessions
          feel more like creative workshops. Over countless cups of coffee and
          dozens of whiteboard sketches, we crafted a platform that balances
          neuroscience-backed practice with the spark of storytelling. Today, we
          continue to design delightful memory experiences that honor every
          learner&apos;s curiosity.
        </p>
        <p className={styles.paragraph}>
          While we are still growing, our promise remains the same: keep the
          interface simple, keep the insights transparent, and always listen to
          the community that trusts us with their ideas. If you ever want to say
          hello, brainstorm a feature, or just share what you&apos;re working on,
          our inbox is always open.
        </p>
      </article>
    </div>
  );
}
