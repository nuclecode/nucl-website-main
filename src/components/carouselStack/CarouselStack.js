// eslint-disable-next-line
import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaNodeJs, FaAws, FaSass } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselStack.scss';
import { SiMongodb, SiCypress, SiPostgresql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const icons = [
    <FaReact />,
    <RiNextjsFill />,
    <SiCypress />,
    <FaNodeJs />,
    <FaSass />,
    <FaAws />,
    <SiPostgresql />,
    <SiMongodb />,
];

const CarouselIcons = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {icons.map((icon, index) => (
                <div key={index} className="carousel-item">
                    {icon}
                </div>
            ))}
        </Slider>
    );
};

export default CarouselIcons;