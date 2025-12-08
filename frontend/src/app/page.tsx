'use client';

import { FormEvent, useEffect, useState } from "react";

import styles from "./page.module.css";
import { auth, googleProvider } from "@/lib/firebase";
import { loginStrapi, registerStrapi } from "@/lib/strapi";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Home() {
  const navLinks: { href: string; label: string }[] = [];

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // 1. Try Strapi Login
      await loginStrapi(email, password);

      // 2. If Strapi Login Success, check Firebase
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (firebaseError: unknown) {
        if (typeof firebaseError === 'object' && firebaseError !== null && 'code' in firebaseError && (firebaseError as { code: string }).code === 'auth/user-not-found') {
          // Create user in Firebase if missing
          await createUserWithEmailAndPassword(auth, email, password);
        } else {
          throw firebaseError;
        }
      }

      // Login successful
      closeModal();
      alert("Logged in successfully!");

    } catch (_strapiError) {
      // 3. If Strapi Login Fails, try Strapi Register
      try {
        // Using email as username for simplicity
        await registerStrapi(email, email, password);

        // If Strapi Register Success, create in Firebase
        await createUserWithEmailAndPassword(auth, email, password);

        // Registration successful
        closeModal();
        alert("Account created and logged in!");

      } catch (registerError: unknown) {
        console.error("Auth failed:", registerError);
        const message = registerError instanceof Error ? registerError.message : "Authentication failed";
        alert(message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const email = user.email;

      if (!email) {
        throw new Error("No email provided by Google");
      }

      // Generate a password for Strapi (since we don't have the real one)
      // In a real app, you'd use a more robust strategy or a dedicated social auth endpoint
      const generatedPassword = `google-auth-${user.uid}`;

      try {
        // Try to login to Strapi
        await loginStrapi(email, generatedPassword);
      } catch {
        // If login fails, register
        try {
          await registerStrapi(email, email, generatedPassword);
        } catch (registerError: unknown) {
          console.error("Strapi registration failed:", registerError);
          // Even if Strapi fails, we might want to let them in if Firebase succeeded, 
          // but for consistency with the dual-auth requirement, we'll show an error.
          throw registerError;
        }
      }

      closeModal();
      alert("Logged in with Google successfully!");

    } catch (error: unknown) {
      console.error("Google login failed:", error);
      const message = error instanceof Error ? error.message : "Google login failed";
      alert(message);
    }
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
        <div className={styles.heroBackground} aria-hidden="true">
        </div>
        <div className={styles.heroContent}>
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
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/about-us">About Us</a>
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>
        <a href="/pricing">Pricing</a>
      </footer>

      {isModalOpen && (
        <div className={styles.modalOverlay} role="presentation" onClick={closeModal}>
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
                <button type="button" className={styles.modalForgot} onClick={closeModal}>
                  Forgot password?
                </button>
                <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.1)', margin: '10px 0' }} />
                <button
                  type="button"
                  className={styles.googleButton}
                  onClick={handleGoogleLogin}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
