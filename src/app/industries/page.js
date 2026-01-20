import PageHeader from '@/components/common/PageHeader';
import {
    HeartPulse,
    ShoppingBag,
    GraduationCap,
    Truck,
    Film,
    Leaf
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Industries We Serve - Servtech',
    description: 'Specialized IT solutions for Healthcare, Retail, Education, Transportation, Media, and Agriculture.',
};

const industries = [
    {
        title: "Healthcare",
        description: "Innovative solutions for patient management, telemedicine, and medical data analysis to improve care delivery.",
        icon: <HeartPulse size={40} />
    },
    {
        title: "Retail & E-commerce",
        description: "Seamless shopping experiences with robust e-commerce platforms, inventory management, and personalized marketing.",
        icon: <ShoppingBag size={40} />
    },
    {
        title: "Education",
        description: "Transforming learning with e-learning platforms, student management systems, and virtual classrooms.",
        icon: <GraduationCap size={40} />
    },
    {
        title: "Transportation",
        description: "Optimizing logistics with fleet management, route optimization, and real-time tracking solutions.",
        icon: <Truck size={40} />
    },
    {
        title: "Media & Entertainment",
        description: "Engaging content delivery platforms, streaming services, and digital asset management.",
        icon: <Film size={40} />
    },
    {
        title: "Agriculture",
        description: "Smart farming solutions using IoT and data analytics to improve crop yield and resource efficiency.",
        icon: <Leaf size={40} />
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
