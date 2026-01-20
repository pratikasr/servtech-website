import Link from 'next/link';
import { Shield, Network, Cloud, Database, Layout, Camera, Monitor } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
    {
        icon: <Shield size={24} />,
        title: 'Cybersecurity',
        description: 'Advanced threat protection, zero-trust architecture, and comprehensive security audits.',
        href: '/partners?category=Cybersecurity',
    },
    {
        icon: <Network size={24} />,
        title: 'Networking',
        description: 'High-performance network infrastructure, SD-WAN, and seamless connectivity solutions.',
        href: '/partners?category=Networking',
    },
    {
        icon: <Cloud size={24} />,
        title: 'Cloud & Infrastructure',
        description: 'Scalable cloud platforms, hybrid infrastructure, and orchestration for modern enterprises.',
        href: '/partners?category=Cloud%20%26%20Infrastructure',
    },
    {
        icon: <Database size={24} />,
        title: 'Storage & Data',
        description: 'Resilient storage systems, data protection, and intelligent data management strategies.',
        href: '/partners?category=Storage',
    },
    {
        icon: <Layout size={24} />,
        title: 'Enterprise Software',
        description: 'Business process automation, ERP integration, and custom software solutions.',
        href: '/partners?category=Enterprise%20Software',
    },
    {
        icon: <Camera size={24} />,
        title: 'Physical Security',
        description: 'Smart surveillance, access control, and integrated physical security systems.',
        href: '/partners?category=Physical%20Security',
    },
    {
        icon: <Monitor size={24} />,
        title: 'Hardware & Devices',
        description: 'Premium hardware provisioning, IoT devices, and robust endpoint management.',
        href: '/partners?category=Hardware',
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
