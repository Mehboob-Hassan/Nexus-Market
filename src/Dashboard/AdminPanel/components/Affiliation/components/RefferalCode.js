import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export const RefferalCode = () => {
    // fontSize: "", fontWeight: "", color: ""
  return (
    <div>
      <Box sx={{ backgroundColor: "#ffffff", p: 6, borderRadius: "6px",  }}>
        <Box sx={{justifyContent: "center", display: "flex"}}>
          <Typography sx={{fontSize: {lg: "22px", md: "22px", sm: "22px", xs: "18px"}, fontWeight: "400", color: "#354052"}}>Your Referral Code</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <IconButton>
            <Box  sx={{width: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}, height: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}}}>
              <img
                src="./assets/adminPanel_Images/Icons/fbIcon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </IconButton>
          <IconButton>
            <Box  sx={{width: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}, height: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}}}>
              <img
                src="./assets/adminPanel_Images/Icons/telegramIcon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </IconButton>

          <IconButton>
            <Box  sx={{width: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}, height: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}}}>
              <img
                src="./assets/adminPanel_Images/Icons/twitter.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </IconButton>
          <IconButton>
            <Box  sx={{width: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}, height: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}}}>
              <img
                src="./assets/adminPanel_Images/Icons/mixIcon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </IconButton>
          <IconButton>
            <Box  sx={{width: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}, height: {lg: "40px", md: "40px", sm: "40px", xs: "20px"}}}>
              <img
                src="./assets/adminPanel_Images/Icons/weChatIcon.svg"
                alt=""
                width="100%"
                height="auto"
              />
            </Box>
          </IconButton>
        </Box>

        <Box  sx={{justifyContent: "center", display: "flex", mt: "35px"}}>
          <Typography sx={{fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "12px"}, fontWeight: "400", color: "#1F2552", opacity: "80%", textAlign: "center"}}>
            Established fact that a reader will be distracted by the readable
            content of a page.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
