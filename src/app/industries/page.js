import PageHeader from '@/components/common/PageHeader';
import {
    Shield,
    Network,
    Cloud,
    Database,
    Layout,
    Camera,
    Monitor
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Industries & Technologies - Servtech',
    description: 'We specialize in Cybersecurity, Networking, Cloud Infrastructure, and Enterprise Software solutions.',
};

const industries = [
    {
        title: "Cybersecurity",
        description: "Advanced threat protection, zero-trust architecture, and comprehensive security audits.",
        icon: <Shield size={40} />
    },
    {
        title: "Networking",
        description: "High-performance network infrastructure, SD-WAN, and seamless connectivity solutions.",
        icon: <Network size={40} />
    },
    {
        title: "Cloud & Infrastructure",
        description: "Scalable cloud platforms, hybrid infrastructure, and orchestration for modern enterprises.",
        icon: <Cloud size={40} />
    },
    {
        title: "Storage & Data",
        description: "Resilient storage systems, data protection, and intelligent data management strategies.",
        icon: <Database size={40} />
    },
    {
        title: "Enterprise Software",
        description: "Business process automation, ERP integration, and custom software solutions.",
        icon: <Layout size={40} />
    },
    {
        title: "Physical Security",
        description: "Smart surveillance, access control, and integrated physical security systems.",
        icon: <Camera size={40} />
    },
    {
        title: "Hardware & Devices",
        description: "Premium hardware provisioning, IoT devices, and robust endpoint management.",
        icon: <Monitor size={40} />
    }
];

export default function IndustriesPage() {
    return (
        <>
            <PageHeader
                title="Industries We Serve"
                description="Tailored technology solutions for diverse sectors, driving efficiency and innovation."
            />

            <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
                <div className="container">
                    <div className={styles.grid}>
                        {industries.map((industry, index) => (
                            <div key={index} className={styles.industryCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        {industry.icon}
                                    </div>
                                    <h3 className={styles.cardTitle}>{industry.title}</h3>
                                    <p className={styles.cardDescription}>{industry.description}</p>
                                    <div className={styles.cardLink}>
                                        Learn more <span className={styles.arrow}>→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
