import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';



function CaseStudy1() {
  return (
    <div className="page-container">
      <h1>Case Study 1 - Name of it</h1>

      {/* Project 1 */}
      <div className="project">
        <h2>Project 1</h2>
        <img src="placeholder_image_1.jpg" alt="Project 1" />
        <p>Description of Project 1...</p>
      </div>
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

export default CaseStudy1;
