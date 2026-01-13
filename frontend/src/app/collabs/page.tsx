import React from 'react';
import Carousel from '@/components/Carousel';
import { SiteHeader } from '@/components/SiteHeader';
import styles from './page.module.css';

import fs from 'fs';
import path from 'path';

function getCollabSlides() {
    const publicDir = path.join(process.cwd(), 'public');
    const files = fs.readdirSync(publicDir);

    const ewImages = files
        .filter(file => /^EW\d+\.jpeg$/.test(file))
        .sort((a, b) => {
            const numA = parseInt(a.replace('EW', '').replace('.jpeg', ''));
            const numB = parseInt(b.replace('EW', '').replace('.jpeg', ''));
            return numA - numB;
        });

    return ewImages.map(file => ({
        image: `/${file}`,
        type: 'image' as const,
    }));
}

const COLLAB_SLIDES = getCollabSlides();

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
