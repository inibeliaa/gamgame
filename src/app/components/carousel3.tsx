"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import icon1 from "../../../public/Ellipse 10.svg";
import Image from 'next/image';
import icon2 from "../../../public/Rectangle 41.svg";
import { Imprima } from "next/font/google";
const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });

function Carousel3() {
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="h-screen bg-[#260A37] -translate-y-[129px] -z-50">
      <div className='bg-[#5D2588] h-[100px] pt-[38px] pb-4 ps-[30px]'>
        <p className='text-[35px] font-bold uppercase'><span className='text-[#CE7FFF]'>review</span> by players</p>
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
      >
        <div className="">
        <div className='grid grid-cols-7 pt-[90px] h-[450px] px-[70px]'>
          <div className=' '>
            <Image src={icon1} alt='icon1' width={250} height={250}/>
            <p className='text-[20px] font-extrabold mt-[25px]'>@ USER 2323</p>
          </div>
          <div className='col-span-4 text-center text-[19px] ms-[100px] mt-[48px]'>
          <p className={`${imprima.className}`}>
              Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et
              voluptate omnis qui veritatis dolorem et omnis doloribus et saepe 
              inventore? Et sequi officia rem soluta repudiandae et quia voluptatum 
              qui necessitatibus voluptatem.
            </p>
            <p className='text-[#DCE013] mt-[13px]'>★ ★ ★ ★ ★</p>
          </div>
          <div className='col-span-2 ps-20 pt-[10px]'>
            <Image src={icon2} width={400} height={350} alt='icon2'/>
            <p className='text-[20px] font-extrabold mt-[25px] text-center'>ANDROID MJYU</p>
          </div>
        </div>
        </div>
        <div>
        <div className='grid grid-cols-7 bg-[#260A37] pt-[90px] pb-[180px] px-[70px]'>
          <div className=' '>
            <Image src={icon1} alt='icon1' width={250} height={250}/>
            <p className='text-[20px] font-extrabold mt-[25px]'>@ USER 2323</p>
          </div>
          <div className='col-span-4 text-center text-[19px] ms-[100px] mt-[48px]'>
          <p className={`${imprima.className}`}>
              Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et
              voluptate omnis qui veritatis dolorem et omnis doloribus et saepe 
              inventore? Et sequi officia rem soluta repudiandae et quia voluptatum 
              qui necessitatibus voluptatem.
            </p>
            <p className='text-[#DCE013] mt-[13px]'>★ ★ ★ ★ ★</p>
          </div>
          <div className='col-span-2 ps-20 pt-[10px]'>
            <Image src={icon2} width={400} height={350} alt='icon2'/>
            <p className='text-[20px] font-extrabold mt-[25px] text-center'>ANDROID MJYU</p>
          </div>
        </div>
        </div>
        <div>
        <div className='grid grid-cols-7 bg-[#260A37] pt-[90px] pb-[180px] px-[70px]'>
          <div className=' '>
            <Image src={icon1} alt='icon1' width={250} height={250}/>
            <p className='text-[20px] font-extrabold mt-[25px]'>@ USER 2323</p>
          </div>
          <div className='col-span-4 text-center text-[19px] ms-[100px] mt-[48px]'>
          <p className={`${imprima.className}`}>
              Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et
              voluptate omnis qui veritatis dolorem et omnis doloribus et saepe 
              inventore? Et sequi officia rem soluta repudiandae et quia voluptatum 
              qui necessitatibus voluptatem.
            </p>
            <p className='text-[#DCE013] mt-[13px]'>★ ★ ★ ★ ★</p>
          </div>
          <div className='col-span-2 ps-20 pt-[10px]'>
            <Image src={icon2} width={400} height={350} alt='icon2'/>
            <p className='text-[20px] font-extrabold mt-[25px] text-center'>ANDROID MJYU</p>
          </div>
        </div>
        </div>
      </Slider>
        <div className="flex -translate-y-28 me-5 space-x-8 pb-28 justify-center">
          <button className="button bg-[#5D2588] p-1" onClick={previous}>
          <svg width="40" height="40" className="scale-x-[-1]" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.75 35L23.3333 21.5833L27.4167 17.5L44.9167 35L27.4167 52.5L23.3333 48.4167L36.75 35Z" fill="#FEF7FF"/>
            </svg>
          </button>
          <button className="button bg-[#5D2588] p-1" onClick={next}>
          <svg width="40" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.75 35L23.3333 21.5833L27.4167 17.5L44.9167 35L27.4167 52.5L23.3333 48.4167L36.75 35Z" fill="#FEF7FF"/>
            </svg>
          </button>
         </div>
    </div>
  );
}

export default Carousel3;
