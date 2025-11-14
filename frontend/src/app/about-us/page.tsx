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
        <p className={styles.paragraph}>
          <strong>Dr. Priyansh Jain</strong> &ndash; A senior who understands
          businesses and guides us. A renowned teacher, who understands the real
          issue of students. He is deeply connected with our user base and
          possesses both knowledge and experience in the EdTech industry. He has
          also funded us wholeheartedly.
        </p>
        <p className={styles.paragraph}>
          <strong>Ashutosh Thakur</strong> &ndash; A core member since almost the
          beginning. He helped identify the exact components required for the
          wearable and made the project technically and financially feasible.
          The driving force behind our wearable creation, he also created our
          sleek website and contributes to tech-related decision making for both
          the app and wearables.
        </p>
        <p className={styles.paragraph}>
          <strong>Jaivardhan Bhola</strong> &ndash; A prodigy in app
          development. He built and handed over a fully scalable app in just 30
          days. He&apos;s the mind behind our core algorithms and the reason our
          application &mdash; the first point of contact with users &mdash; runs
          so smoothly and efficiently.
        </p>
        <p className={styles.paragraph}>
          <strong>Md. Ibrahim Ahsan Abdullah</strong> &ndash; Our marketing
          powerhouse. He has exceptional convincing skills and can pitch our
          problem-solving platform to anyone, including users, investors, and
          students. He also ensures that the educational data across the
          platform remains accurate, relevant, and high in quality. With his
          business experience, he helps us make the right strategic and
          operational choices.
        </p>
        <p className={styles.paragraph}>
          <strong>Priya Bhatt</strong> &ndash; She&apos;s the reason our brand
          doesn&apos;t just perform well but also looks great. She contributes to
          design, feature planning, and product marketing. She&apos;s closely
          involved in mapping out strategies and improving user experience.
        </p>
      </article>
    </div>
  );
}
