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
        <ul className={styles.list}>
          <li>
            <strong>Ashutosh Thakur</strong> &ndash; CTO
          </li>
          <li>
            <strong>Dr. Ibrahim Ahsan Abdullah</strong> &ndash; Business Head
          </li>
          <li>
            <strong>Jaivardhan Bhola</strong> &ndash; Head of App Development
          </li>
          <li>
            <strong>Priya Bhatt</strong> &ndash; Marketing and Branding Head
          </li>
          <li>
            <strong>Dr. Priyansh Jain</strong> &ndash; Business Strategist and
            Adviser
          </li>
          <li>
            <strong>Dr. Shoaib Salim Attar</strong> &ndash; Founder and CEO
          </li>
        </ul>
      </article>
    </div>
  );
}
