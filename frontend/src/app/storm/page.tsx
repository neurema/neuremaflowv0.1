'use client';

import styles from './page.module.css';
import StormHero3D from '@/components/StormHero3D';
import Image from 'next/image';

export default function StormPage() {
    return (
        <div className={styles.page}>
            {/* Background Ambience */}
            <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
            <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

            {/* Hero Section */}
            <main className={styles.hero}>
                <div className={styles.badge}>Join the Waitlist</div>
                <h1 className={styles.headline}>
                    NEUREMA<br /><span className={styles.accentText}>STORM</span>
                </h1>
                <p className={styles.subhead}>
                    Experience a new level of self-understanding with wearable biotechnology that fits seamlessly into your life
                </p>

                <div className={styles.specsGrid}>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Weight</span>
                        <span className={styles.specValue}>42g</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Camera</span>
                        <span className={styles.specValue}>12 MP</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Battery</span>
                        <span className={styles.specValue}>7 hrs</span>
                    </div>
                </div>

                <div className={styles.productHeroVisual}>
                    <StormHero3D />
                </div>
            </main>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Decode Your <span className={styles.accentText}>Mind&apos;s Eye.</span></h2>

                <div className={styles.featuresList}>
                    {/* Feature 1 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>True Focus, Not Just Watch Time</h3>
                            <p className={styles.featureDesc}>
                                Sitting at your desk for 8 hours means nothing if you were only focused for 2. We separate the busy work from the deep work, giving you a metric that actually impacts your grades.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <Image
                                src="/wearable4.jpeg"
                                alt="True Focus"
                                width={500}
                                height={300}
                                className={styles.featureImage}
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Smarter and Faster Recaps</h3>
                            <p className={styles.featureDesc}>
                                Efficiency is the ultimate cheat code. Stop scrubbing through hours of video. Jump straight to the low-attention zones where you need the most review, and skip the rest.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <Image
                                src="/wearable3.jpeg"
                                alt="Smarter Recaps"
                                width={500}
                                height={300}
                                className={styles.featureImage}
                            />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>No More Fake Studying</h3>
                            <p className={styles.featureDesc}>
                                You can lie to yourself, but you can&apos;t lie to your biometrics. We hold you accountable to ensure every minute you spend studying is a minute spent learning.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <Image
                                src="/wearable2.jpeg"
                                alt="Biometrics"
                                width={500}
                                height={300}
                                className={styles.featureImage}
                            />
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className={styles.centeredFeature}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Stronger Attention Over Time</h3>
                            <p className={styles.featureDesc}>
                                Focus is a skill, not a talent. We give you the data-driven roadmap to build an unshakeable attention span that lasts long after you take the device off.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
