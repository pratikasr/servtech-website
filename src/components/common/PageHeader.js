import styles from './PageHeader.module.css';

export default function PageHeader({ title, description }) {
    return (
        <section className={styles.pageHeader}>
            <div className="container">
                <h1 className={`${styles.title} animate-fade-in-up`}>{title}</h1>
                {description && (
                    <p className={`${styles.description} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
