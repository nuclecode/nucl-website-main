import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home () {

    const cardStyles = {
    borderRadius: 16, // Adjust border radius as needed
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
    padding: 16, // Add padding for content
  };
    return (
<div className="home-container">
<section className="hero-section hero-section-background">
        <div className="hero-banner">
        <Typography variant="h1">Welcome to Our Website</Typography>
          <Typography variant="body1">We specialize in providing cutting-edge solutions for your business needs.</Typography>          <Link to="/portfolio" className="pf-btn">Portfolio</Link>
          <Link to="/schedule-a-call" className="cta-button">Get Started</Link>
        </div>
      </section>
      
      <section className="services-section" style={{ padding: '0 16px' }}>
        <h2>Our Services</h2>
        <Grid container spacing={3} justifyContent="center">
          {/* Service 1 */}
          <Grid item xs={12} sm={4}>
            <Card style={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Frontend Development
                </Typography>
                <Typography variant="body1" paragraph>
                  Crafting beautiful and intuitive user interfaces.
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  to="/frontend"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card style={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Backend Development
                </Typography>
                <Typography variant="body1" paragraph>
                  Building robust and scalable server-side applications.
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  to="/backend"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* Software Testing */}
          <Grid item xs={12} sm={4}>
            <Card style={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Software Testing
                </Typography>
                <Typography variant="body1" paragraph>
                  Ensuring the quality and reliability of your software products.
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  component={Link}
                  to="/software-testing"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      
      <section className="about-section">
        <h2>About Us</h2>
        <p>Learn more about our company and our mission to help businesses succeed.</p>
        <Link to="/about" className="read-more-link">Read More</Link>
      </section>
      
      <section className="portfolio-section">
        <h2>Our Portfolio</h2>
        <p>Explore some of our past projects and see how we've helped other businesses achieve their goals.</p>
        <Link to="/portfolio" className="view-portfolio-link">View Portfolio</Link>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a project in mind or need assistance? Contact us today!</p>
        <Link to="/contact" className="contact-us-link">Contact Us</Link>
      </section>
    </div>
    );
}

export default Home;