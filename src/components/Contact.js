import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

function Contact() {
  return (
    <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12} md={6} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box sx={{ width: '100%', bgcolor: '#f0f0f0', padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Email Us
            </Typography>
            <Typography variant="body1">
              contact@example.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', bgcolor: '#f0f0f0', padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Call Us 
              UK numbers
            </Typography>
            <Typography variant="body1">
            +44 (0) 7355 573 823
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}

export default Contact;