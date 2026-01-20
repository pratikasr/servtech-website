import PageHeader from '@/components/common/PageHeader';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us - Servtech',
    description: 'Get in touch with Servtech for your IT solution needs. We are based in Mumbai, India.',
};

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                description="Have a project in mind? Let's discuss how we can help you achieve your goals."
            />

            <section className="section" style={{ backgroundColor: 'var(--gray-50)' }}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.contactInfo}>
                            <h2>Get in Touch</h2>
                            <p>
                                We are always ready to start new projects and help companies to reach their goals.
                                Fill out the form or reach us via other methods.
                            </p>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Our Location</h4>
                                    <p>Mumbai, Maharashtra, India</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Email Us</h4>
                                    <p>info@kritech.in</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Call Us</h4>
                                    <p>+91 (123) 456-7890</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Clock size={24} />
                                </div>
                                <div className={styles.infoContent}>
                                    <h4>Working Hours</h4>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formWrapper}>
                            <form>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input type="text" id="name" className={styles.input} placeholder="Your Name" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input type="email" id="email" className={styles.input} placeholder="your@email.com" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject" className={styles.label}>Subject</label>
                                    <input type="text" id="subject" className={styles.input} placeholder="Project Inquiry" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea id="message" className={styles.textarea} placeholder="Tell us about your project..." required></textarea>
                                </div>

                                <button type="submit" className={styles.submitButton}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
