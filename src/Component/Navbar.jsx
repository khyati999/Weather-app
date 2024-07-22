import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';
import './Navbar.css';
import Traveler from '../Traveler/TravelerPopup';

const Navbar=()=>{
    return(
        <>
            <AppBar className='appbar' position="static" color="transparent" elevation={0}  >
            <Toolbar>
                <Traveler/>
                <IconButton edge="end" color="inherit">
                <NotificationsNoneIcon/>
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
                    <Avatar 
                        alt="userImage" 
                        src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg" 
                        sx={{ width: 40, height: 40, borderRadius: 2 }}  
                    />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                        User
                    </Typography>
                </Box>
            </Toolbar>
            </AppBar>
            <div className='nav_divHeader'></div>
           
        </>
    )
}
export default Navbar;