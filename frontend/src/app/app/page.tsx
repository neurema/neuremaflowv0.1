'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function AppPage() {
    return (
        <div className={styles.page}>
            {/* Background Ambience */}
            <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

            {/* Hero Section */}
            <main className={styles.hero}>
                <div className={styles.badge}>Available on iOS & Android</div>
                <h1 className={styles.headline}>
                    YOUR POCKET<br /><span className={styles.accentText}>NEUROSCIENTIST</span>
                </h1>
                <p className={styles.subhead}>
                    Stop letting knowledge rot. Transform short-term inputs into long-term mastery with the power of spaced repetition.
                </p>

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
                        href="https://play.google.com/store/apps/details?id=com.neurema.neurema"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        <Image src="/playstore.png" alt="" className={styles.downloadIcon} width={24} height={24} />
                        <span>Download on Play Store</span>
                    </a>
                </div>

                <div className={styles.heroVisual}>
                    <Image
                        src="/feature-input.png"
                        alt="Neurema App Interface"
                        className={styles.phoneMockup}
                        width={1024}
                        height={312}
                    />
                </div>
            </main>

            {/* Features: Alternating Rows */}
            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Everything you need to remember.</h2>

                <div className={styles.featuresList}>
                    {/* 1. Smart Input */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Smart Input</h3>
                            <p className={styles.cardDesc}>
                                Just type what you learned. Our AI categorizes it, schedules it, and prepares it for your future self. No friction, just focus.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/feature-input.png" alt="Smart Input" className={styles.cardImage} width={1024} height={312} />
                        </div>
                    </div>

                    {/* 2. Optimized Scheduling */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Optimized Scheduling</h3>
                            <p className={styles.cardDesc}>
                                Stop guessing when to revise. We calculate the perfect time to review each topic based on your memory strength, ensuring maximum retention.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/feature-card.png" alt="Optimized Scheduling" className={styles.cardImage} width={1024} height={613} />
                        </div>
                    </div>

                    {/* 3. Topic Bubbles */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Topic Bubbles</h3>
                            <p className={styles.cardDesc}>
                                Visualise your knowledge. Group related topics into bubbles to revise entire subjects in context when exams approach.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/feature-calendar.png" alt="Topic Bubbles" className={styles.cardImage} width={756} height={1024} />
                        </div>
                    </div>

                    {/* 4. Pomodoro Timer */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Deep Focus</h3>
                            <p className={styles.cardDesc}>
                                Built-in Pomodoro timer tailored for study sessions. Track your focus time, take efficient breaks, and prevent burnout.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/feature-pomodoro.png" alt="Pomodoro Timer" className={styles.cardImage} width={1024} height={827} />
                        </div>
                    </div>

                    {/* 5. Interactive Modes */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Viva & Text Modes</h3>
                            <p className={styles.cardDesc}>
                                Don&apos;t just read. Speak. Our Interactive Voice Mode simulates a real viva exam to check your true understanding.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/feature-modes.png" alt="Study Modes" className={styles.cardImage} width={1024} height={675} />
                        </div>
                    </div>

                    {/* 6. Study Companion */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Your Companion</h3>
                            <p className={styles.cardDesc}>
                                You&apos;re not learning alone. Our friendly mascot guides you through your revision journey, keeping you motivated and on track.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/neurema-mascot.png" alt="Neurema Mascot" className={styles.cardImage} style={{ maxHeight: '200px' }} width={512} height={512} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <footer className={styles.footerCta}>
                <h2 className={styles.footerTitle}>Ready to upgrade your brain?</h2>
                <div className={styles.buttonGroup} style={{ marginTop: '2rem' }}>
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
                        href="https://play.google.com/store/apps/details?id=com.neurema.neurema"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                    >
                        <Image src="/playstore.png" alt="" className={styles.downloadIcon} width={24} height={24} />
                        <span>Get it on Play Store</span>
                    </a>
                </div>
            </footer>
        </div>
    );
}
