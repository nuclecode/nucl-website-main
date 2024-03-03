import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../App.css';

function Solutions() {
  return (
    <div className="solutions-container">
      <div className="solutions-hero-section">
        <div>
        <h1>Solutions</h1>
        <p>
          Whether it's to create your website from scratch or to implement a CI/CD pipeline with
          custom tests, we are sure that we can help. Take a look at the range of services our
          professionals can help you with.
        </p>
        </div>
      </div>

      <div className="solutions-content">
        <h2>Services</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Frontend Development
                </Typography>
                <Typography variant="body2" component="p">
                  We specialize in creating engaging and user-friendly frontend interfaces.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Backend Development
                </Typography>
                <Typography variant="body2" component="p">
                  Our backend solutions are scalable, efficient, and tailored to your business needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3">
                  Software Testing
                </Typography>
                <Typography variant="body2" component="p">
                  Ensure the quality and reliability of your software with our comprehensive testing
                  services.
                </Typography>
                <ul>
                  <li>Android and iOS Testing</li>
                  <li>Website/PWA Testing</li>
                  <li>React App Testing</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
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
  );
}

export default Solutions;
