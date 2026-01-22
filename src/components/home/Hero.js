'use client';

import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function Hero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero}>
            {/* Floating ambient orbs */}
            <div className={styles.heroOrb} aria-hidden="true" />
            <div className={styles.heroOrb} aria-hidden="true" />

            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Your Trusted IT Service Partner
                    </h1>

                    <p className={styles.subtitle}>
                        Partnering with Tech Hat Pvt. Ltd. to deliver excellence in IT Services,
                        Cybersecurity, and Cloud Infrastructure solutions.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="lg"
                            icon={<ArrowRight size={16} />}
                            iconPosition="right"
                        >
                            Get Started
                        </Button>
                        <button
                            onClick={scrollToServices}
                            className={styles.secondaryCta}
                        >
                            Explore Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
