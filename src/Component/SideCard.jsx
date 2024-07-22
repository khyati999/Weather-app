import { Box, Button, Paper } from "@mui/material";
import './SideCard.css';
import weather from "../Images/weather.jpeg";

const SideCard=()=>{
    return(
      <>
        <Box className="main-container"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              mt: 2,
              ml:4,
              width: 420,
              height: 528,
              },
            }}
          >
          <Paper elevation={1}>
            <Box className="btn-container">
              <Button variant="contained" className="btn" sx={{background:"#EBF7FF",color:"black"}}>Source</Button>
              <Button variant="contained" className="btn" sx={{background:"black",color:"white"}}>Destination</Button>
            </Box>
            <Box className="img-container">
              <img src={weather} alt="images" className="imageBlue"/>
            </Box>
          </Paper>
      </Box>
  </>
    )
};
export default SideCard;