import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?t=st=1721893214~exp=1721896814~hmac=1870a180ba79ef55fa4c339aac952440d0676e0147fd94c4901e6ddb57e29ce4&w=1060)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            IT'S OKAY TO <br /> NOT BE OKAY
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            In the fast-paced hustle of life, it's easy to feel overwhelmed by the weight of our problems. But fret not, for here, within the safe confines of our anonymous haven, you can unburden your heart and soul without fear or judgment.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/services"
            sx={{ mb: 4 }}
          >
            Join Us
          </Button>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#65a7a7', 
                color: 'white', 
                borderRadius: '8px',
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                ANONYMITY, SECURITY AND SAFETY
              </Typography>
              <Typography variant="body1">
                Your identity remains safeguarded as you open up about your deepest struggles.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#65a7a7', 
                color: 'white', 
                borderRadius: '8px',
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                SEASONED PROFESSIONALS AT YOUR FINGERTIPS
              </Typography>
              <Typography variant="body1">
                Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#65a7a7', 
                color: 'white', 
                borderRadius: '8px',
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                AROUND-THE-CLOCK SUPPORT
              </Typography>
              <Typography variant="body1">
                Day or night, you're never alone. Our dedicated team ensures that someone is always available to lend a compassionate ear.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#65a7a7', 
                color: 'white', 
                borderRadius: '8px',
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                LIBERATION TO EXPRESS
              </Typography>
              <Typography variant="body1">
                Feel free to articulate your challenges without reservation, knowing that here, your voice matters.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#65a7a7', 
                color: 'white', 
                borderRadius: '8px',
                boxShadow: 3
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                EMPOWER THROUGH SUPPORT
              </Typography>
              <Typography variant="body1">
                Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center', backgroundColor: '#65a7a7', color: 'black', p: 4, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            WHO WE ARE? WHAT WE DO? WHY WE DO?
          </Typography>
          <Typography variant="body2">
            We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing, knowing that in each narrative lies the potential for healing and growth.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            We're more than just a platform; we're a beacon of hope in the digital realm, providing solace to those navigating life's storms. Our mission is simple yet profound: to create a nurturing environment where individuals can share their struggles openly while receiving invaluable insights and support from a caring community.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            In a world where mental well-being is often overlooked, especially in India where millions grapple with silent battles, we stand firm in our commitment to fostering positive change. Through our app and website, we've cultivated a diverse tapestry of voices, including survivors, therapists, psychologists, and everyday heroes. Here, conversations span a myriad of topics—from financial woes to familial dynamics—bolstered by the unifying thread of empathy and understanding.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            “RECOVERY IS NOT ONE AND DONE. IT'S A LIFELONG JOURNEY THAT TAKES PLACE ONE DAY, ONE STEP AT A TIME.” - Steve Jobs, Mental Health & Adaptations.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
