import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar } from "@material-ui/core";
import { Stack } from "@mui/material"
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <AppBar style={{ background:"#FFF3F4" }} >
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '20px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to='/'>
    <img src={Logo} alt="logo" style={{width:'65px' , height: '50px', margin: '5px'}} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
    >
    <Link to="/" style={{textDecoration:'none', color: '#3A1212', borderBottom: '3px solid #0000FF'}}>Home</Link>
    <a href="/#exercises" style={{textDecoration:'none', color: '#3A1212'}}>Exercises</a>
    <Link to="bmi" style={{textDecoration:'none', color: '#3A1212'}}>BMI</Link>
    </Stack>
    </Stack>
    </AppBar>

  )
}

export default Navbar