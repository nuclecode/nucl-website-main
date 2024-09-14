import React, { useState, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import { PiHandTap } from 'react-icons/pi';
import './DemoHero.scss';

const DemoHero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 899);
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <section className="pageContainer">
            <div className="heroContainer">
                <div className="heroTitle">
                    <h1>Proper business software</h1>
                </div>
                <div className="heroParagraph">
                    Expert systems design at any scale with automated test coverage and CI/CD pipeline.
                </div>
                <div className="heroBtnContainer">
                <button className="btn-lets-chat">
                    Let's chat
                </button>
                <button className="btn-portfolio">
                    Portfolio
                </button>
                </div>
            </div>

            <div className="scroll-indicator">
                {isMobile ? <PiHandTap size={40}/> : <CgMouse size={40}/>}
            </div>
        </section>
    );
};

export default DemoHero;