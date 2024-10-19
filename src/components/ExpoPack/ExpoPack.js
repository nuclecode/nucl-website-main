import React from 'react';
import styles from './ExpoPack.module.scss';
import { Link } from 'react-router-dom';

const ExpoPack = () => {
    return (
        <div className={styles.demoCard}>
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Get ready for Expo with nuclecode Expo Packs</h2>
                <p className={styles.cardDescription}>
                    Explore our special exhibition packs, designed to give your brand maximum exposure with minimal investment.
                </p>
                <Link to="/expo-ready" className={styles.ctaButton}>
                    Learn More about it
                </Link>
            </div>
            <div className={styles.cardImage}>
                <img src="/expo.jpg" alt="Exhibition Pack" />
            </div>
        </div>
    );
};

export default ExpoPack;
