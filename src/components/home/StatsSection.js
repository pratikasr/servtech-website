import { Star, Users, Clock, Headphones } from 'lucide-react';
import styles from './StatsSection.module.css';

const stats = [
    { icon: <Star size={20} />, value: '4.9', suffix: '★', label: 'Client Rating' },
    { icon: <Users size={20} />, value: '150', suffix: '+', label: 'Happy Clients' },
    { icon: <Clock size={20} />, value: '10', suffix: '+', label: 'Years Experience' },
    { icon: <Headphones size={20} />, value: '24', suffix: '/7', label: 'Support Available' }
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
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className={styles.icon}>{stat.icon}</div>
                            <div className={styles.value}>
                                {stat.value}{stat.suffix}
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
