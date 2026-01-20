import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    {/* Column 1: Brand */}
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            Servtech
                        </div>
                        <p className={styles.tagline}>
                            Your trusted partner in digital transformation. One-stop IT solutions for modern businesses.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/profile.php?id=100075993459610" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/kritech_21/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/77701137/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com/KRITECH_21" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.youtube.com/@kritechtechnologies2413" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/industries">Industries</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services/cloud-solutions">Cloud Solutions</Link></li>
                            <li><Link href="/services/ai-ml">AI & Machine Learning</Link></li>
                            <li><Link href="/services/cybersecurity">Cybersecurity</Link></li>
                            <li><Link href="/services/software-development">Software Development</Link></li>
                            <li><Link href="/services/enterprise-solutions">Enterprise Solutions</Link></li>
                            <li><Link href="/services/managed-services">Managed Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className={styles.column}>
                        <h4>Contact Us</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} />
                                <span>B-1102, Mahavir Icon, Plot 89/90<br />Sector 15, CBD Belapur<br />Navi Mumbai, MH 400614</span>
                            </li>
                            <li>
                                <Phone size={18} />
                                <a href="tel:02235112892">022 3511 2892</a>
                            </li>
                            <li>
                                <Mail size={18} />
                                <a href="mailto:info@servtech.in">info@servtech.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p>&copy; {currentYear} Servtech. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <span>•</span>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
