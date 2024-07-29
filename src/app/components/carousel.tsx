"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import prev from "../../../public/Group 8 (1).svg"
import nextt from "../../../public/Group 7 (1).svg"

function CustomArrows(){
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="w-[900px] mx-auto h-screen">
      <Slider
      ref={sliderRef}
       {...settings}>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
            <Link href='/buy'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                </Link>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <Link href='/detail'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
                </Link>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">  
                <Link href='/buy'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                </Link>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <Link href='/detail'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
                </Link>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
            <Link href='/buy'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                </Link>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <Link href='/detail'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
                </Link>
            </div>
          </div>
        </div>
        <div>
          <Image src='/game1.png' className="mt-[50px] mx-auto shadow-[0px_0px_40px_12px] shadow-[#CB76FF]" alt="game 1" width={700} height={100}/>
          <div>
            <p className="text-[70px] text-center font-extrabold -translate-y-[200px]">THE WARRIOR</p>
            <div className="flex space-x-[122px] -translate-y-[170px] translate-x-[200px]">
            <Link href='/buy'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">BUY NOW</p>
                </button>
                </Link>
                <p className="font-bold text-[16px] my-1">$60.00</p>
                <Link href='/detail'>
                <button className="bg-[#4F378B] w-[110px] rounded-lg p-2">
                    <p className="text-[13px] font-bold">DETAILS</p>
                </button>
                </Link>
            </div>
          </div>
        </div>
      </Slider>
      <div className="flex -translate-y-[350px]">
      <button className="-translate-x-16 me-4" onClick={previous}>
          <Image src={prev} width={80} height={80} alt="prev"/>
          </button>
          <button className="translate-x-[800px]" onClick={next}>
          <Image src={nextt} width={80} height={80} alt="next"/>
          </button>
      </div>
    </div>
  );
}

export default CustomArrows;
