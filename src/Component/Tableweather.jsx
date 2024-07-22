
import { Box, Paper, Table, TableBody, TableCell, TableContainer,  TableRow, Typography } from '@mui/material';
import React from 'react'
import "./Tableweather.css";
import weatherImg from "../Images/sunny.png"
function createData(Day, weather, temp, wind, RainChances) {
  return { Day, weather, temp, wind, RainChances };
}
const rows = [
  createData('Monday', 'Mostly Sunny', '14°/16°', '19km/h', '22%'),
  createData('Tuesday', 'Mostly Sunny', '14°/16°', '19km/h','22%' ),
  createData('Wednesday','Mostly Sunny' , '14°/16°', '19km/h','22%'),
  createData('Wednesday','Mostly Sunny' , '14°/16°', '19km/h','22%'),
];
const Tableweather = () => {
  return (
    
    <Box 
    sx={{
      '& > :not(style)': {
        mt: 2,
        mr:8.7,
        width: 1024,
        height: 267,
      },
    }}
    >
    
      <Paper elevation={3} className='paperStyle'>
      <Typography sx={{fontWeight:"bold", padding: "16px"}}>
            Week
        </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 670 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Day}
              </TableCell>
              <TableCell align="right"><img src={weatherImg} alt='sunny' className='SunnyImage' />{row.weather}</TableCell>
              <TableCell align="right">{row.temp}</TableCell>
              <TableCell align="right">{row.wind}</TableCell>
              <TableCell align="right">{row.RainChances}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Paper>
        
    </Box>
  )
}

export default Tableweather;