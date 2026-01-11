"use client";

import React, { useState, useEffect, useCallback } from 'react';
import styles from './Carousel.module.css';

interface Slide {
    image: string;
    title?: string;
    description?: string;
}

interface CarouselProps {
    slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered, nextSlide]);

    if (!slides || slides.length === 0) return null;

    return (
        <div
            className={styles.carouselContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={styles.slidesContainer}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === current ? styles.active : ''}`}
                    >
                        <img src={slide.image} alt={slide.title || `Slide ${index}`} className={styles.slideImage} />
                        {(slide.title || slide.description) && (
                            <div className={styles.caption}>
                                {slide.title && <h3 className={styles.captionTitle}>{slide.title}</h3>}
                                {slide.description && <p className={styles.captionText}>{slide.description}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.controls}>
                <button className={styles.navButton} onClick={prevSlide} aria-label="Previous slide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className={styles.dots}>
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            role="button"
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button className={styles.navButton} onClick={nextSlide} aria-label="Next slide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
}
