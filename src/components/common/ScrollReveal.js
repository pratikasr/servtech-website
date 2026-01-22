'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

/**
 * Premium scroll reveal animation wrapper
 * Wraps children and animates them when they enter the viewport
 */
export default function ScrollReveal({
    children,
    delay = 0,
    direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
    duration = 800,
    threshold = 0.1,
    once = true,
    className = ''
}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    const animationClass = isVisible ? styles.visible : styles[direction];

    return (
        <div
            ref={ref}
            className={`${styles.wrapper} ${animationClass} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`
            }}
        >
            {children}
        </div>
    );
}
