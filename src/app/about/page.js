import PageHeader from '@/components/common/PageHeader';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us - Servtech',
    description: 'Learn about Servtech, a Mumbai-based IT solutions provider partnering with Tech Hat Pvt. Ltd.',
};

const highlights = [
    '700+ successful deployments',
    '50+ enterprise clients',
    '24/7 monitoring & support',
    '15+ years of experience'
];

const expertise = [
    { title: 'Cybersecurity', desc: 'Zero-trust, SOC, threat protection' },
    { title: 'Cloud & Infra', desc: 'AWS, Azure, hybrid solutions' },
    { title: 'Networking', desc: 'SD-WAN, enterprise connectivity' },
    { title: 'Managed Services', desc: 'NOC, remote monitoring, support' }
];

const certifications = [
    'Cisco CCNA', 'Fortinet NSE', 'AWS Certified',
    'Azure Admin', 'VMware VCP', 'RHCSA'
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Servtech"
                description="Your trusted IT services partner since 2008"
            />

            {/* Main Content - Single Flow */}
            <section className={styles.mainSection}>
                <div className="container">
                    <div className={styles.content}>
                        {/* Story */}
                        <div className={styles.storyBlock}>
                            <h2>Who We Are</h2>
                            <p className={styles.lead}>
                                Servtech (formerly Kritech Technologies) is a Mumbai-based IT solutions
                                company partnering with Tech Hat Pvt. Ltd. to deliver enterprise-grade
                                technology services.
                            </p>
                            <p>
                                We bridge the gap between complex technology and business needs—providing
                                scalable, secure, and innovative solutions with a focus on uptime,
                                security, and compliance.
                            </p>

                            <ul className={styles.highlights}>
                                {highlights.map((item) => (
                                    <li key={item}>
                                        <CheckCircle2 size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Expertise */}
                        <div className={styles.expertiseBlock}>
                            <h3>Our Expertise</h3>
                            <div className={styles.expertiseGrid}>
                                {expertise.map((item) => (
                                    <div key={item.title} className={styles.expertiseItem}>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className={styles.certBlock}>
                            <h3>Certifications</h3>
                            <div className={styles.certList}>
                                {certifications.map((cert) => (
                                    <span key={cert} className={styles.certBadge}>{cert}</span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className={styles.ctaBlock}>
                            <p>Ready to work with us?</p>
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
