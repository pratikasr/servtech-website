import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className="container">
                <div className={styles.content}>
                    <h2>Ready to Transform Your Business?</h2>
                    <p>
                        Let's discuss how our IT solutions can drive your digital transformation.
                        Get a free consultation with our experts today.
                    </p>
                    <div className={styles.ctaGroup}>
                        <Button
                            href="/contact"
                            variant="primary"
                            size="lg"
                            icon={<ArrowRight size={16} />}
                            iconPosition="right"
                        >
                            Schedule Consultation
                        </Button>
                        <div className={styles.contactInfo}>
                            <span>or call us at</span>
                            <a href="tel:02235112892" className={styles.phone}>022 3511 2892</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
