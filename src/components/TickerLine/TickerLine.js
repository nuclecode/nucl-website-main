import React, { useEffect, useState, useRef, useCallback } from "react";
import './TickerLine.scss'; // Import your SCSS file here

const newsItems = [
    { key: "🚨 Special Offer: Testing Services with Up to 50% Off! 🚨" },
    { key: "Unit Tests at £1 | Integration Tests at £3 | End-To-End Tests at £5 | Accessibility Testing at £10!" },
    { key: "Don’t miss out on big savings! Let our experts ensure your software runs flawlessly. " },
    { key: "Calculate your savings today!" },
];

const Element = ({ title }) => {
    return <div className="element">{title}</div>;
};

const Ticker = () => {
    const [items, setItems] = useState(newsItems);
    const wrapperRef = useRef();
    const indexRef = useRef();

    const handleRefUpdate = useCallback((node) => {
        if (node !== null && items.length > 0) {
            indexRef.current = node.firstChild;
            wrapperRef.current = node;
            document.documentElement.style.setProperty('--animationDistance', `${0 - indexRef.current.offsetWidth}px`);
            document.documentElement.style.setProperty('--animationDuration', `${Math.round(indexRef.current.offsetWidth / 33)}s`);
            wrapperRef.current.classList.add('moving');
        }
    }, [items]);

    const handleLoop = () => {
        wrapperRef.current.classList.remove('moving');
        wrapperRef.current.style.animation = 'none';
        const t = wrapperRef.current.offsetHeight; /* trigger reflow */
        wrapperRef.current.style.animation = null;
        shiftNext([...items]);
    };

    const shiftNext = (copy) => {
        const firstitem = copy.shift();
        copy.push(firstitem); // Moved the item to the end
        setItems(copy);
    };

    const handleAnimationEnd = () => {
        handleLoop();
    };

    const handleClick = () => {
        window.location.href = '/calculate-your-tests';
    };

    return (
        <div className="wrapper" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="inner" ref={handleRefUpdate} onAnimationEnd={handleAnimationEnd}>
                {items.map((obj, index) => (
                    <Element title={obj.key} key={obj.key + index} />
                ))}
            </div>
        </div>
    );
};

export default Ticker;
