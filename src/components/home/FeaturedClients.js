import Image from 'next/image';
import Link from 'next/link';
import { partnersData } from '../../data/partners';
import styles from './FeaturedClients.module.css';

// Select strategic partners for the homepage
const strategicPartnerNames = [
    'Microsoft', 'AWS', 'Google', 'Cisco', 'Fortinet',
    'Palo Alto Networks', 'Dell EMC', 'Oracle', 'Red Hat',
    'Juniper', 'IBM', 'NetApp'
];

const clients = partnersData.filter(p => strategicPartnerNames.includes(p.name));

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
                        {/* Triple duplication for smooth infinite scroll */}
                        {[...clients, ...clients, ...clients].map((client, index) => (
                            <Link
                                key={`${client.name}-${index}`}
                                href={`/partners?category=${encodeURIComponent(client.category)}`}
                                className={styles.card}
                            >
                                <div className={styles.logoWrapper}>
                                    {client.logo ? (
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} logo`}
                                            fill
                                            className={styles.logoImage}
                                        />
                                    ) : (
                                        <div className={styles.clientName}>{client.name}</div>
                                    )}
                                </div>
                            </Link>
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
