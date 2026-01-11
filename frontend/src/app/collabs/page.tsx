import React from 'react';
import Carousel from '@/components/Carousel';
import { SiteHeader } from '@/components/SiteHeader';
import styles from './page.module.css';

const COLLAB_SLIDES = [
    {
        image: '/collab-stanford.png',
        title: 'Stanford University',
        description: 'Pioneering neuro-technology research partnership.',
    },
    {
        image: '/collab-mit.png',
        title: 'Stanford University',
        description: 'Advanced Robotics Lab collaboration.',
    },
    {
        image: '/collab-cambridge.png',
        title: 'Stanford University',
        description: 'Joint innovation campus initiative.',
    },
];

export default function CollabsPage() {
    return (
        <main className={styles.page}>
            <SiteHeader />

            <section className={styles.hero}>
                <h1 className={styles.title}>
                    Global <span className={styles.highlight}>Collaborations</span>
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
