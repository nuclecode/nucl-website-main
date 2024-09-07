import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
    const [dynamicWord, setDynamicWord] = useState("CI/CD");
    const text = "Harness the power of optimized ".split(" ");

    useEffect(() => {
        const words = ["CI/CD", "Design System", "QA Testing"];
        let index = 0;

        const interval = setInterval(() => {
            setDynamicWord(words[index]);
            index = (index + 1) % words.length;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const zoomVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1.2 },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <div className={styles.hero}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    {text.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.2,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}

                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={dynamicWord}
                            variants={zoomVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 0.5,
                            }}
                            className={styles.dynamicWord}
                        >
                            {dynamicWord}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <div className={styles.ctaButtonContainer}>
                    <button className={styles.ctaButton}>Chat to an expert</button>
                </div>
            </div>

            <div className={styles.videoContainer}>

                <iframe
                    width="420"
                    height="240"
                    src="https://www.youtube.com/embed/gMKEb_L_vNI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                />
            </div>
        </div>
    );
};

export default HeroSection;
