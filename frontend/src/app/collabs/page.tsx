import React from 'react';
import Carousel from '@/components/Carousel';
import { SiteHeader } from '@/components/SiteHeader';
import styles from './page.module.css';

const COLLAB_SLIDES: { type: 'video' | 'image'; src?: string; image: string; rotation?: number; scale?: number; title?: string; description?: string; }[] = [
    {
        type: 'video',
        src: '/EW.mp4',
        image: '/EW.mp4', // Fallback
        rotation: -90,
        scale: 1.5,
    },
    ...Array.from({ length: 12 }, (_, i) => ({
        image: `/EW${i + 1}.jpeg`,
        type: 'image' as const,
    })),
];

export default function CollabsPage() {
    return (
        <main className={styles.page}>
            <SiteHeader />

            <section className={styles.hero}>
                <h1 className={styles.title}>
                    Global <span className={styles.highlight}>Collaboration and Research</span>
                </h1>
                <p className={styles.subtitle}>
                    Partnering with world-leading institutions to push the boundaries of what is possible.
                </p>
            </section>

            <section className={styles.carouselSection}>
                <Carousel slides={COLLAB_SLIDES} />
            </section>
        </main>
    );
}
