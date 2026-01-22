import { Shield, Network, Server, Cloud, Cpu } from 'lucide-react';
import styles from './ExpertiseSection.module.css';

const expertiseData = [
    {
        icon: <Network size={28} />,
        title: 'Cisco Certified',
        description: 'CCNA and Security Specialist with over 700 deployments completed.',
        badges: ['CCNA', 'Security Specialist']
    },
    {
        icon: <Shield size={28} />,
        title: 'Checkpoint Expertise',
        description: 'Skilled in Checkpoint technologies for robust security solutions.',
        badges: ['CCSA', 'Sandblast', 'CloudGuard']
    },
    {
        icon: <Server size={28} />,
        title: 'Fortinet Skills',
        description: 'NSE 1-4 certified, securing diverse enterprise environments.',
        badges: ['NSE 1-4']
    },
    {
        icon: <Cloud size={28} />,
        title: 'Barracuda Specialist',
        description: 'CloudGen certified for cloud security and networking.',
        badges: ['CloudGen']
    },
    {
        icon: <Cpu size={28} />,
        title: 'Multi-OEM Experience',
        description: 'Experience with leading security and networking vendors.',
        badges: ['Palo Alto', 'Juniper', 'FireEye']
    }
];

export default function ExpertiseSection() {
    return (
        <section className={styles.expertiseSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Security & Networking Expertise</h2>
                    <p>
                        Demonstrating proficiency in leading networking technologies and security certifications.
                    </p>
                </div>

                <div className={styles.grid}>
                    {expertiseData.map((item, index) => (
                        <div
                            key={item.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className={styles.certBadges}>
                                {item.badges.map((badge) => (
                                    <span key={badge} className={styles.badge}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
