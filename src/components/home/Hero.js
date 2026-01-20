'use client';

import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}></div>

            <div className="container">
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Transform Your Business with Cutting-Edge IT Solutions
                    </h1>

                    <p className={styles.subtitle}>
                        System integration and IT consultancy designed to accelerate digital transformation.
                        From cloud infrastructure to AI-powered analytics.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Button
                            href="/contact"
                            variant="primary"   // Changed from "red"
                            size="lg"
                            icon={<ArrowRight size={16} />}  // Smaller icon
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
