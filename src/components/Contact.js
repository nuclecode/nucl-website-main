import React from 'react';
// import ContactHero from './ContactHero';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../App.css';

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-hero-section contact-hero-section-background">
        <div className="hero-banner">
        <Typography variant="h1"
                    sx={{
                    fontFamily: '"Coustard", serif',
                    fontWeight: 900,
                    fontStyle: 'normal'
                  }}
                >
        Contact
        </Typography>
        <Typography variant="h6"
                    sx={{
                    fontFamily: '"Coustard", serif',
                    fontWeight: 400,
                    fontStyle: 'normal'
                  }}
                >
              Need us? We are always a phone call away!
        </Typography>
        </div>
      </section>
  
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ width: '100%', bgcolor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Email us
            </Typography>
            <Typography variant="body1">
              hire@nuclecode.uk
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', bgcolor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Call Us 
            </Typography>
            <Typography variant="body1">
              +44 (0) 7355 573 823
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <section className="start-today-section" style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ padding: '20px' }}>Ready to start a project?</h2>
        <p>Have a project in mind or need help with an existing one?</p>
        <Button variant="contained" component={Link} to={'/schedule-a-chat'} style={{ textTransform: 'capitalize' }}>
          Let's&nbsp;<span style={{ textTransform: 'lowercase' }}>chat!</span>
        </Button>
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
          <Button variant="contained" component={Link} to={'/terms-and-conditions'} style={{ textTransform: 'capitalize' }}>
            Sign&nbsp;<span style={{ textTransform: 'lowercase' }}>me up</span>
          </Button>
        </Box>
        <p style={{ fontSize: '13px', padding: '0 20px', margin: '10px 0' }}>
          By signing up to nuclecode tech newsletter, you agree to the&nbsp;
          <Link to="/terms-and-conditions" style={{ textDecoration: 'underline' }}>terms and conditions</Link>
          .
        </p>
      </section>
    </div>
  );
}

export default Contact;