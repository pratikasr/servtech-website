'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/common/PageHeader';
import { partnersData } from '@/data/partners';
import styles from './page.module.css';

function PartnersContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category');
    const [activeCategory, setActiveCategory] = useState('All');

    // Sync active category with URL param on load
    useEffect(() => {
        if (initialCategory) {
            // Decoding URI component to handle spaces/ampersands correctly
            const decodedCategory = decodeURIComponent(initialCategory);
            setActiveCategory(decodedCategory);
        }
    }, [initialCategory]);

    // Extract unique categories, sorted alphabetically
    const categories = ['All', ...new Set(partnersData.map(p => p.category))].sort();

    const filteredPartners = activeCategory === 'All'
        ? partnersData
        : partnersData.filter(p => p.category === activeCategory);

    return (
        <>
            <PageHeader
                title="Our Strategic Partners"
                description="Collaborating with world-leading OEMs to deliver best-in-class technology solutions."
            />

            <section className={styles.section}>
                <div className="container">
                    {/* Category Filter */}
                    <div className={styles.tabs}>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`${styles.tabBtn} ${activeCategory === category ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Partners Grid */}
                    <div className={styles.grid}>
                        {filteredPartners.map((partner, index) => (
                            <a
                                key={index}
                                href={partner.website || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                            >
                                <div className={styles.logoPlaceholder}>
                                    {partner.name}
                                </div>
                                <div className={styles.cardCategory}>
                                    {partner.category}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default function PartnersPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PartnersContent />
        </Suspense>
    );
}
