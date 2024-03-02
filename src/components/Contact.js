import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

{/* <div className="page-container">
      <h1>Contact Us</h1>

      {/* Contact Info */}
    //   <div className="contact-info">
    //     <p>Phone: +44 (0) 7355 573 823</p>
    //     <p>Email: hire@nuclecode.uk</p>
    //     {/* Add more contact information as needed */}
    //   </div>

    //   {/* FAQ Section */}
    //   <div className="faq-section">
    //     <h2>FAQ</h2>
    //     <Accordion>
    //       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    //         <Typography>Question 1</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <Typography>
    //           Answer to question 1...
    //         </Typography>  
    //       </AccordionDetails>
    //     </Accordion>
    //     <Accordion>
    //       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    //         <Typography>Question 2</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <Typography>
    //           Answer to question 2...
    //         </Typography>  
    //       </AccordionDetails>
    //     </Accordion>
    //     <Accordion>
    //       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    //         <Typography>Question 3</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <Typography>
    //           Answer to question 3...
    //         </Typography>  
    //       </AccordionDetails>
    //     </Accordion>
    //   </div>
    // </div>

