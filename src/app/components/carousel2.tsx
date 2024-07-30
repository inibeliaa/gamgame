"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import heart from "../../../public/Group 23.svg"
import Link from "next/link";
import prev from "../../../public/Group 8 (1).svg"
import nextt from "../../../public/Group 7 (1).svg"
import { Imprima } from "next/font/google";
const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });
function Carousel2() {
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="w-[900px] mt-[10px] mx-auto">
      <Slider 
      ref={sliderRef}
      {...settings}>
        <div className="ms-2">
        <div className="grid grid-cols-2">
          <Image src='/Rectangle15.png' className='' width={450} height={250} alt="war"/>
          <div className="bg-[#A571C4] w-[452px] space-y-1 py-2 px-5 rounded-e-lg -translate-x-4">
              <div className="relative">
              <Image src={heart} className='absolute right-0' width={70} height={70} alt='heart'/>
              </div>
            <p className="text-[#260A37] text-sm font-bold">Genre<span className="text-white ms-3">
              Multy-Player, Action , Adventure</span></p>
            <p className="uppercase text-2xl font-extrabold">war of sparta</p>
            <ul className="flex space-x-3">
              <li className="text-[18px] text-[#DCE013]">
              ★ ★ ★ ★ ★
              </li>
              <li className="text-[12px] my-[5px]">
               [12323 REVIEW]
              </li>
              <li className="my-[6px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              </li>
            </ul>
            <p className={`text-[16.5px] me-[80px] ${imprima.className}`}>A game that tells the story of the war in the era
               of kingdoms, fighting over the land of power 
              and being the one in power in this game</p>
              <div className="flex space-x-9 ms-2">
              <Link href='/buy'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  buy now
                </button>
                </Link>
                <Link href='/detail'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  Details
                </button>
                </Link>
                <p className="font-extrabold text-2xl mt-1 ps-6">$50.00</p>
              </div>
         </div>
        </div>
        </div>
        <div className="ms-2">
        <div className="grid grid-cols-2">
          <Image src='/Rectangle15.png' className='' width={450} height={250} alt="war"/>
          <div className="bg-[#A571C4] w-[452px] space-y-1 py-2 px-5 rounded-e-lg -translate-x-4">
              <div className="relative">
              <Image src={heart} className='absolute right-0' width={70} height={70} alt='heart'/>
              </div>
            <p className="text-[#260A37] text-sm font-bold">Genre<span className="text-white ms-3">
              Multy-Player, Action , Adventure</span></p>
            <p className="uppercase text-2xl font-extrabold">war of sparta</p>
            <ul className="flex space-x-3">
              <li className="text-[18px] text-[#DCE013]">
              ★ ★ ★ ★ ★
              </li>
              <li className="text-[12px] my-[5px]">
               [12323 REVIEW]
              </li>
              <li className="my-[6px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              </li>
            </ul>
            <p className={`text-[16.5px] me-[80px] ${imprima.className}`}>A game that tells the story of the war in the era
               of kingdoms, fighting over the land of power 
              and being the one in power in this game</p>
              <div className="flex space-x-9 ms-2">
              <Link href='/buy'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  buy now
                </button>
                </Link>
                <Link href='/detail'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  Details
                </button>
                </Link>
                <p className="font-extrabold text-2xl mt-1 ps-6">$50.00</p>
              </div>
         </div>
        </div>
        </div>
        <div className="ms-2">
        <div className="grid grid-cols-2">
          <Image src='/Rectangle15.png' className='' width={450} height={250} alt="war"/>
          <div className="bg-[#A571C4] w-[452px] space-y-1 py-2 px-5 rounded-e-lg -translate-x-4">
              <div className="relative">
              <Image src={heart} className='absolute right-0' width={70} height={70} alt='heart'/>
              </div>
            <p className="text-[#260A37] text-sm font-bold">Genre<span className="text-white ms-3">
              Multy-Player, Action , Adventure</span></p>
            <p className="uppercase text-2xl font-extrabold">war of sparta</p>
            <ul className="flex space-x-3">
              <li className="text-[18px] text-[#DCE013]">
              ★ ★ ★ ★ ★
              </li>
              <li className="text-[12px] my-[5px]">
               [12323 REVIEW]
              </li>
              <li className="my-[6px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              </li>
            </ul>
            <p className={`text-[16.5px] me-[80px] ${imprima.className}`}>A game that tells the story of the war in the era
               of kingdoms, fighting over the land of power 
              and being the one in power in this game</p>
              <div className="flex space-x-9 ms-2">
              <Link href='/buy'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  buy now
                </button>
                </Link>
                <Link href='/detail'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  Details
                </button>
                </Link>
                <p className="font-extrabold text-2xl mt-1 ps-6">$50.00</p>
              </div>
         </div>
        </div>
        </div>
        <div className="ms-2">
        <div className="grid grid-cols-2">
          <Image src='/Rectangle15.png' className='' width={450} height={250} alt="war"/>
          <div className="bg-[#A571C4] w-[452px] space-y-1 py-2 px-5 rounded-e-lg -translate-x-4">
              <div className="relative">
              <Image src={heart} className='absolute right-0' width={70} height={70} alt='heart'/>
              </div>
            <p className="text-[#260A37] text-sm font-bold">Genre<span className="text-white ms-3">
              Multy-Player, Action , Adventure</span></p>
            <p className="uppercase text-2xl font-extrabold">war of sparta</p>
            <ul className="flex space-x-3">
              <li className="text-[18px] text-[#DCE013]">
              ★ ★ ★ ★ ★
              </li>
              <li className="text-[12px] my-[5px]">
               [12323 REVIEW]
              </li>
              <li className="my-[6px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              </li>
            </ul>
            <p className={`text-[16.5px] me-[80px] ${imprima.className}`}>A game that tells the story of the war in the era
               of kingdoms, fighting over the land of power 
              and being the one in power in this game</p>
              <div className="flex space-x-9 ms-2">
              <Link href='/buy'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  buy now
                </button>
                </Link>
                <Link href='/detail'>
                <button className="text-[13px] h-[25px] w-[100px] mt-2 uppercase font-extrabold bg-[#5B0292] rounded-lg">
                  Details
                </button>
                </Link>
                <p className="font-extrabold text-2xl mt-1 ps-6">$50.00</p>
              </div>
         </div>
        </div>
        </div>
      </Slider>
      <div className="flex -translate-y-[155px]">
      <button className="-translate-x-[70px]" onClick={previous}>
          <Image src={prev} width={60} height={60} alt="prev"/>
          </button>
          <button className="translate-x-[850px]" onClick={next}>
          <Image src={nextt} width={60} height={60} alt="next"/>
          </button>
      </div>
    </div>
  );
}

export default Carousel2;
