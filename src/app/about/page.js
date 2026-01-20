import PageHeader from '@/components/common/PageHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us - Servtech',
    description: 'Learn about Servtech (formerly Kritech Technologies), a Mumbai-based IT solutions provider certified under ISO, NASSCOM, and more.',
};

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Servtech"
                description="Empowering businesses with cutting-edge technology solutions since our inception."
            />

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.content}>
                            <h2>We Build the Future.</h2>
                            <p>
                                Servtech (formerly Kritech Technologies) is a premier IT solution company based in Mumbai, India.
                                We specialize in providing comprehensive hardware and software solutions that drive business transformation.
                            </p>
                            <p>
                                Our expertise spans across Web & App Development, Artificial Intelligence, Big Data Analytics,
                                Cloud Computing, and Enterprise Security. We are committed to delivering excellence and are proud to be
                                certified under:
                            </p>

                            <div className={styles.certifications}>
                                <span className={styles.badge}>ISO Certified</span>
                                <span className={styles.badge}>NASSCOM Member</span>
                                <span className={styles.badge}>FICCI</span>
                                <span className={styles.badge}>CII</span>
                                <span className={styles.badge}>WICCI</span>
                            </div>
                        </div>

                        <div className={styles.imagePlaceholder}>
                            <div style={{
                                width: '100%',
                                height: '500px',
                                borderRadius: 'var(--radius-2xl)',
                                background: 'linear-gradient(135deg, var(--gray-100) 0%, var(--gray-50) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--gray-300)'
                            }}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <polyline points="21 15 16 10 5 21" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={styles.missionSection}>
                        <h2>Our Mission</h2>
                        <p>
                            "To bridge the gap between complex technology and business needs, providing scalable, secure, and innovative solutions."
                        </p>
                    </div>

                    <div className={styles.statsSection}>
                        <div className="container">
                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>
                                    <h3>100+</h3>
                                    <p>Projects Delivered</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h3>50+</h3>
                                    <p>Enterprise Clients</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h3>24/7</h3>
                                    <p>Support & Monitoring</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h3>Mumbai</h3>
                                    <p>Based HQ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

