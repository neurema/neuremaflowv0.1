'use client';

import { FormEvent, useEffect, useState, useRef } from "react";
import Image from "next/image";

import styles from "./page.module.css";
import { loginStrapi, registerStrapi } from "@/lib/strapi";

export default function Home() {
  // navLinks removed (unused)

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true); // unused
  const closeModal = () => setIsModalOpen(false);

  const [scrollY, setScrollY] = useState(0);

  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);

  const [featureStates, setFeatureStates] = useState({
    feature1: 'hidden',
    feature2: 'hidden',
    feature3: 'hidden',
    feature4: 'hidden',
    feature5: 'hidden'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const windowHeight = window.innerHeight;
      const middleOfScreen = windowHeight / 2;

      const rect1 = feature1Ref.current?.getBoundingClientRect();
      const rect2 = feature2Ref.current?.getBoundingClientRect();
      const rect3 = feature3Ref.current?.getBoundingClientRect();
      const rect4 = feature4Ref.current?.getBoundingClientRect();
      const rect5 = feature5Ref.current?.getBoundingClientRect();

      const updateState = (key: string, rect: DOMRect | undefined, nextRect: DOMRect | undefined, isLast: boolean) => {
        if (!rect) return;

        // Enter threshold: element top is within viewport (with some buffer)
        const isVisible = rect.top < windowHeight - 100;

        // Exit threshold: 
        // If it's not the last one, exit when the NEXT element hits the middle of the screen.
        // If it is the last one, exit when it scrolls off the top.
        let isExiting = false;
        if (isLast) {
          isExiting = rect.top < -50;
        } else if (nextRect) {
          isExiting = nextRect.top < middleOfScreen;
        }

        let newState = 'hidden';
        if (isVisible) newState = 'visible';
        if (isExiting) newState = 'exiting';

        setFeatureStates(prev => {
          if (prev[key as keyof typeof prev] !== newState) {
            return { ...prev, [key]: newState };
          }
          return prev;
        });
      };

      updateState('feature1', rect1, rect2, false);
      updateState('feature2', rect2, rect3, false);
      updateState('feature3', rect3, rect4, false);
      updateState('feature4', rect4, rect5, false);
      updateState('feature5', rect5, undefined, true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... (rest of the component logic remains same until return)

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

  // handleGoogleLogin removed as it depends on Firebase

  return (
    <div className={styles.page} id="top">
      <main
        className={styles.main}
        style={{
          opacity: Math.max(0, 1 - scrollY / 500),
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: `blur(${scrollY * 0.02}px)`
        }}
      >
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

      <section className={styles.downloadSection}>
        <Image src="/neurema-mascot.png" alt="Neurema Mascot" className={styles.downloadMascot} width={512} height={512} />
        <div className={styles.buttonGroup}>
          <a
            href="https://apps.apple.com/in/app/neurema/id6757379395"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <svg viewBox="0 0 384 512" className={styles.downloadIcon} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
            </svg>
            <span>Download on App Store</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.neurema.neurema&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            <Image src="/playstore.png" alt="Play Store" className={styles.downloadIcon} width={24} height={24} />
            <span>Download on Play Store</span>
          </a>
        </div>
      </section>

      <section className={styles.features}>
        <div
          ref={feature1Ref}
          className={`${styles.featureItem} ${styles[featureStates.feature1]}`}
        >
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Smart Input</h2>
            <p className={styles.featureDescription}>
              Simply add the topic you studied. Our app intelligently categorizes and schedules it for future revision.
            </p>
          </div>
          <div className={styles.featureImageWrapper}>
            <Image src="/feature-input.png" alt="Input feature" className={styles.featureImage} width={1024} height={312} />
          </div>
        </div>

        <div
          ref={feature2Ref}
          className={`${styles.featureItem} ${styles[featureStates.feature2]}`}
        >
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Optimized Scheduling</h2>
            <p className={styles.featureDescription}>
              The app smartly tells you when to next study the topic for max efficiency based on cognitive sciences and spaced repetition.
            </p>
          </div>
          <div className={styles.featureImageWrapper}>
            <Image src="/feature-card.png" alt="Calendar feature" className={styles.featureImage} width={1024} height={613} />
          </div>
        </div>

        <div
          ref={feature3Ref}
          className={`${styles.featureItem} ${styles[featureStates.feature3]}`}
        >
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Topic Bubbles</h2>
            <p className={styles.featureDescription}>
              We group similar topics into bubbles so when the exams are closer you can revise multiple related topics at once for better context.
            </p>
          </div>
          <div className={styles.featureImageWrapper}>
            <Image src="/feature-calendar.png" alt="Card feature" className={styles.featureImage} width={756} height={1024} />
          </div>
        </div>

        <div
          ref={feature4Ref}
          className={`${styles.featureItem} ${styles[featureStates.feature4]}`}
        >
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Pomodoro Timer</h2>
            <p className={styles.featureDescription}>
              Stay focused with our built-in Pomodoro timer. Track your study sessions and take breaks efficiently.
            </p>
          </div>
          <div className={styles.featureImageWrapper}>
            <Image src="/feature-pomodoro.png" alt="Pomodoro feature" className={styles.featureImage} width={1024} height={827} />
          </div>
        </div>

        <div
          ref={feature5Ref}
          className={`${styles.featureItem} ${styles[featureStates.feature5]}`}
        >
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Interactive Study Modes</h2>
            <p className={styles.featureDescription}>
              Test your knowledge with our interactive Voice (Viva) and Text modes to enhance retention and remember even better.
            </p>
          </div>
          <div className={styles.featureImageWrapper}>
            <Image src="/feature-modes.png" alt="Modes feature" className={styles.featureImage} width={1024} height={675} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        {/* Links moved to header */}
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
                {/* Google Sign In removed */}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
