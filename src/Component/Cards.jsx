
import { Box } from '@mui/material'
import React from 'react'
import weather from "../Images/weather.jpeg"
import "./Feed.css";

const Cards = () => {
  return (
    <>
        <Box className="Cards"
              sx={{
                width: 140,
                height: 141,
                borderRadius: 5,
                bgcolor: '#F6FBFF',
                
                
              }}
              
            >
              <img src={weather} alt="weather" /> 
              
            </Box>
    </>
  )
}

export default Cards;