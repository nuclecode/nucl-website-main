import React from 'react';
import { Grid } from '@mui/material';

function Footer() {
    const currentYear = new Date().getFullYear();
    const columns = [
      {
        title: 'Column 1',
        links: [
          { text: 'Page 1', url: '/page1' },
          { text: 'Page 2', url: '/page2' },
          { text: 'Page 3', url: '/page3' },
        ],
        logo: true, // Show logo in the first column
      },
      {
        title: 'Column 2',
        links: [
          { text: 'Link 1', url: '/link1' },
          { text: 'Link 2', url: '/link2' },
          { text: 'Link 3', url: '/link3' },
        ],
      },
      {
        title: 'Column 2',
        links: [
          { text: 'Link 1', url: '/link1' },
          { text: 'Link 2', url: '/link2' },
          { text: 'Link 3', url: '/link3' },
        ],
      },
      {
        title: 'Column 2',
        links: [
          { text: 'Link 1', url: '/link1' },
          { text: 'Link 2', url: '/link2' },
          { text: 'Link 3', url: '/link3' },
        ],
      },
      {
        title: 'Column 2',
        links: [
          { text: 'Link 1', url: '/link1' },
          { text: 'Link 2', url: '/link2' },
          { text: 'Link 3', url: '/link3' },
        ],
      },
    ];

    return (
      <footer className="footer">
      <div className="footer-container">
        <Grid container spacing={2} justifyContent="center"> {/* Adjust spacing and alignment */}
          {columns.map((column, index) => (
            <Grid item key={index} xs={12} sm={2} md={2}> {/* Adjust the column width for different screen sizes */}
              <div className="footer-column">
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}><a href={link.url}>{link.text}</a></li>
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
          background-color: #f0f0f0;
          padding: 20px 0;
        }

        .footer-container {
          margin: 0 auto; /* Center the container */
          max-width: 1200px; /* Limit the width */
          padding: 0 20px; /* Add margins on the sides */
        }

        .footer-column {
          text-align: center;
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

        .footer-lower {
          text-align: center;
          margin-top: 20px; /* Add space between upper and lower parts */
        }
      `}</style>
    </footer>
    );
  }

export default Footer;
