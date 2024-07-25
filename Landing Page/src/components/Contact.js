import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <form>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
