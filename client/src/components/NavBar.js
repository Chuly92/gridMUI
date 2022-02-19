import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 10 }}>
            Challenge Full Stack
          </Typography>
          <Button href="/newMovement" color="inherit" sx={{ m: 1 }}>
            New Income/Expense
          </Button>
          <Button href="/listMovements" color="inherit" sx={{ m: 1 }}>
            List All Movements
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};