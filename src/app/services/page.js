import PageHeader from '@/components/common/PageHeader';
import {
    Lightbulb,
    ArrowRightLeft,
    Settings,
    Wrench,
    Code,
    Wifi,
    Cloud,
    Shield,
    Server,
    Database,
    Check
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Services - Servtech',
    description: 'Expert IT solutions including IT Consulting, Migration Services, Managed IT, Cloud Infrastructure, Cybersecurity, and Custom Software Development.',
};

const services = [
    {
        title: "IT Design & Consulting",
        description: "Tailored IT solutions to optimize your business operations and enhance productivity.",
        icon: <Lightbulb size={24} />,
        features: ["IT Strategy & Roadmap", "Technology Assessment", "Digital Transformation", "Business Process Optimization"]
    },
    {
        title: "Migration Services",
        description: "Seamless transition to new systems with minimal disruption, ensuring data integrity.",
        icon: <ArrowRightLeft size={24} />,
        features: ["Cloud Migration", "Data Center Migration", "Exchange & AD Migrations", "Legacy System Modernization"]
    },
    {
        title: "Managed IT Services",
        description: "Continuous monitoring and management of your IT systems for peak efficiency.",
        icon: <Settings size={24} />,
        features: ["24/7 Monitoring & Support", "SLA-Based Service", "Proactive Maintenance", "Help Desk Support"]
    },
    {
        title: "Infrastructure Maintenance",
        description: "Regular maintenance services to keep your IT infrastructure running smoothly.",
        icon: <Wrench size={24} />,
        features: ["Server & Storage Specialist", "Backup & Recovery", "Data Center Operations", "Infrastructure Audits"]
    },
    {
        title: "Custom Software Development",
        description: "Bespoke software solutions designed to meet your unique business requirements.",
        icon: <Code size={24} />,
        features: ["Python, .NET, Node.js", "API Integration", "DevOps & CI/CD", "Enterprise Applications"]
    },
    {
        title: "Wireless Link Survey",
        description: "Thorough assessments to ensure optimal wireless connectivity and performance.",
        icon: <Wifi size={24} />,
        features: ["Site Survey & Analysis", "Wireless Network Design", "Performance Optimization", "Coverage Assessment"]
    },
    {
        title: "Cloud & Infrastructure",
        description: "Seamless cloud solutions across various platforms including AWS, Azure, and GCP.",
        icon: <Cloud size={24} />,
        features: ["Multi-Cloud Deployment", "Server & HPC Setup", "Storage Solutions", "Virtualization (VMware)"]
    },
    {
        title: "Cybersecurity",
        description: "Comprehensive security services to protect your digital assets and infrastructure.",
        icon: <Shield size={24} />,
        features: ["VAPT & Security Audits", "EDR & Deception", "Firewall & SD-WAN", "Compliance Management"]
    },
    {
        title: "Networking Solutions",
        description: "High-performance network infrastructure and connectivity solutions.",
        icon: <Server size={24} />,
        features: ["DNAC, ACI, ISE Projects", "SD-WAN Deployment", "Network Architecture", "Routing & Switching"]
    },
    {
        title: "Database & Storage",
        description: "Advanced storage solutions and database management for enterprise needs.",
        icon: <Database size={24} />,
        features: ["Database Support", "Storage Planning", "Data Protection", "Backup Solutions"]
    }
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our IT Services Portfolio"
                description="Expert solutions designed to optimize your business operations and enhance productivity."
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
