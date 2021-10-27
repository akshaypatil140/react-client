import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { AddDialog } from '../../../components/Trainee/components';

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          width="auto"
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Trainee Portal
        </Typography>
        <Button><Link style={{ color: 'white', textDecoration: 'none' }} to="/Trainee">TRAINEE</Link></Button>
        <Button><Link style={{ color: 'white', textDecoration: 'none' }} to="/TextFieldDemo">TEXTFIELD DEMO</Link></Button>
        <Button><Link style={{ color: 'white', textDecoration: 'none' }} to="/InputDemo">INPUT DEMO</Link></Button>
        <Button><Link style={{ color: 'white', textDecoration: 'none' }} to="/ChildrenDemo">CHILDREN DEMO</Link></Button>
        <Button style={{ marginLeft: '30px' }}><Link style={{ color: 'white', textDecoration: 'none' }} to="/Login">LOGOUT</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
