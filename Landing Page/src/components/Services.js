import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const services = [
  { title: 'Telemedicine', description: 'Consult with our doctors online.' },
  { title: 'Mental Health', description: 'Support for mental well-being.' },
  { title: 'Nutrition', description: 'Personalized nutrition plans.' },
  { title: 'Fitness', description: 'Custom fitness programs.' }
];

const Services = () => {
  return (
    <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
