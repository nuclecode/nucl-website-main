import React from 'react';
import styles from './ExpoReady.module.scss';
import Layout from '../../layout/layout';

const ExhibitionPacks = () => {
    const packs = [
        {
            title: "Basic Pack",
            price: "£500",
            features: ["1 Exhibition Stand", "Basic Listing in Catalog", "3 Staff Passes"],
        },
        {
            title: "Standard Pack",
            price: "£1000",
            features: ["2 Exhibition Stands", "Priority Listing in Catalog", "5 Staff Passes", "Social Media Coverage"],
        },
        {
            title: "Premium Pack",
            price: "£2000",
            features: ["3 Exhibition Stands", "Featured Listing in Catalog", "10 Staff Passes", "Custom Branding", "Event Sponsorship"],
        },
    ];

    return (
        <Layout>
        <div className={styles.pageContainer}>
            <h1 className={styles.heading}>Choose Your Exhibition Pack in London</h1>
            <div className={styles.packContainer}>
                {packs.map((pack, index) => (
                    <div key={index} className={styles.packCard}>
                        <h2 className={styles.packTitle}>{pack.title}</h2>
                        <p className={styles.packPrice}>{pack.price}</p>
                        <ul className={styles.packFeatures}>
                            {pack.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        </Layout>
    );
};

export default ExhibitionPacks;
