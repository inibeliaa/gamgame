"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Card2 from "./card2";
import Image from "next/image";
import prev from "../../../public/Group 8 (1).svg"
import nextt from "../../../public/Group 7 (1).svg"

export default function Carousel4() {
  const sliderRef = useRef<Slider>(null); // Specify the type of useRef as Slider

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Access slickNext() via current
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Access slickPrev() via current
    }
  };
  var settings = {
    dots:true,
    customPaging: () => <div className="customDot2" />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="w-[920px] mx-auto">
    <Slider 
    ref={sliderRef}
    {...settings}>
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
    <div className="flex -translate-y-[190px]">
      <button className="-translate-x-[70px]" onClick={previous}>
          <Image src={prev} width={60} height={60} alt="prev"/>
          </button>
          <button className="translate-x-[870px]" onClick={next}>
          <Image src={nextt} width={60} height={60} alt="next"/>
          </button>
      </div>
    </div>
  );
}