'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import styles from './Header.module.css';

const servicesMenu = [
    {
        category: 'Infrastructure & Cloud',
        items: [
            { name: 'Cloud Computing Solutions', href: '/services/cloud-solutions' },
            { name: 'Server Management', href: '/services/cloud-solutions' },
            { name: 'Storage Solutions', href: '/services/cloud-solutions' },
            { name: 'Networking Infrastructure', href: '/services/cloud-solutions' },
        ]
    },
    {
        category: 'Software Development',
        items: [
            { name: 'Web Development', href: '/services/software-development' },
            { name: 'Mobile App Development', href: '/services/software-development' },
            { name: 'Custom Software', href: '/services/software-development' },
        ]
    },
    {
        category: 'Advanced Technologies',
        items: [
            { name: 'Artificial Intelligence', href: '/services/ai-ml' },
            { name: 'Big Data Analytics', href: '/services/ai-ml' },
            { name: 'Blockchain & DLT', href: '/services/ai-ml' },
        ]
    },
    {
        category: 'Security Solutions',
        items: [
            { name: 'Cybersecurity', href: '/services/cybersecurity' },
            { name: 'Data Security', href: '/services/cybersecurity' },
            { name: 'DDoS Protection', href: '/services/cybersecurity' },
        ]
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.headerContent}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>
                            Servtech
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.desktopNav}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>

                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className={styles.navLink}>
                                Services <ChevronDown size={16} />
                            </button>
                            {activeDropdown === 'services' && (
                                <div className={styles.megaMenu}>
                                    <div className={styles.megaMenuContent}>
                                        {servicesMenu.map((section) => (
                                            <div key={section.category} className={styles.menuSection}>
                                                <h4>{section.category}</h4>
                                                <ul>
                                                    {section.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link href={item.href}>{item.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/industries" className={styles.navLink}>
                            Industries
                        </Link>

                        <Link href="/portfolio" className={styles.navLink}>
                            Portfolio
                        </Link>

                        <Link href="/about" className={styles.navLink}>
                            About
                        </Link>

                        <Link href="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <Button href="/contact" variant="primary" size="md" className={styles.ctaButton}>
                        Get Started
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>
                            Industries
                        </Link>
                        <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                            Portfolio
                        </Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </Link>
                        <Button href="/contact" variant="primary" size="lg" className={styles.mobileCTA}>
                            Get Started
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
