import React, { useState } from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const columns = [
    {
      title: 'Solutions',
      links: [
        { text: 'Front End', url: '/frontend' },
        { text: 'Back End', url: '/solutions/backend' },
        { text: 'Software Testing', url: '/software-testing' },
      ],
      logo: true,
    },
    {
      title: 'Portfolio',
      links: [
        { text: 'Case study 1', url: '/portfolio' },
        { text: 'Case study 2', url: '/portfolio' },
        { text: 'Case study 3', url: '/portfolio' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <Grid container spacing={isMobile ? 1 : 2} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          {columns.map((column, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="footer-column">
                {isMobile ? (
                  <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}d-content`}
                      id={`panel${index}d-header`}
                    >
                      <Typography>{column.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link to={link.url} className="link">{link.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <>
                    <h2>{column.title}</h2>
                    <ul>
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link to={link.url} className="link">{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="footer-lower">
        <p>&copy; nuclecode {currentYear}</p>
        <a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <style jsx>{`
        .footer {
          background-color: #fcf9fd;
          padding: 50px 0;
          font-family: 'Coustard', serif;
        }
              
        .footer-container {
          margin: 0 auto; /* Center the container */
          max-width: 1200px; /* Limit the width */
          padding: 0 20px;        
        }
              
        .footer-column {
          text-align: left;
        }
              
        h2 {
          margin-bottom: 10px;
        }
              
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
              
        li {
          margin-bottom: 24px;
        }
          
        .footer a {
          color: black;
          font-family: 'Coustard', serif;
          text-decoration: none; 
        }
          
        .footer-lower {
          text-align: center;
          margin-top: 40px; /* Add space between upper and lower parts */
        }
          
        @media (max-width: 767px) {
          .footer-column {
            text-align: left;
          }
          
          .footer-lower {
            margin-top: 20px;
          }
        }

        @media (min-width: 768px) {
          .accordion {
            display: none;
          }

          .accordion.open {
            display: block;
          }

          .accordion li {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;












//START OF GOOD FOOTER
// import React, { useState, useEffect } from 'react';
//     import { Grid } from '@mui/material';
//     import { Link } from 'react-router-dom';

//     function Footer() {
//       const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
//     };

//     handleResize(); // Check initial screen width
//     window.addEventListener('resize', handleResize); // Add event listener for resize

//     return () => {
//       window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
//     };
//   }, []);
//         const currentYear = new Date().getFullYear();
//         const columns = [
//           {
//             title: 'Solutions',
//             links: [
//               { text: 'Front End', url: '/frontend' },
//               { text: 'Back End', url: '/backend' },
//               { text: 'Software Testing', url: '/software-testing' },
//             ],
//             logo: true, //logo in 1st col
//           },
//           {
//             title: 'Portfolio',
//             links: [
//               { text: 'Case study 1', url: '/case1' },
//               { text: 'Case study 2', url: '/case2' },
//               { text: 'Case study 3', url: '/case3' },
//             ],
//           },
//           {
//             title: 'Company',
//             links: [
//               { text: 'About', url: '/about' },
//               { text: 'Contact', url: '/contact' },
              
//             ],
//           },
//         ];
    
//         return (
//           <footer className="footer">
//           <div className="footer-container">
//             <Grid container spacing={2} justifyContent="center">
//               {columns.map((column, index) => (
//                 <Grid item key={index} xs={12} sm={2} md={2}>
//                   <div className="footer-column">
//                     <h2>{column.title}</h2>
//                     <ul>
//                       {column.links.map((link, linkIndex) => (
//                         <li key={linkIndex}>
//                           <Link to={link.url}>{link.text}</Link> 
//                         </li>
//                       ))}
//                     </ul>
//                     {column.logo && (
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
//                         {/* SVG logo */}
//                       </svg>
//                     )}
//                   </div>
//                 </Grid>
//               ))}
//             </Grid>
//           </div>
//           <div className="footer-lower">
//             <p>&copy; nuclecode {currentYear}</p>
//             <a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//           <style jsx>{`
//             .footer {
//               background-color: #fcf9fd;
//               padding: 20px 0;
//               font-family: 'Coustard', serif;
//             }
    
//             .footer-container {
//               margin: 0 auto; /* Center the container */
//               max-width: 1200px; /* Limit the width */
//               padding: 0 20px;
            
//             }
    
//             .footer-column {
//               text-align: left;
//             }
    
//             h2 {
//               margin-bottom: 10px;
//             }
    
//             ul {
//               list-style: none;
//               padding: 0;
//               margin: 0;
//             }
    
//             li {
//               margin-bottom: 5px;
//             }

//             .footer a {
//               color: black;
//               font-family: 'Coustard', serif;
//               text-decoration: none; 
//           }

//             .footer-lower {
//               text-align: center;
//               margin-top: 40px; /* Add space between upper and lower parts */
//             }
//             @media (max-width: 767px) {
//               .accordion {
//                 display: none;
//               }
    
//               .accordion.open {
//                 display: block;
//               }
    
//               .accordion li {
//                 margin-bottom: 10px;
//               }
//             }
//           `}</style>
//         </footer>
//         );
//       }
    
//     export default Footer;
//END OF GOOD FOOTER

  //   return (
  //     <footer className="footer">
  //     <div className="footer-container">
  //       <Grid container spacing={2} justifyContent="center"> {/* Adjust spacing and alignment */}
  //         {columns.map((column, index) => (
  //           <Grid item key={index} xs={12} sm={2} md={2}> {/* Adjust the column width for different screen sizes */}
  //             <div className="footer-column">
  //               <h2>{column.title}</h2>
  //               <ul>
  //                 {column.links.map((link, linkIndex) => (
  //                   <li key={linkIndex}><a href={link.url}>{link.text}</a></li>
  //                 ))}
  //               </ul>
  //               {column.logo && (
  //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  //                   {/* SVG logo */}
  //                 </svg>
  //               )}
  //             </div>
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </div>
  //     <div className="footer-lower">
  //       <a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noopener noreferrer">
  //         <i className="fab fa-linkedin"></i>
  //       </a>
  //       <p>&copy; nuclecode {currentYear}</p>
  //     </div>
  //     <style jsx>{`
  //       .footer {
  //         background-color: #f0f0f0;
  //         padding: 20px 0;
  //       }

  //       .footer-container {
  //         margin: 0 auto; /* Center the container */
  //         max-width: 1200px; /* Limit the width */
  //         padding: 0 20px; /* Add margins on the sides */
  //       }

  //       .footer-column {
  //         text-align: center;
  //       }

  //       h2 {
  //         margin-bottom: 10px;
  //       }

  //       ul {
  //         list-style: none;
  //         padding: 0;
  //         margin: 0;
  //       }

  //       li {
  //         margin-bottom: 5px;
  //       }

  //       .footer-lower {
  //         text-align: center;
  //         margin-top: 20px; /* Add space between upper and lower parts */
  //       }
  //     `}</style>
  //   </footer>
  //   );
  // }
