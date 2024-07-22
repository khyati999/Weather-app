import React from 'react'
import Searchsection from './Component/Searchsection';
import Navbar from './Component/Navbar';
import Feed from './Component/Feed'
import SideCard from './Component/SideCard';
import { Box, Stack } from '@mui/material';
import Tableweather from './Component/Tableweather';
const App = () => {
  return (
    <>

          <Navbar/>
          <Searchsection/> 
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideCard/>
            <Box flex={1}>
              <Feed />
              <Box mt={2}>
                <Tableweather />
              </Box>
            </Box>
            
            </Stack>
          
          
          
    </>
  )
}

export default App