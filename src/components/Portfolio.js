import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio ()
{
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="project">
                <Link to="/project1">
                    <img src="placeholder_image_1.jpg" alt="Project 1" />
                    <h3>Project 1</h3>
                </Link>
            </div>
            <div className="project">
                <Link to="/project2">
                    <img src="placeholder_image_2.jpg" alt="Project 2" />
                    <h3>Project 2</h3>
                </Link>
            </div>
            <div className="project">
                <Link to="/project3">
                    <img src="placeholder_image_3.jpg" alt="Project 3" />
                    <h3>Project 3</h3>
                </Link>
            </div>
        </div>
    );}

export default Portfolio;