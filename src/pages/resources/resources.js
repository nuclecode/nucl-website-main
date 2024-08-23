import React from 'react';
import './resources.scss';

function Resources() {
    const placeholders = new Array(8).fill(null);

    return (
        <>
            <h1>Our Resources</h1>
            <section className="video-grid">
                {placeholders.map((_, index) => (
                    <div key={index} className="video-card placeholder">
                        <div className="video-thumbnail"></div>
                        <h2>Video Title</h2>
                        <p>Video description. </p>
                        <button className="watch-button">
                            <svg width="16" height="16" fill="orange" xmlns="http://www.w3.org/2000/svg"><path d="..."/></svg> Watch
                        </button>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Resources;
