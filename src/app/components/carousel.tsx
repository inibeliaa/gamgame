"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
 
function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  return (
    <div className="w-[900px] mx-auto h-screen ">
      <Slider {...settings}>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;
