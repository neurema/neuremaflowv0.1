'use client';

import { useState, useEffect } from 'react';
// import Link from "next/link"; // unused
import styles from "./about.module.css";

const teamMembers = [
  {
    name: "Shoaib Salim Attar",
    role: "Founder and CEO",
    bio: "Visionary leader driving the mission to enhance human memory through technology.",
    specialization: "Leadership"
  },
  {
    name: "Ashutosh Thakur",
    role: "CTO",
    bio: "Technologist architecting the secure and scalable foundation of Neurema.",
    specialization: "Technology"
  },
  {
    name: "Ibrahim Ahsan Abdullah",
    role: "Business Head",
    bio: "Strategist focused on sustainable growth and partnership development.",
    specialization: "Business"
  },
  {
    name: "Jaivardhan Bhola",
    role: "Head of App Development",
    bio: "Crafting intuitive and seamless mobile experiences for learners worldwide.",
    specialization: "Product"
  },
  {
    name: "Priya Bhatt",
    role: "Marketing and Branding Head",
    bio: "Storyteller building the Neurema brand and connecting with our community.",
    specialization: "Marketing"
  },
  {
    name: "Dr. Priyansh Jain",
    role: "Business Strategist and Adviser",
    bio: "Guiding the company with deep insights into business strategy and operations.",
    specialization: "Advisory"
  }
];

export default function AboutUsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < teamMembers.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (activeIndex < teamMembers.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const currentMember = teamMembers[activeIndex];

  return (
    <div className={styles.container}>
      {/* Replicated Header */}
      <main className={styles.main}>


        <div className={styles.intro}>
          <h1 className={styles.introTitle}>
            Our team of <span className={styles.serifItalic}>visionaries</span> is dedicated to <span className={styles.serifItalic}>effective</span> learning.
          </h1>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div>
                <h2 className={styles.personName}>
                  {currentMember.name.split(' ')[0]} <br />
                  <span style={{ fontStyle: 'italic' }}>{currentMember.name.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className={styles.personRole}>{currentMember.role}</p>
                <p className={styles.personBio}>{currentMember.bio}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.specialization}>
                  <span>Specialization</span>
                  {currentMember.specialization}
                </div>

                <div className={styles.controls}>
                  <span className={styles.counter}>
                    {activeIndex + 1}/{teamMembers.length}
                  </span>
                  <button
                    onClick={handlePrev}
                    className={styles.controlButton}
                    aria-label="Previous member"
                    style={{ visibility: activeIndex === 0 ? 'hidden' : 'visible' }}
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className={styles.controlButton}
                    aria-label="Next member"
                    style={{ visibility: activeIndex === teamMembers.length - 1 ? 'hidden' : 'visible' }}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              {/* Using a placeholder since we don't have real photos yet */}
              {/* Ideally: <img src={currentMember.image} alt={currentMember.name} className={styles.personImage} /> */}
              <div className={styles.placeholderImage}>
                {currentMember.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
