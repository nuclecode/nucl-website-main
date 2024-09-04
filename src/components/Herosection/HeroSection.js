import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
    const [dynamicWord, setDynamicWord] = useState("cool");
    const text = "Feel the power of optimized ".split(" ");

    useEffect(() => {
        const words = ["CI/CD", "Design System", "QA Testing"];
        let index = 0;

        const interval = setInterval(() => {
            setDynamicWord(words[index]);
            index = (index + 1) % words.length;
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

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
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{
                            duration: 0.5,
                            delay: text.length * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className={styles.dynamicWord}
                    >
                        {dynamicWord}
                    </motion.span>
                </div>
                <button className={styles.ctaButton}>Chat to an expert</button>
            </div>
            <div className={styles.videoContainer}>
                <video
                    src="/path/to/your/video.mp4"
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                />
            </div>
        </div>
    );
};

export default HeroSection;
