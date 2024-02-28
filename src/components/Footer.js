    import React from 'react';
    import { Grid } from '@mui/material';
    import { Link } from 'react-router-dom';

    function Footer() {
        const currentYear = new Date().getFullYear();
        const columns = [
          {
            title: 'Solutions',
            links: [
              { text: 'Front End', url: '/frontend' },
              { text: 'Back End', url: '/backend' },
              { text: 'Software Testing', url: '/software-testing' },
            ],
            logo: true, //logo in 1st col
          },
          {
            title: 'Portfolio',
            links: [
              { text: 'Case study 1', url: '/case1' },
              { text: 'Case study 2', url: '/case2' },
              { text: 'Case study 3', url: '/case3' },
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
            <Grid container spacing={2} justifyContent="center">
              {columns.map((column, index) => (
                <Grid item key={index} xs={12} sm={2} md={2}>
                  <div className="footer-column">
                    <h2>{column.title}</h2>
                    <ul>
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link to={link.url}>{link.text}</Link> 
                        </li>
                      ))}
                    </ul>
                    {column.logo && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                        {/* SVG logo */}
                      </svg>
                    )}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className="footer-lower">
            <a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <p>&copy; nuclecode {currentYear}</p>
          </div>
          <style jsx>{`
            .footer {
              background-color: #fcf9fd;
              padding: 20px 0;
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
              margin-bottom: 5px;
            }

            .footer a {
              color: black;
              font-family: 'Coustard', serif;
              text-decoration: none; 
          }

            .footer-lower {
              text-align: center;
              margin-top: 20px; /* Add space between upper and lower parts */
            }
          `}</style>
        </footer>
        );
      }
    
    export default Footer;
    
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
