import PageHeader from '@/components/common/PageHeader';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us - Servtech',
    description: 'Get in touch with Servtech for your IT solution needs. Based in Mumbai, India.',
};

const contactInfo = [
    {
        icon: <MapPin size={20} strokeWidth={1.5} />,
        title: 'Visit Us',
        lines: ['Navi Mumbai', 'Maharashtra, India']
    },
    {
        icon: <Mail size={20} strokeWidth={1.5} />,
        title: 'Email Us',
        lines: ['info@kritech.in', 'support@kritech.in']
    },
    {
        icon: <Phone size={20} strokeWidth={1.5} />,
        title: 'Call Us',
        lines: ['+91 22 1234 5678']
    },
    {
        icon: <Clock size={20} strokeWidth={1.5} />,
        title: 'Working Hours',
        lines: ['Mon – Fri: 9:00 AM – 6:00 PM']
    }
];

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                description="Let's discuss how we can help transform your IT infrastructure."
            />

            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Left - Contact Info */}
                        <div className={styles.infoSide}>
                            <h2>Get in Touch</h2>
                            <p className={styles.infoIntro}>
                                Have a project in mind? We'd love to hear from you.
                                Reach out and let's start a conversation.
                            </p>

                            <div className={styles.infoGrid}>
                                {contactInfo.map((item) => (
                                    <div key={item.title} className={styles.infoCard}>
                                        <div className={styles.infoIcon}>{item.icon}</div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            {item.lines.map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className={styles.formSide}>
                            <form className={styles.form}>
                                <div className={styles.formHeader}>
                                    <h3>Send a Message</h3>
                                    <p>Fill out the form and we'll get back to you within 24 hours.</p>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service">Service Interest</label>
                                    <select id="service" defaultValue="">
                                        <option value="" disabled>Select a service</option>
                                        <option value="cybersecurity">Cybersecurity</option>
                                        <option value="cloud">Cloud & Infrastructure</option>
                                        <option value="networking">Networking</option>
                                        <option value="managed">Managed Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Send Message <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
