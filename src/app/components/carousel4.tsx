"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Card2 from "./card2";

export default function Carousel4() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[920px] mx-auto">
    <Slider {...settings}>
            <div className="ms-6">
            <Card2 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
            </Card2>
            </div>
            <div className="ms-6">
            <Card2 foto={'/Rectangle 17 (1).png'} genre1='single-Player, Action , Adventure' judul='MOCOLOID' desc='Complete missions and explore the city with your spider web'>
            </Card2>
            </div>
            <div className="ms-6">
            <Card2 foto={'/Rectangle 18 (1).png'} genre1='single-Player, Action , Adventure' judul='FORGED FANTASY' desc='Complete missions and explore the city with your spider web'>
            </Card2>
            </div>
    </Slider>
    </div>
  );
}