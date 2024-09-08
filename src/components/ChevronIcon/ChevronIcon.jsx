import React from 'react';

const ChevronIcon = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" fill="currentColor"/>
    
  </svg>
);

export default ChevronIcon;



// import React from 'react';

// const Chevron = ({ className, expanded }) => {
//   return (
//     <svg
//       className={`${className} ${expanded ? 'expanded' : ''}`}
//       width="16"
//       height="16"
//       viewBox="0 0 16 16"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4.293 5.293a1 1 0 011.414 0L8 7.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };

// export default Chevron;
