import { Award, Clock, Layers, Users, Headphones } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const reasons = [
    {
        icon: <Award size={24} />,
        title: 'Certified & Skilled Teams',
        description: 'Our professionals are certified and trained to ensure high-quality service delivery.'
    },
    {
        icon: <Clock size={24} />,
        title: 'Decades of Experience',
        description: 'We bring decades of collective experience, providing proven solutions for various challenges.'
    },
    {
        icon: <Layers size={24} />,
        title: 'End-to-End Solutions',
        description: 'We offer comprehensive solutions from inception to completion, tailored to your needs.'
    },
    {
        icon: <Users size={24} />,
        title: 'Tailored Client Approach',
        description: "Each client's needs are prioritized, ensuring unique solutions that drive value."
    },
    {
        icon: <Headphones size={24} />,
        title: '24/7 Monitoring & Support',
        description: 'Our commitment includes around-the-clock monitoring and SLA-based support.'
    }
];

export default function WhyChooseUs() {
    return (
        <section className={styles.whySection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Why Choose Us</h2>
                    <p>
                        Discover the strengths that set us apart in IT services.
                    </p>
                </div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>
                                {reason.icon}
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
