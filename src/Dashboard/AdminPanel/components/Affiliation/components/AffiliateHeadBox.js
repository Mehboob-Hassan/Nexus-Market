import React from 'react'
import {useState} from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton'


export const AffiliateHeadBox = ({title, subTitle, codeTitle}) => {
    
  return (
    <div>
        <Box sx={{backgroundColor: "#ffffff", p: 3, borderRadius: "6px"}}>
        <Box >
           <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"}, justifyContent: "space-between"}}>
           <Box><Typography sx={{fontSize: {lg: "36px", md: "36px", sm: "28px", xs: "26px"}, fontWeight: "400", color: "#354052"}}>{title}</Typography></Box>


            {codeTitle && 
            <Box sx={{display: "flex", alignItems: "center"}}>
            <Box><Typography sx={{fontSize: "18px", fontWeight: "400", color: "#354052",  }}>{codeTitle}</Typography></Box>
            <IconButton >
            <Box><ContentCopyIcon sx={{color: "#354052"}}/></Box>
              
            </IconButton>
        </Box>
            }


           </Box>


            <Typography sx={{fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"}, fontWeight: "400", color: "#1F2552", opacity: "80%", mt: "10px", lineHeight: "24px", width: codeTitle ? ({lg: "50%", md: "50%", sm: "50%", xs: "100%"}): ({lg: "80%", md: "80%", sm: "100%", xs: "100%"}) }}>{subTitle}</Typography>
        </Box>
        </Box>
    </div>
  )
}
