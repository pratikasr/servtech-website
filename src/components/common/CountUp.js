'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter that counts up to a target value
 * Triggers when element enters viewport
 */
export default function CountUp({
    end,
    start = 0,
    duration = 2000,
    prefix = '',
    suffix = '',
    separator = ',',
    decimals = 0,
    className = ''
}) {
    const ref = useRef(null);
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = start;
        const endValue = end;

        const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out expo for premium feel
            const easeOutExpo = progress === 1
                ? 1
                : 1 - Math.pow(2, -10 * progress);

            const currentValue = startValue + (endValue - startValue) * easeOutExpo;
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    const formatNumber = (num) => {
        const fixed = num.toFixed(decimals);
        if (separator && !decimals) {
            return fixed.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        }
        return fixed;
    };

    return (
        <span ref={ref} className={className}>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
}
