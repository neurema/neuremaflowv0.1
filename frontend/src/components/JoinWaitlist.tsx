'use client';

import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import styles from './JoinWaitlist.module.css';

export default function JoinWaitlist() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // ... (rest of logic same)

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = ''; // Restore scrolling
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStatus('success');
            setMessage('You have been added to the waitlist!');
            setName('');
            setEmail('');

            // Auto close after success? Maybe let user close it to read the message.
        } catch (error: unknown) {
            setStatus('error');
            const errorMessage = error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.';
            setMessage(errorMessage);
        }
    };

    const openModal = () => {
        console.log("Open Modal Clicked");
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
        // Reset status on close if desired, or keep it to show previous state
        if (status === 'success') {
            setStatus('idle');
            setMessage('');
        }
    };

    const modalContent = (
        <div
            className={styles.modalOverlay}
            onClick={closeModal}
        >
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeModal}
                    className={styles.modalClose}
                    aria-label="Close"
                >
                    ×
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Join the Waitlist</h2>
                    <p className={styles.modalDescription}>Be the first to know when we launch.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.modalForm}>
                    <label className={styles.modalField} htmlFor="waitlist-name">
                        Name
                        <input
                            id="waitlist-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={styles.modalInput}
                            placeholder="John Doe"
                            disabled={status === 'loading'}
                        />
                    </label>

                    <label className={styles.modalField} htmlFor="waitlist-email">
                        Email
                        <input
                            id="waitlist-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.modalInput}
                            placeholder="john@example.com"
                            disabled={status === 'loading'}
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={styles.modalSubmit}
                    >
                        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>

                    {message && (
                        <div className={status === 'success' ? styles.successMessage : styles.errorMessage}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={openModal}
                className={styles.joinButton}
            >
                Join the Waitlist
            </button>

            {/* Modal Overlay via Portal */}
            {isOpen && mounted && createPortal(modalContent, document.body)}
        </>
    );
}
