import React from 'react'
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import { TutorialsTabs } from './components/TutorialsTabs';

export const Tutorials = () => {
  return (
  
      <Box sx={{p: 3, overflowX:'hidden', backgroundColor: "#EBEAED",}}>

      <Box mb="20px">
            <Typography
              sx={{ color: "#354052", fontSize: "28px", fontWeight: "400" }}
            >
              Your Affiliations
            </Typography>
      </Box>

      <Box>
        <TutorialsTabs/>
      </Box>


      </Box>
    
  )
}
