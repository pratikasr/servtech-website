import styles from './FeaturedClients.module.css';

const clients = [
    { name: 'TechVentures India', industry: 'Technology' },
    { name: 'RetailCorp', industry: 'E-Commerce' },
    { name: 'FinSecure Solutions', industry: 'Finance' },
    { name: 'HealthCare Plus', industry: 'Healthcare' },
    { name: 'EduTech Systems', industry: 'Education' },
    { name: 'Manufacturing Pro', industry: 'Manufacturing' }
];

export default function FeaturedClients() {
    return (
        <section className={`section ${styles.clients}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Powering Innovation Across Industries</h2>
                    <p>
                        From startups to enterprises, we partner with forward-thinking organizations
                    </p>
                </div>

                <div className={styles.grid}>
                    {clients.map((client, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.clientName}>{client.name}</div>
                            <div className={styles.industry}>{client.industry}</div>
                        </div>
                    ))}
                </div>

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
