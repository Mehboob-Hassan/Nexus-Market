import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { YourTransactionBox } from "./components/YourTransactionBox";
import { ExchangePlatform } from "./components/ExchangePlatform";

export const Exchange = () => {
  return (
    <div>
      <Box
              sx={{
                backgroundColor: "#FFFFFF",
              }}
            >
      <Box sx={{ backgroundColor: "#F0F2F5", m: "0px", p: 3 }}>
        <YourTransactionBox />
      </Box>

      <Box sx={{ display: "flex", flexDirection: {lg: "row", md: "row", sm: "column", xs: "column"} }}>
        <Box width="100%" sx={{ backgroundColor: "#Ffffff", m: "0px", p: 3 }}>
          <ExchangePlatform />
        </Box>
        <Box width="100%" mt="40px" sx={{mb: {xl: "30px", lg: "10px", md: "10px", sm: "10px", xs: "10px"}}}>
          <Box width="100%" sx={{height:{xl: "auto", lg: "500px", md: "500px", sm: "500px", xs: "300px"}}}>
            <img
              src="./assets/adminPanel_Images/Exchanger image.png"
              alt=""
              width="100%"
              height="auto"
            />
          </Box>
        </Box>
      </Box>
      </Box>
    </div>
  );
};
