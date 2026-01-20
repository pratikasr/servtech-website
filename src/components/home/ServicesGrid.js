import Link from 'next/link';
import { Cloud, Brain, Shield, Code, Building2, Settings } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
    {
        icon: <Cloud size={24} />,  // Reduced from 40
        title: 'Cloud Solutions',
        description: 'Scalable infrastructure with AWS, Azure, and Google Cloud. Migration, optimization, and management.',
        href: '/services/cloud-solutions',
    },
    {
        icon: <Brain size={24} />,
        title: 'AI & Machine Learning',
        description: 'Intelligent automation, predictive analytics, and AI-powered insights for business transformation.',
        href: '/services/ai-ml',
    },
    {
        icon: <Shield size={24} />,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions including threat detection, DDoS protection, and compliance.',
        href: '/services/cybersecurity',
    },
    {
        icon: <Code size={24} />,
        title: 'Software Development',
        description: 'Custom web and mobile applications built with modern technologies for optimal performance.',
        href: '/services/software-development',
    },
    {
        icon: <Building2 size={24} />,
        title: 'Enterprise Solutions',
        description: 'ERP implementation, e-learning platforms, and business process automation.',
        href: '/services/enterprise-solutions',
    },
    {
        icon: <Settings size={24} />,
        title: 'Managed Services',
        description: '24/7 IT support, system monitoring, and infrastructure management.',
        href: '/services/managed-services',
    }
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2>Comprehensive IT Solutions</h2>
                    <p>
                        End-to-end services from cloud infrastructure to AI-powered analytics,
                        designed to accelerate your digital transformation.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link
                            href={service.href}
                            key={service.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.05}s` }}  /* Faster stagger */
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
