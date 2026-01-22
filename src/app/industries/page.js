import PageHeader from '@/components/common/PageHeader';
import Link from 'next/link';
import {
    Landmark,
    HeartPulse,
    Factory,
    GraduationCap,
    Building2,
    ShoppingCart,
    ArrowRight
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Industries - Servtech',
    description: 'Enterprise IT solutions for Banking, Healthcare, Manufacturing, and more.',
};

const industries = [
    { icon: <Landmark size={20} strokeWidth={1.5} />, title: 'Banking & Finance', desc: 'Core banking security, payment gateways, compliance' },
    { icon: <HeartPulse size={20} strokeWidth={1.5} />, title: 'Healthcare', desc: 'HIPAA systems, telemedicine, EMR/EHR' },
    { icon: <Factory size={20} strokeWidth={1.5} />, title: 'Manufacturing', desc: 'Industry 4.0, SCADA, IoT integration' },
    { icon: <GraduationCap size={20} strokeWidth={1.5} />, title: 'Education', desc: 'Campus networking, LMS, digital assessment' },
    { icon: <Building2 size={20} strokeWidth={1.5} />, title: 'Government', desc: 'e-Governance, secure data centers' },
    { icon: <ShoppingCart size={20} strokeWidth={1.5} />, title: 'Retail', desc: 'POS systems, omnichannel, inventory' }
];

const services = [
    'Cybersecurity & SOC',
    'Cloud Migration (AWS, Azure)',
    'Networking & SD-WAN',
    'Managed IT Services',
    'Storage & Backup',
    'Identity Management'
];

export default function IndustriesPage() {
    return (
        <>
            <PageHeader
                title="Industries We Serve"
                description="Enterprise-grade IT solutions tailored to your sector"
            />

            <section className={styles.mainSection}>
                <div className="container">
                    <div className={styles.content}>
                        {/* Intro */}
                        <p className={styles.intro}>
                            We bring deep domain expertise across regulated industries—from BFSI
                            compliance to healthcare data security—delivering solutions that meet
                            your sector's unique challenges.
                        </p>

                        {/* Industries Grid */}
                        <div className={styles.industriesBlock}>
                            <h2>Sectors</h2>
                            <div className={styles.industriesGrid}>
                                {industries.map((item) => (
                                    <div key={item.title} className={styles.industryItem}>
                                        <div className={styles.industryIcon}>{item.icon}</div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className={styles.servicesBlock}>
                            <h2>Capabilities</h2>
                            <div className={styles.servicesList}>
                                {services.map((service) => (
                                    <span key={service} className={styles.serviceBadge}>{service}</span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className={styles.ctaBlock}>
                            <p>Discuss your industry requirements</p>
                            <Link href="/contact" className={styles.ctaLink}>
                                Get in Touch <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
