import PageHeader from '@/components/common/PageHeader';
import {
    Code,
    Smartphone,
    Database,
    Cloud,
    Shield,
    TrendingUp,
    Server,
    CreditCard,
    Check
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Services - Servtech',
    description: 'Explore our wide range of IT solutions including Web Development, AI, Cloud Computing, Cybersecurity, and Digital Marketing.',
};

const services = [
    {
        title: "Web & Custom Development",
        description: "Robust, scalable, and responsive web solutions tailored to your business needs.",
        icon: <Code size={24} />,
        features: ["Custom Software Development", "E-commerce Platforms", "Enterprise Web Apps", "CMS Development"]
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: <Smartphone size={24} />,
        features: ["iOS & Android Apps", "React Native / Flutter", "App Maintenance", "UI/UX Design"]
    },
    {
        title: "AI & Big Data",
        description: "Harness the power of data with advanced analytics and artificial intelligence.",
        icon: <Database size={24} />,
        features: ["AI Model Development", "Big Data Consulting", "Business Intelligence", "Predictive Analytics"]
    },
    {
        title: "Cloud & Networking",
        description: "Secure and scalable cloud infrastructure and networking solutions.",
        icon: <Cloud size={24} />,
        features: ["Cloud Migration", "Server Management", "Network Architecture", "Storage Solutions"]
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security services to protect your digital assets and infrastructure.",
        icon: <Shield size={24} />,
        features: ["Data Security", "Application Security", "Managed IT Services", "Compliance Audits"]
    },
    {
        title: "Digital Marketing",
        description: "Strategic marketing solutions to grow your brand and reach your audience.",
        icon: <TrendingUp size={24} />,
        features: ["Search Engine Optimization", "Social Media Marketing", "Email Campaigns", "Content Strategy"]
    },
    {
        title: "Enterprise Solutions",
        description: "Streamline operations with integrated enterprise resource planning systems.",
        icon: <Server size={24} />,
        features: ["ERP Implementations", "CRM Solutions", "Workflow Automation", "Legacy Modernization"]
    },
    {
        title: "FinTech Solutions",
        description: "Secure and efficient payment processing and financial technology.",
        icon: <CreditCard size={24} />,
        features: ["Payment Gateway Integration", "Digital Wallets", "Secure Transaction Systems", "Financial Reporting"]
    }
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                description="End-to-end technology solutions designed to accelerate your digital growth."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <ul className={styles.subServiceList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className={styles.subServiceItem}>
                                            <Check size={16} className={styles.checkIcon} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
