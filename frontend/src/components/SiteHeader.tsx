'use client';

import Link from 'next/link';
import styles from '@/app/page.module.css';

export function SiteHeader() {
  const navLinks: { href: string; label: string }[] = [
    { href: "/app", label: "App" },
    { href: "/storm", label: "Storm" },
    { href: "/collabs", label: "Collaboration and Research" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        NEU<span>REM</span>A
      </Link>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

