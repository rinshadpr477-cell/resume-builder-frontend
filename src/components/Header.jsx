import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';




function Header() {

    const about="We are a team of passionate developers dedicated to creating innovative solutions that empower individuals to build their professional resumes with ease and efficiency. Our mission is to simplify the resume-building process, making it accessible to everyone, regardless of their technical expertise. We believe that a well-crafted resume is a powerful tool that can open doors to new opportunities and help individuals showcase their skills and experiences effectively. With our user-friendly platform and commitment to excellence, we strive to provide a seamless experience for our users, enabling them to create impressive resumes that stand out in the competitive job market."
  return (
    <Box sx={{ flexGrow: 1,position:'fixed',width:'100%',top:'0' }}>
      <AppBar position="static" sx={{backgroundColor:'green'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img src={logo} alt='logo' style={{width:'40px',height:'40px'}}/> 
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:'bold' }}>
            <Link className='text-light text-decoration-none fw-bold' to={'/'}> Resume Builder </Link>
          </Typography>

          <Tooltip title={about}>

          <Button sx={{fontWeight: 'bold' }} color="inherit">ABOUT US</Button>
 
            </Tooltip>


        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
