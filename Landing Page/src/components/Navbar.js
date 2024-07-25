import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#004d40' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          One Life Health Care
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" >
          Login or Signup
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
