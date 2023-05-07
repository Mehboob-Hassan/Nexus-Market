import React, { Component } from "react";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";
import "./ChnTutorialSlider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#F9EBE7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        width: "73px",
        height: "360px",
        mb: "40px",
        right: "0.1rem",
        opacity: "80%",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ color: "#ffffff" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#F9EBE7",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        paddingLeft: "10px",
        borderRadius: "4px",
        width: "73px",
        height: "360px",
        left: "-40px",
        mb: "40px",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ color: "#ffffff" }} />
    </div>
  );
}

export const ChnTutorialSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    // variableWidth: true,
    nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box width="100%">
        <Slider
          {...settings}

          //  className="slickSliderStyles"
        >

      {/* <Grid container spacing={1} > */}
 
          {data.map((item) => {
            return (
              <>
                <div>
                  <Card className="container" sx={{backgroundColor: "#EBEAED",}}>
              <Grid xl={2} item lg={4} md={6} sm={12} xs={12} spacing={2} >
                    <Box
                      sx={{
                        // ml: "10px",
                        width: {
                          lg: "438px",
                          md: "438px",
                          sm: "100%",
                          xs: "100%",
                          height: {
                            lg: "350px",
                            md: "350px",
                            sm: "auto",
                            xs: "auto",
                          },
                        },
                      }}
                    >
                      <img src={item.image} alt="" width="100%" height="auto" />
                    </Box>
                    <Box sx={{ postion: "absolute" }}>
                      <Button
                        sx={{
                          left: {
                            xl: "30%",
                            lg: "55%",
                            md: "52%",
                            sm: "50%",
                            xs: "60%",
                          },
                          width: {
                            xl: "116px",
                            lg: "116px",
                            md: "116px",
                            sm: "100px",
                            xs: "90px",
                          },
                          height: {
                            xl: "34px",
                            lg: "34px",
                            md: "34px",
                            sm: "24px",
                            xs: "24px",
                          },
                          fontSize: {
                            xl: "14px",
                            lg: "14px",
                            md: "14px",
                            sm: "10px",
                            xs: "8px",
                          },
                        }}
                        variant="contained"
                        color="primary"
                        className="btn"
                      >
                        {item.btnTitle}
                      </Button>
                    </Box>
              </Grid>
                  </Card>
                </div>
              </>
            );
          })}
          {/* </Grid> */}
        </Slider>
      </Box>
    </div>
  );
};
