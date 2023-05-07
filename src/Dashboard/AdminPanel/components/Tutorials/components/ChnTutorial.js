import React from "react";
import Typography from "@mui/material/Typography";
import { ChnTutorialSlider } from "./ChnTutorialSlider";
import Box from "@mui/material/Box";

const SliderData = [
  {
    image: "./assets/adminPanel_Images/Exchanger image.png",
    btnTitle: "Play Now",
  },
  {
    image: "./assets/adminPanel_Images/Video thumb.png",
    btnTitle: "Play Now",
  },
  {
    image: "./assets/adminPanel_Images/Exchanger image.png",
    btnTitle: "Play Now",
  },
  {
    image: "./assets/adminPanel_Images/Exchanger image.png",
    btnTitle: "Play Now",
  },
  {
    image: "./assets/adminPanel_Images/Exchanger image.png",
    btnTitle: "Play Now",
  },
];

export const ChnTutorial = () => {
  return (
    <div width="100%">
      <Box sx={{ backgroundColor: "#EBEAED" }}>
        <Box>
        <Box
          sx={{
            paddingTop: "16px",
            paddingLeft: "16px",
            paddingBottom: "16px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#354052", fontSize: {lg: "22px", md: "22px", sm: "18px", xs: "18px"}, fontWeight: "400" }}
          >
            CHN Tutorials
          </Typography>
        </Box>

        <Box width="100%" sx={{
          overflowY:'hidden'
        }}>
          <ChnTutorialSlider data={SliderData} />
        </Box>
        </Box>



        <Box mt="30px">
        <Box
          sx={{
            paddingTop: "16px",
            paddingLeft: "16px",
            paddingBottom: "16px",
          }}
        >
          <Typography
            variant="body1"
            color="initial"
            sx={{ color: "#354052", fontSize: {lg: "22px", md: "22px", sm: "18px", xs: "18px"}, fontWeight: "400" }}
          >
            CHN Exchanger Tutorials
          </Typography>
        </Box>

        <Box width="100%" sx={{
          // border:'1px solid red',
          overflowY:'hidden'
        }}>
          <ChnTutorialSlider data={SliderData} />
        </Box>
        </Box>
      </Box>
    </div>
  );
};
