import Link from 'next/link';
import styles from '@/app/page.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/about-us">About Us</Link>
      <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
      <Link href="/pricing">Pricing</Link>
    </footer>
  );
}

