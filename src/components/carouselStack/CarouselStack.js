import React from 'react';
import './CarouselStack.scss';
import { FaReact, FaNodeJs, FaAws, FaSass } from 'react-icons/fa';
import { SiPostgresql, SiMongodb } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { SiCypress } from "react-icons/si";
const CarouselStack = () => {
    const logos = [
        <FaReact size={60} />,
        <RiNextjsFill size={60} />,
        <SiCypress size={60} />,
        <FaNodeJs size={60} />,
        <FaSass size={60} />,
        <FaAws size={60} />,
        <SiPostgresql size={60} />,
        <SiMongodb size={60} />,
    ];


    return (
        <div className="carousel-wrapper">
            <h2 className="carousel-title">Our Stack</h2>
            <div className="carousel-container">
                <div className="carousel-inner">
                    {logos.map((logo, index) => (
                        <div className="carousel-item" key={index}>
                            {logo}
                        </div>
                    ))}
                </div>
                <div className="carousel-inner">
                    {logos.map((logo, index) => (
                        <div className="carousel-item" key={`duplicate-${index}`}>
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselStack;
