import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../App.css';

function About ()
{
    return (
        <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Welcome to our company!</p>
        </div>
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>We are on a mission of delivering secure, scalable, and easy-to-maintain code.</p>
          <h2>Our Team</h2>
          <p>We are a team of professionals who dedicate their careers to deliver great software that would last.</p>
          {/* <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Michael Johnson - CFO</li>
          </ul> */}
          <h2>Our History</h2>
          <p>Learn more about our company's journey:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium magna in metus eleifend, a fringilla felis dictum.</p>
        </div>
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
    )
}

export default About;