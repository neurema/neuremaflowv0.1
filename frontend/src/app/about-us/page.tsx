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
            <strong>Shoaib Salim Attar</strong> &ndash; Founder and CEO
          </li>
          <li>
            <strong>Ashutosh Thakur</strong> &ndash; CTO
          </li>
          <li>
            <strong>Priya Bhatt</strong> &ndash; Marketing and Branding Head
          </li>
          <li>
            <strong>Priyansh Jain</strong> &ndash; Business Strategist and
            Adviser
          </li>
          <li>
            <strong>Jaivardhan Bhola</strong> &ndash; Head of App Development
          </li>
          <li>
            <strong>Ibrahim Ahsan Abdullah</strong> &ndash; Business Head
          </li>
        </ul>
      </article>
    </div>
  );
}
