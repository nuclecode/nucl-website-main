import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';


function Portfolio ()
{
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="project">
                <Link to="/project1">
                    <img src="placeholder_image_1.jpg" alt="Project 1" />
                    <h3>Project 1</h3>
                </Link>
            </div>
            <div className="project">
                <Link to="/project2">
                    <img src="placeholder_image_2.jpg" alt="Project 2" />
                    <h3>Project 2</h3>
                </Link>
            </div>
            <div className="project">
                <Link to="/project3">
                    <img src="placeholder_image_3.jpg" alt="Project 3" />
                    <h3>Project 3</h3>
                </Link>
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
    );}

export default Portfolio;