import React from 'react';
import styles from './ProcessSection.module.scss';

const ProcessSection = () => {
    return (
        <section className={styles.processSection}>
            <div className={`${styles.processCard} ${styles.planning}`}>
                <div className={styles.content}>
                    <h2 className={styles.number}>01</h2>
                    <h2>Planning</h2>
                    <p>Understanding your specific needs and goals to create a tailored solution.</p>
                </div>
                <div className={styles.image}>
                    <img src="/sprint-planning.jpg" alt="Planning" />
                </div>
            </div>

            <div className={`${styles.processCard} ${styles.designDevelopment}`}>
                <div className={styles.content}>
                    <h2 className={styles.number}>02</h2>
                    <h2>Design & Development</h2>
                    <p>Building the eCommerce store with modern technologies that fit your business.</p>
                </div>
                <div className={styles.image}>
                    <img src="/development.jpg" alt="Design and Development" />
                </div>
            </div>

            <div className={`${styles.processCard} ${styles.testing}`}>
                <div className={styles.content}>
                    <h2 className={styles.number}>03</h2>
                    <h2>Testing</h2>
                    <p>Rigorous frontend, backend, and cross-browser testing to ensure speed, security, and flawless functionality.</p>
                </div>
                <div className={styles.image}>
                    <img src="/testing.webp" alt="Testing" />
                </div>
            </div>

            <div className={`${styles.processCard} ${styles.ongoingSupport}`}>
                <div className={styles.content}>
                    <h2 className={styles.number}>04</h2>
                    <h2>Ongoing Support</h2>
                    <p>Maintenance and updates post-launch to keep your website running smoothly.</p>
                </div>
                <div className={styles.image}>
                    <img src="/circleci-maintenance.png" alt="Ongoing Support" />
                </div>
            </div>

            <div className={`${styles.processCard} ${styles.cicd}`}>
                <div className={styles.content}>
                    <h2 className={styles.number}>05</h2>
                    <h2>Our Commitment to Quality</h2>
                    <p>We ensure that all software is rigorously tested before release. Our CI/CD pipeline guarantees smooth updates and notifications for any issues, ensuring a seamless experience for you and your customers.</p>
                </div>
                <div className={styles.image}>
                    <img src="/tested-software.jpg" alt="CI/CD and Quality" />
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
