'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ThreeDCarousel.module.css';
import ThreeDScene from './ThreeDScene';

interface SlideData {
    id: string;
    type: 'product' | 'app';
    mainTitle: string;
    suffix: string;
    bgTitle: string;
    description: string;
    ctaLabel: string;
    ctaLink: string;
}

const slides: SlideData[] = [
    {
        id: 'glasses',
        type: 'product',
        mainTitle: 'Experience',
        suffix: 'more.',
        bgTitle: 'Experience',
        description: 'Ultra-clear 8K optics. Seamless motion tracking. The future of memory retention is here.',
        ctaLabel: 'Discover Storm',
        ctaLink: '/storm'
    },
    {
        id: 'app',
        type: 'app',
        mainTitle: 'Digital',
        suffix: 'BrainStorm.',
        bgTitle: 'BrainStorm',
        description: 'Transform short-term knowledge into long-term memory with neuroscience-grounded revision.',
        ctaLabel: 'Discover App',
        ctaLink: '/app'
    }
];

export default function ThreeDCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        setMousePos({
            x: (clientX / innerWidth - 0.5) * 2, // -1 to 1
            y: (clientY / innerHeight - 0.5) * 2
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.carouselWrapper} onMouseMove={handleMouseMove}>

            {/* 3D Scene Background/Layer */}
            <div className={styles.canvasContainer}>
                <ThreeDScene activeSlide={activeSlide} mousePos={mousePos} />
            </div>

            <div className={styles.scene}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
                    >
                        <div className={styles.contentContainer}>
                            <div className={styles.textContent}>
                                <h1 className={styles.mainTitle}>
                                    {slide.mainTitle} <span className={styles.textSuffix}>{slide.suffix}</span>
                                </h1>
                                <div className={styles.bigTitle}>{slide.bgTitle}</div>

                                <p className={styles.description} style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>{slide.description}</p>

                                <a href={slide.ctaLink} className={styles.ctaButton}>
                                    {slide.ctaLabel}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>

                            {/* Spacer for 3D model area */}
                            <div className={styles.productDisplayPlaceholder} />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ''}`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
