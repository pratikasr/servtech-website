'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Servtech transformed our infrastructure completely. Their cloud migration expertise saved us 40% on operational costs while improving system reliability.",
        author: "Rajesh Kumar",
        role: "CTO, TechVentures India",
        company: "TechVentures"
    },
    {
        quote: "The AI-powered analytics solution they built has revolutionized how we make business decisions. ROI was evident within 3 months.",
        author: "Priya Sharma",
        role: "Head of Digital Transformation, RetailCorp",
        company: "RetailCorp"
    },
    {
        quote: "Outstanding cybersecurity implementation. Their team identified and resolved vulnerabilities we didn't even know existed. True experts.",
        author: "Amit Desai",
        role: "IT Director, FinSecure Solutions",
        company: "FinSecure"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`section ${styles.testimonials}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Trusted by Industry Leaders</h2>
                    <p>
                        Hear from clients who've transformed their businesses with our solutions
                    </p>
                </div>

                <div className={styles.testimonialSlider}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${styles.testimonial} ${index === activeIndex ? styles.active : ''
                                }`}
                        >
                            <Quote className={styles.quoteIcon} size={32} />
                            <blockquote className={styles.quote}>
                                "{testimonial.quote}"
                            </blockquote>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorName}>{testimonial.author}</div>
                                    <div className={styles.authorRole}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
