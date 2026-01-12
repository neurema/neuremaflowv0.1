'use client';

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./page.module.css";
import { loginStrapi, registerStrapi } from "@/lib/strapi";
import ThreeDCarousel from "@/components/ThreeDCarousel";

export default function Home() {
  // navLinks removed (unused)

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true); // unused
  const closeModal = () => setIsModalOpen(false);

  const [scrollY, setScrollY] = useState(0);

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

      // 2. If Strapi Login Success, check Firebase (Removed for static site)
      // Login successful
      closeModal();
      alert("Logged in successfully!");

    } catch {
      // 3. If Strapi Login Fails, try Strapi Register
      try {
        // Using email as username for simplicity
        await registerStrapi(email, email, password);

        // If Strapi Register Success, create in Firebase (Removed for static site)

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

  return (
    <div className={styles.page} id="top">
      <ThreeDCarousel />



      <footer className={styles.footer}>
        {/* Links moved to header */}
      </footer>

      {
        isModalOpen && (
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
                  {/* Google Sign In removed */}
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div >
  );
}
