import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
    const [dynamicWord, setDynamicWord] = useState("CI/CD");
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const videoRef = useRef(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const text = "Harness the power of optimized ".split(" ");
    useEffect(() => {
        const onYouTubeIframeAPIReady = () => {
            if (videoRef.current) {
                const newPlayer = new window.YT.Player(videoRef.current, {
                    videoId: 'gMKEb_L_vNI',
                    events: {
                        onReady: () => {
                            setPlayer(newPlayer);
                        },
                    },
                });
            }
        };

        const loadYouTubeAPI = () => {
            if (window.YT) {
                setScriptLoaded(true);
                onYouTubeIframeAPIReady();
            } else {
                const script = document.createElement('script');
                script.src = 'https://www.youtube.com/iframe_api';
                script.onload = () => {
                    setScriptLoaded(true);
                    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
                };
                document.body.appendChild(script);
            }
        };

        loadYouTubeAPI();
    }, []);

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

    const handlePlayPauseClick = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
            setIsPlaying(!isPlaying);
        }
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
                <div className={styles.videoCard}>
                    <div
                        ref={videoRef}
                        className={styles.videoEmbed}
                    />
                    <span className={styles.playPause} onClick={handlePlayPauseClick}>
                        {isPlaying ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M6 19h2V5H6v14zm10-14v14h-2V5h2z"></path>
                                </svg>
                                <span className={styles.playPauseText}>Pause</span>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                                <span className={styles.playPauseText}>Watch</span>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
