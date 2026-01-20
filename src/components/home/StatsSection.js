import styles from './StatsSection.module.css';

const stats = [
    { value: '4.9', suffix: '★', label: 'Client Rating' },
    { value: '150', suffix: '+', label: 'Happy Clients' },
    { value: '10', suffix: '+', label: 'Years Experience' },
    { value: '24', suffix: '/7', label: 'Support Available' }
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
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.value}>
                                {stat.value}<span className={styles.suffix}>{stat.suffix}</span>
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
