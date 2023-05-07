import React, { Component } from "react";
import Slider from "react-slick";
import NFTCard from "../../components/NFTCard";
import "./slider.css";

const CustomSlider = ({ FinestNFTResponse }) => {
  console.log("SliderRes", FinestNFTResponse);
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {FinestNFTResponse?.data &&
          FinestNFTResponse?.data?.map((v, i) => {
            return (
              <div>
                <NFTCard
                  title={v?.name}
                  image={v?.image}
                  price={v?.price}
                  type={v?.fileType}
                  style={{ display: "none" }}
                />
              </div>
            );
          })}

        <div>
          <NFTCard
            title="Skull NFT"
            image={"ozean_Images/Images/Background (6).png"}
            price="0.000032"
            style={{ display: "none" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
