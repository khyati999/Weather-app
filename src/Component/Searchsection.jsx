import React from 'react'
import Box from "@mui/material/Box";
import ClearIcon from '@mui/icons-material/Clear';
import "./Searchsection.css";
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
const Searchsection = () => {
  return (
    <>
    
    <Box className="containerBox">
      <Box>
        <Box className="labelBox">
          <Typography className="labels">Source Location</Typography>
        </Box>
        <Box className="inputBox">
          <TextField
            placeholder="Enter Location"
            className="textfield box1"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear input"
                    style={{ color: "black" }}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                height: "100%", 
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box>
        <Box className="labelBox">
          <Typography className="labels">Destination Location</Typography>
        </Box>
        <Box className="inputBox">
          <TextField
            id="outlined-basic"
            placeholder="Enter Location"
            className="textfield box2"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear input"
                    style={{ color: "black" }}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                height: "100%",
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box>
        <Box className="labelBox">
          <Typography className="labels">Date</Typography>
        </Box>
        <Box className="inputBox">
          <TextField
            id="outlined-basic"
            placeholder="Enter Location"
            className="textfield box3"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear input"
                    style={{ color: "black" }}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                height: "100%",
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box>
        <Box className="btn-box">
          <Button className="btn-css box4" variant="contained">
            Check Weather
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Searchsection;