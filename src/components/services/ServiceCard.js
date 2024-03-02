import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Link to={link}>Learn More</Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
