import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="100px" padding="5px" bgcolor="#FFF3F4" >
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px'} }} mt="41px" textAlign="center" pb="40px">Made by Shreyas Y Bangera</Typography>
  </Box>
);

export default Footer;