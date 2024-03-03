import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';

function Home () {

    const cardStyles = {
    borderRadius: 16,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: 16,
  };
    return (
<div className="home-container">
<section className="hero-section hero-section-background">
        <div className="hero-banner">
        <Typography variant="h1"
                    sx={{
                    fontFamily: '"Coustard", serif',
                    fontWeight: 900,
                    fontStyle: 'normal'
                  }}
                >The future of your website secured</Typography>
          <Typography variant="h6"
                    sx={{
                    fontFamily: '"Coustard", serif',
                    fontWeight: 400,
                    fontStyle: 'normal'
                  }}
                >Get secure and tested code to make your website less prone to exploits, with long-lasting effects</Typography>
          <div style={{ marginTop: '3rem' }}>
          <Link to="/portfolio" className="pf-btn">Portfolio</Link>
          <Link to="/schedule-a-call" className="cta-button">Get Started</Link>
          </div>
        </div>
      </section>
      
      <section className="services-section" style={{ padding: '0 16px', textAlign: 'center' }}>
        <h2 style={{ padding:'20px' }}>Our Services</h2>
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
                  style={{ textTransform: 'capitalize' }}
                >
                  Learn&nbsp;<span style={{ textTransform: 'lowercase' }}>more</span>
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
                  style={{ textTransform: 'capitalize' }}
                >
                  Learn&nbsp;<span style={{ textTransform: 'lowercase' }}>more</span>
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
                  style={{ textTransform: 'capitalize' }}
                >
                  Learn&nbsp;<span style={{ textTransform: 'lowercase' }}>more</span>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      
      <section className="about-section" style={{ padding: '20px', textAlign:'center' }}>
        <h2>About Us</h2>
        <p>Learn more about our company and our mission to help businesses succeed.</p>
        <Link to="/about" className="read-more-link">Read More</Link>
      </section>
      
      <section className="portfolio-section"  style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Our Portfolio</h2>
        <p>Explore some of our past projects and see how we've helped other businesses achieve their goals.</p>
        <Link to="/portfolio" className="view-portfolio-link">View Portfolio</Link>
      </section>
      
      <section className="start-today-section" style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ padding: '20px' }}>Ready to start a project?</h2>
        <p>Have a project in mind or need help with an existing one?</p>
        <Button variant="contained" component={Link} to={'/schedule-a-chat'} style={{ textTransform: 'capitalize' }}>Let&apos;s&nbsp;<span style={{ textTransform: 'lowercase' }}>chat!</span></Button>
      </section>

      <section className="subscribe-newsletter" style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Subscribe to our tech newsletter</h3>
        <p>Freshest from the world of web and cybersecurity straight to your inbox every Thursday.</p>
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained" component={Link} to={'/terms-and-conditions'} style={{ textTransform: 'capitalize' }}>Sign&nbsp;<span style={{ textTransform: 'lowercase' }}>me up</span></Button>
    </Box>
    <p style={{ fontSize:'13px', padding: '0 20 0 15' }}>
      By signing up to nuclecode tech newsletter, you agree to the&nbsp;
      <span style={{ textDecoration: 'none' }}>
      <Link to="/terms-and-conditions" style={{ textDecoration: 'underline' }}>terms and conditions</Link>
      </span>
      .
    </p>
      </section>
    </div>
    );
    
}


export default Home;