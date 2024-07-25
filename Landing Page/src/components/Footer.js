import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 One Life Health Care. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
