'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import Link from "next/link"; // unused
import styles from "./about.module.css";

const teamMembers = [
  {
    name: "Shoaib Salim Attar",
    role: "Chief Executive Officer (CEO)",
    bio: "He guides the company's overall strategy and long-term direction. He works with the team to align resources and cultivate an innovative environment in pursuit of Neurema's mission.",
    specialization: "Strategy & Vision",
    image: "/Shoaib.jpeg"
  },
  {
    name: "Dr. Priyansh Jain",
    role: "Managing Director (MD)",
    bio: "He provides strategic guidance to the leadership team and oversees general operations. He advises the board to help ensure the company's stability, business relations and effective day-to-day functioning.",
    specialization: "Operations and Partnerships",
    image: "/Priyansh.jpeg"
  },
  {
    name: "Ibrahim Ahsan Abdullah",
    role: "Associate Director",
    bio: "He focuses on business development and forming strategic partnerships. He works directly with educational institutions to build relationships and establish collaborative agreements.",
    specialization: "Business & Partnerships",
    image: "/Ibrahim.jpeg"
  },
  {
    name: "Ashutosh Thakur",
    role: "Chief Technology Officer (CTO)",
    bio: "He leads the technical infrastructure and hardware engineering efforts. His focus is on wearable technology R&D and ensuring our hardware integrates smoothly with the software ecosystem.",
    specialization: "Hardware & R&D",
    image: "/Ashutosh.jpeg",
    imageStyle: { objectPosition: 'center 20%' }
  },
  {
    name: "Jaivardhan Bhola",
    role: "Head of App Development",
    bio: "The architect behind the screen, dedicated to building a fast, secure, and crash-free experience for every user.",
    specialization: "Software Engineering",
    image: "/Jaivardhan.jpg"
  },
  {
    name: "Priya Bhatt",
    role: "Creativity Officer",
    bio: "Ensuring that every interaction you have with our brand feels personal, seamless, and beautifully designed.",
    specialization: "Visual Identity & UX",
    image: "/Priya.jpeg"
  },
  {
    name: "Meshwa Ashokkumar Dahivelkar",
    role: "Research and Pilot Studies Manager",
    bio: "Bridging the gap between our ideas and your needs by validating features through real-world feedback and trials.",
    specialization: "Research & Validation",
    image: "/Meshwa.jpeg"
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
            A team committed to making <span className={styles.serifItalic}>knowledge stick</span>.
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
              <Image
                src={currentMember.image}
                alt={currentMember.name}
                fill
                className={styles.personImage}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  ...(currentMember.imageStyle || {})
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
