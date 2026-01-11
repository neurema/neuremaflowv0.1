'use client';

import styles from './page.module.css';

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
                    The world’s first smart glasses designed for effortless learning. See what you know, retain what you see.
                </p>

                <div className={styles.specsGrid}>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Weight</span>
                        <span className={styles.specValue}>42g</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Display</span>
                        <span className={styles.specValue}>MicroLED</span>
                    </div>
                    <div className={styles.specItem}>
                        <span className={styles.specLabel}>Battery</span>
                        <span className={styles.specValue}>18 hrs</span>
                    </div>
                </div>

                <div className={styles.productHeroVisual}>
                    <span className={styles.productImagePlaceholder}>[Render of Neurema Storm Glasses]</span>
                </div>
            </main>

            {/* Features Section */}
            <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Augmented <span className={styles.accentText}>Intelligence.</span></h2>

                <div className={styles.featuresList}>
                    {/* Feature 1 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Instant Recall</h3>
                            <p className={styles.featureDesc}>
                                Flashcards aren&apos;t just for your phone. See key terms and definitions overlaid on your real-world study materials, exactly when you need them.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            {/* Placeholder for feature image */}
                            <span style={{ color: '#ccc' }}>[Heads-Up Display View]</span>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Live Transcriptions</h3>
                            <p className={styles.featureDesc}>
                                Never miss a word in a lecture. Storm captures audio and projects real-time transcriptions and summaries in your peripheral vision.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <span style={{ color: '#ccc' }}>[Live Transcription UI]</span>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Focus Filters</h3>
                            <p className={styles.featureDesc}>
                                Block out distractions. Storm can subtly dim your peripheral vision to create a &quot;tunnel focus&quot; effect, helping you lock in on your book or screen.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <span style={{ color: '#ccc' }}>[Focus Mode Visual]</span>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <h3 className={styles.featureTitle}>Seamless Sync</h3>
                            <p className={styles.featureDesc}>
                                Everything you capture with Storm instantly syncs to your Neurema App. Review your &quot;Storm Notes&quot; on your phone during your commute.
                            </p>
                        </div>
                        <div className={styles.featureVisual}>
                            <span style={{ color: '#ccc' }}>[Sync Animation]</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
