import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import "./IntroduceDialog.css"

export const IntroduceDialogSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <>
                <div>
                  <Box>
                    <Box width="100%" sx={{height:{lg: "340px", md: "340px", sm: "340px", xs: "auto"}}}>
                      <img
                        src={item.image}
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        pl: 3,
                        pr: 4,
                        pb: 3,
                        mt: {lg: "0px", md: "0px", sm: "0px", xs: "40px"}
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {lg: "22px", md: "22px", sm: "22px", xs: "18px"},
                          fontWeight: "400",
                          color: "#354052",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        mt="10px"
                        sx={{
                          fontSize: {lg: "14px", md: "14px", sm: "14px", xs: "10px"},
                          fontWeight: "400",
                          color: "#1F2552",
                          display: "flex",
                          textAlign: "center",
                          justifyContent: "center",
                          opacity: "80%",
                        }}
                      >
                        {item.subTitle}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </>
            );
          })}

          
        </Slider>
      </Box>
    </div>
  );
};
