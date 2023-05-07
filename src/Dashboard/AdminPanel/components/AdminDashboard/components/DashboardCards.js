import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const DashboardCards = ({data, handleCard, activaCard}) => {
  
  return (
    <div>
        <Box onClick={handleCard} sx={{
            paddingLeft: {lg: "20px", md: "20px", sm: "20px", xs: "10px"},
            paddingRight: {lg: "20px", md: "20px", sm: "20px", xs: "10px"},
            paddingTop: {lg: "20px", md: "20px", sm: "20px", xs: "10px"},
            paddingBottom: "16px",
            backgroundColor: "#ffffff",
            border: "1.43px solid #E6EAEE",
            borderRadius: "6px",
            height: {lg: "auto", md: "auto", sm: "auto", xs: "100px"}
        }}>
        <Box>
          <Typography 
          sx={{
            fontSize: {lg: "22px", md: "22px", sm: "18px", xs: "14px"},
            fontWeight: activaCard ? "500" : "400",
            color: "#354052"
          }}
          >
            {data.title}
          </Typography>
        </Box>

        <Box sx={{display: "flex", flexDirection: {lg: "row", md: "row", sm: "row", xs: "column"}, justifyContent: {lg: "space-between", md: "space-between", sm: "space-between", xs: "none"}, mt: "16px", alignContent: 'flex-end'}}>
          <Typography 
          sx={{
            fontSize: {lg: "16px", md: "16px", sm: "14px", xs: "12px"},
            fontWeight: activaCard ? "500" : "400",
            color: "#354052"
          }}
          >
            {data.price}
          </Typography>
          <Typography 
          sx={{fontSize: {lg: "16px", md: "16px", sm: "14px", xs: "12px"}, fontWeight: activaCard ? "500" : "400", color: `${data.subTitleColor}`}}
          >
            {data.subTitle}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
