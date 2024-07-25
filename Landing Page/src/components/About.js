import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" component="p">
        One Life Health Care is dedicated to providing top-notch health services to people worldwide. Our mission is to enhance the quality of life through exceptional health care.
      </Typography>
    </Container>
  );
};

export default About;
