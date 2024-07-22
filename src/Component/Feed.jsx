import React from 'react'
import Box from "@mui/material/Box";
import { Paper, Typography } from '@mui/material';
import Cards from './Cards';
import "./Feed.css";
const Feed = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"left",
        '& > :not(style)': {
          mt: 2,
          mr:8.7,
          width: 1024,
          height: 233,
        },
      }}
    >
      <Paper elevation={3} className='paperStyle'>
          <Typography className="Text">Today</Typography>
          <Box className="cardContainer">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </Box>  
          
      </Paper>
    </Box>

  )
}

export default Feed;