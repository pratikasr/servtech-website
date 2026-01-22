import styles from './PageHeader.module.css';

export default function PageHeader({ title, description }) {
    return (
        <section className={styles.pageHeader}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>
        </section>
    );
}
