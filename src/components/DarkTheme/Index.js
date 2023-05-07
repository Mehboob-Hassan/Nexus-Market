import { Switch, Box } from '@mui/material'
import React from 'react'

export default function index({ toggleDarkMode, setToggleDarkMode}) {

    const handleChange = (event) => {
        setToggleDarkMode(event.target.checked);
    };
  return (
   <>
          <Box>
              <Switch
                  checked={toggleDarkMode}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
              />
          </Box>
   
   </>
  )
}
