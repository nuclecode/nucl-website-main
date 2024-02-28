import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <p>Phone: +1 123 456 7890</p>
        <p>Email: info@example.com</p>
        {/* Add more contact information as needed */}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>FAQ</h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer to question 1...
            </Typography>  
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer to question 2...
            </Typography>  
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Question 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Answer to question 3...
            </Typography>  
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Contact;
