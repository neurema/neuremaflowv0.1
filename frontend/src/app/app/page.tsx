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
                    YOUR BRAIN&apos;S SMARTEST<br /><span className={styles.accentText}>STUDY PARTNER</span>
                </h1>
                <p className={styles.subhead}>
                    Neurema converts passive reading into active recall, spaced perfectly for long-term mastery.
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
                <h2 className={styles.sectionTitle}>Everything you need to <span className={styles.accentText}>remember.</span></h2>

                <div className={styles.featuresList}>
                    {/* 1. Learning that sticks */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Learning that sticks, not fades.</h3>
                            <p className={styles.cardDesc}>
                                Powered by cognitive science. It builds real memory through intelligent revisions and seamless tracking & delightful learning experience—so knowledge stays with you.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app1.png" alt="Learning that sticks" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 2. Focus on studying */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>You focus on studying.</h3>
                            <p className={styles.cardDesc}>
                                Neurema handles the revisions, organizes your topics, and makes sure nothing is forgotten.
                                Turn your daily learning into lasting mastery, effortlessly.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app2.png" alt="Focus on studying" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 3. Active learning */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Active learning starts with your voice.</h3>
                            <p className={styles.cardDesc}>
                                You explain. NEM listens.
                                It breaks down mistakes in real time. Get instant feedback on what you missed.
                                Turn weak recall into strong concepts.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app3.png" alt="Active learning" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 4. Get grilled */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Get grilled before the exam grills you.</h3>
                            <p className={styles.cardDesc}>
                                Face real exam-style viva questions.
                                Think aloud. Get corrected.
                                Fix weak spots fast.
                                Walk in confident.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app4.png" alt="Get grilled" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 5. Revision plan */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Stop guessing your revision plan.</h3>
                            <p className={styles.cardDesc}>
                                Let Nem schedule what matters most.
                                Timely revisions. Zero burnout.
                                Retain concepts till exam day.
                                Stay Exam ready.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app5.png" alt="Revision plan" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 6. Revise more */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Revise more in less time.</h3>
                            <p className={styles.cardDesc}>
                                Cover 5 topics in the time of 1.
                                Related concepts, grouped together.
                                Stronger connections. Faster recall.
                                Revise smarter for any exam
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app6.png" alt="Revise more" className={styles.cardImage} width={1024} height={1024} />
                        </div>
                    </div>

                    {/* 7. Exam confident */}
                    <div className={`${styles.glassCard} ${styles.featureRow}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Enter the exam calm and confident.</h3>
                            <p className={styles.cardDesc}>
                                Beat cramming and memory drops.
                                No panic revision. No forgetting.
                                Just clear concepts on demand.
                                Exams, simply handled.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <Image src="/app7.png" alt="Exam confident" className={styles.cardImage} width={1024} height={1024} />
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
