'use client';

import { FormEvent, useState } from 'react';
// import Link from 'next/link'; // unused
import styles from './contact.module.css';

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // The URL should be set in your .env.local file as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
  const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Please configure NEXT_PUBLIC_GOOGLE_SCRIPT_URL in your environment variables.');
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        // Using text/plain to avoid CORS preflight, handled by the GAS script
        body: JSON.stringify(data),
      });

      alert("Thank you for your message! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>


        <div>
          <h1 className={styles.title}>Contact <span className={styles.accentText}>Us</span></h1>
          <p className={styles.description}>
            Have questions or feedback? We&apos;d love to hear from you. Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className={styles.contactInfo}>
          <p>Phone: <a href="tel:+917795977671" className={styles.contactLink}>+91 77959 77671</a></p>
          <p>Email: <a href="mailto:shoaibsalimattar@neurema.com" className={styles.contactLink}>shoaibsalimattar@neurema.com</a></p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            Name
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Your name"
              required
            />
          </label>

          <label className={styles.field}>
            Email
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className={styles.field}>
            Subject
            <input
              type="text"
              name="subject"
              className={styles.input}
              placeholder="What is this about?"
              required
            />
          </label>

          <label className={styles.field}>
            Message
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Your message..."
              required
            />
          </label>

          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
