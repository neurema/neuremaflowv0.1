'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
                    ×
                </button>
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className={styles.link} onClick={onClose}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
