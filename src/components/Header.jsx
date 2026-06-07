import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Header() {

  const about = "We are a team dedicated to helping users build professional resumes quickly with modern tools and simplicity.";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 30px rgba(0,0,0,0.25)', borderBottom: '1px solid rgba(255,255,255,0.08)'  }}  >
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" sx={{ mr: 2 }}>
            <img src={logo}  alt="logo" style={{ width: 42, height: 42, borderRadius: '10px' }} />
          </IconButton>     
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: '0.5px' }} >
            <Link to="/" style={{  textDecoration: 'none',  color: '#f8fafc',  fontFamily: 'Poppins, sans-serif' }}>
              Resume Builder
            </Link>
          </Typography>
          <Tooltip title={about} arrow>
            <Button
              sx={{ color: '#cbd5e1', fontWeight: 500, textTransform: 'none',  borderRadius: '10px',  px: 2, '&:hover': { background: 'rgba(56, 189, 248, 0.15)',color: '#38bdf8'  } }} >
              About
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>    
      <Toolbar />
    </Box>
  );
}

export default Header;