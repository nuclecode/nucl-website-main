import React from 'react';
import './resources.scss';
import Layout from '../../layout/layout';
import Glossary from '../../components/Glossary/Glossary';
import Syllabus from '../../components/Syllabus/Syllabus';
import HeroSection from "../../components/Herosection/HeroSection";

function Resources() {
    const placeholders = new Array(8).fill(null);

    return (
		<Layout title="Resources | nuclecode - Insights and Tools for Web Development." description="Access valuable resources from nuclecode, including blogs, videos, guides, and industry - standard testing tools to elevate your web development projects.">
            <div className="resources-container">
                <h1>Our Resources</h1>
                <Syllabus />
                <Glossary />
                <HeroSection />
                <section className="video-grid">
                    {placeholders.map((_, index) => (
                        <div key={index} className="video-card placeholder">
                            <div className="video-thumbnail"></div>
                            <h2>Video Title</h2>
                            <p>Video description goes here. This is a placeholder text.</p>
                            <button className="watch-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                                Watch
                            </button>
                        </div>
                    ))}
                </section>
            </div>
        </Layout>
    );
}

export default Resources;
