import styles from './FeaturedClients.module.css';

const clients = [
    { name: 'Microsoft', industry: 'Cloud & AI' },
    { name: 'Cisco', industry: 'Networking' },
    { name: 'AWS', industry: 'Cloud Infrastructure' },
    { name: 'Fortinet', industry: 'Cybersecurity' },
    { name: 'Palo Alto', industry: 'Network Security' },
    { name: 'Dell EMC', industry: 'Storage & Server' },
    { name: 'Oracle', industry: 'Enterprise Software' },
    { name: 'VMware', industry: 'Virtualization' },
    { name: 'Red Hat', industry: 'Open Source' },
    { name: 'Juniper', industry: 'Networking' },
    { name: 'Google Cloud', industry: 'Cloud Computing' }
];

export default function FeaturedClients() {
    return (
        <section className={`section ${styles.clients}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Strategic Technology Partners</h2>
                    <p>
                        We collaborate with global industry leaders to deliver world-class solutions.
                    </p>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeContent}>
                        {[...clients, ...clients].map((client, index) => (
                            <div key={`${client.name}-${index}`} className={styles.card}>
                                <div className={styles.clientName}>{client.name}</div>
                                <div className={styles.industry}>{client.industry}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
            </div>

            <div className="container">
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>500+</div>
                        <div className={styles.statLabel}>Projects Delivered</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>98%</div>
                        <div className={styles.statLabel}>Client Retention</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statValue}>15+</div>
                        <div className={styles.statLabel}>Industries Served</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
