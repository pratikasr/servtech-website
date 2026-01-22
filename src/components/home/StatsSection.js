'use client';

import CountUp from '../common/CountUp';
import styles from './StatsSection.module.css';

const stats = [
    { value: 700, suffix: '+', label: 'Deployments Completed', isNumeric: true },
    { value: 50, suffix: '+', label: 'Enterprise Clients', isNumeric: true },
    { value: 24, suffix: '/7', label: 'Monitoring & Support', isNumeric: true },
    { value: null, display: 'Mumbai', label: 'Based HQ', isNumeric: false }
];

export default function StatsSection() {
    return (
        <section className={styles.statsSection}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={styles.statCard}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className={styles.value}>
                                {stat.isNumeric ? (
                                    <>
                                        <CountUp
                                            end={stat.value}
                                            duration={2000 + (index * 200)}
                                        />
                                        <span className={styles.suffix}>{stat.suffix}</span>
                                    </>
                                ) : (
                                    stat.display
                                )}
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
