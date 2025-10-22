'use client';

import { FormEvent, useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const navLinks = [
    { href: "#", label: "Get Started" },
    { href: "#", label: "Storm" },
    { href: "#", label: "Pricing" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <a className={styles.logo} href="#top">
          NEU<span>REMA</span>
        </a>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={styles.signIn}
          onClick={openModal}
          aria-haspopup="dialog"
          aria-expanded={isModalOpen}
        >
          SIGN IN
        </button>
      </header>

      <main className={styles.hero}>
        <span className={styles.tagline}>
          <span className={styles.tagDot} aria-hidden />
          Because, Knowledge Deserves to Stay
        </span>
        <h1 className={styles.title}>
          Digital <span className={styles.strike}>BrainRot</span>{" "}
          <span className={styles.highlight}>BrainStorm</span>
        </h1>
        <p className={styles.subtitle}>
          We help you transform your short-term knowledge into long-term memory
          with our neuroscience-grounded revision tool.
        </p>
      </main>

      <div className={styles.brain} aria-hidden="true" />
      <span
        aria-hidden="true"
        className={`${styles.spark} ${styles.sparkTopLeft}`}
      />
      <span
        aria-hidden="true"
        className={`${styles.spark} ${styles.sparkTopRight}`}
      />
      <span
        aria-hidden="true"
        className={`${styles.spark} ${styles.sparkBottomLeft}`}
      />
      <span
        aria-hidden="true"
        className={`${styles.spark} ${styles.sparkBottomRight}`}
      />

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="signin-heading"
            aria-describedby="signin-subheading"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close sign in dialog"
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle} id="signin-heading">
                Welcome back
              </h2>
              <p className={styles.modalDescription} id="signin-subheading">
                Sign in to pick up where you left off with Neurema BrainStorm.
              </p>
            </div>
            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <label className={styles.modalField} htmlFor="signin-email">
                Email address
                <input
                  id="signin-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={styles.modalInput}
                  autoFocus
                  required
                />
              </label>
              <label className={styles.modalField} htmlFor="signin-password">
                Password
                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className={styles.modalInput}
                  required
                />
              </label>
              <div className={styles.modalActions}>
                <button type="submit" className={styles.modalSubmit}>
                  Continue
                </button>
                <button
                  type="button"
                  className={styles.modalForgot}
                  onClick={closeModal}
                >
                  Forgot password?
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
