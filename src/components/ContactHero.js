import React from 'react';

const ContactHero = () => {
    return (
<div className="hero-contact-container">
      <h1>Your Hero Title</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 700 700"
        width="100%"
        height="100%"
        className="hero-conatact-svg"
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ffflux-gradient"
          >
            <stop stopColor="hsl(315, 100%, 72%)" stopOpacity="1" offset="0%" />
            <stop stopColor="hsl(227, 100%, 50%)" stopOpacity="1" offset="100%" />
          </linearGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.003"
              numOctaves="2"
              seed="193"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            />
            <feGaussianBlur
              stdDeviation="20 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            />
            <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend" />
          </filter>
        </defs>
        <rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)" />
      </svg>
    </div>
// const svgPaths = `
// <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700" width="700" height="700"><defs><linearGradient gradientTransform="rotate(150, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ffflux-gradient"><stop stop-color="hsl(315, 100%, 72%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(227, 100%, 50%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//   <feTurbulence type="fractalNoise" baseFrequency="0.005 0.003" numOctaves="2" seed="193" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
//   <feGaussianBlur stdDeviation="20 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
//   <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
  
// </filter></defs><rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect></svg>
// `;

// const ContactHero = () => {
//   return (
//     <div className="hero-contact-section" >
//         <h1 style={{ color: '#000' }}>Contact</h1>
//       <div dangerouslySetInnerHTML={{ __html: svgPaths }} />
//     </div>
  );
};

export default ContactHero;
