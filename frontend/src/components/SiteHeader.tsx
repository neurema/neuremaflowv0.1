'use client';

import Link from 'next/link';
import React from 'react';
import styles from '@/app/page.module.css';
import MobileMenu from './MobileMenu';

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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        NEU<span>REM</span>A
      </Link>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
}

