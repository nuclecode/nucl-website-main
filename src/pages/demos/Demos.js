import styles from './Demos.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import Layout from '../../layout/layout';

const demoWebsites = [
    { name: "e-Commerce Store", url: "https://idncod-store.netlify.app/products" },
    // { name: "Website 2", url: "https://example2.com" },
];

const Demos = () => {
    const openWebsiteInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <Layout>
            <div className={styles.demos}>
                <h1>See how the websites we make look and perform.</h1>
                <div className={styles.demosGrid}>
                    {demoWebsites.map((demo, index) => (
                        <div key={index} className={styles.demoCard}>
                            <h2 className={styles.demoTitle}>{demo.name}</h2>
                            <iframe
                                src={demo.url}
                                title={demo.name}
                                loading="lazy"
                                className={styles.demoIframe}
                                allowFullScreen
                            ></iframe>
                            <FiExternalLink
                                className={styles.externalLinkIcon}
                                onClick={() => openWebsiteInNewTab(demo.url)}
                                title={`Open ${demo.name}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Demos;