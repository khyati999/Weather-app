import {  Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Tooltip, Typography, styled } from '@mui/material';
import traveler from '../Images/traveler.jpeg' ;
import { useState } from 'react';
import '../Traveler/Travelerpopup.css';
const StyleModal=styled(Modal)(
    {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
)

const Traveler=()=>{
    const [open,setOpen]=useState(false)
    return(
        <>
        <Tooltip onClick={()=>setOpen(true)}
         //title="Delete"
        sx={{position:"fixed",
        bottom:20,
        left:30,
        }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, cursor: 'pointer',color:'#030A4A',fontWeight: 'bold',letterSpacing:"0.5px", }}>
            Welcome, Traveler
          </Typography>
        </Tooltip>
        <Box>
        <StyleModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box className="traveler-box" sx={{ border: 'none' , outline:'none' }}>
           <Box className="typography-text">
                <Typography  variant='h6' color="black" textAlign="center" sx={{fontSize:"26px",fontWeight:"700px",lineHeight:"24px"}}>
                       Welcome to Weather
                </Typography>
                <Typography textAlign="center" color="#1A4696" sx={{fontSize:"14px",fontWeight:"400",lineHeight:"24px"}}>
                       Let's get started
                </Typography>
                <Typography textAlign="center" color="#667085" sx={{fontSize:"14px",fontWeight:"400",lineHeight:"24px"}}>
                Select your field for the Weather Platform
                </Typography>
           </Box>
           <Box sx={{display:"flex",justifyContent:"center",paddingTop:"10px",paddingBottom:"10px"}}>
               
                    <img className="img" src={traveler}
                        alt='traveler img'
                    />
                
           </Box>
           <Box sx={{display:"flex",justifyContent:"center",paddingBottom:"5px"}}>
                <FormControl  className='login-btn'>
                <InputLabel id="demo-simple-select-label">Traveler</InputLabel>
                  <Select
                        
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        sx={{ height:"40px" }}
                     >
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
           <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button className="login-btn" variant="contained"  sx={{ height:"40px" }} >Login</Button>
           </Box>
        </Box>
        </StyleModal>
       
        </Box>
       
        </>
    )
}
export default Traveler;