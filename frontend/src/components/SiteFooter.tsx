import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()}  Neurema Pvt. Ltd. All rights reserved.</p>
    </footer>
  );
}

