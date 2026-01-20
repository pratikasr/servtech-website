import PageHeader from '@/components/common/PageHeader';
import { Layers, ShieldCheck, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Portfolio - Servtech',
    description: 'View our case studies and successful projects across various industries.',
};

const projects = [
    {
        title: "E-commerce Security Audit",
        category: "Cybersecurity",
        description: "Comprehensive security analysis and protection implementation for a major retail platform (Magecart prevention).",
        icon: <ShieldCheck size={48} />
    },
    {
        title: "Cloud Migration Strategy",
        category: "Cloud Solutions",
        description: "Seamless migration of legacy infrastructure to AWS for a logistics company, improving uptime by 99.9%.",
        icon: <Layers size={48} />
    },
    {
        title: "HealthCare Telemed App",
        category: "Mobile App",
        description: "Full-stack development of a telemedicine application connecting patients with doctors in rural areas.",
        icon: <Smartphone size={48} />
    },
    {
        title: "Global logistics Portal",
        category: "Web Development",
        description: "Enterprise web portal for tracking international shipments and managing fleet operations.",
        icon: <Globe size={48} />
    },
    {
        title: "Smart Retail Inventory",
        category: "AI & Data",
        description: "AI-powered inventory management system predicting stock levels and automating reorders.",
        icon: <ShoppingCart size={48} />
    },
    {
        title: "Corporate Banking Dashboard",
        category: "Enterprise",
        description: "Secure and intuitive financial dashboard for high-net-worth corporate banking clients.",
        icon: <Layers size={48} />
    }
];

export default function PortfolioPage() {
    return (
        <>
            <PageHeader
                title="Our Portfolio"
                description="A showcase of our work delivering impact through innovation."
            />

            <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
                <div className="container">
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles.projectCard}>
                                <div className={styles.imagePlaceholder}>
                                    {project.icon}
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
