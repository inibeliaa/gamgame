import Image from 'next/image'
import React from 'react'
import footer from "../../../public/Rectangle 62.svg"
import sosmed1 from "../../../public/Rectangle 50.svg"
import sosmed2 from "../../../public/Rectangle 51.svg"
import sosmed3 from "../../../public/Rectangle 52.svg"
import sosmed4 from "../../../public/Rectangle 53.svg"
import apk1 from "../../../public/Group 121.svg"
import apk2 from "../../../public/Group 122.svg"
import apk3 from "../../../public/Group 123.svg"
import apk4 from "../../../public/Group 124.svg"
import { Imprima } from 'next/font/google'
const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });

function Footer() {
  return (
    <footer className='min-h-screen bg-gradient-to-b from-[#260A37] to-[#5D2588] -translate-y-[130px]'>
        <Image src={footer} width={1000} height={200} className='w-screen' alt='footer'/>
        <div className='grid grid-cols-2 h-[500px]' id='about'>
            <div className='my-14 mx-12 justify-center'>
                <p className='text-[30px] font-extrabold text-center'><span className='text-[#CE7FFF]'>ABOUT</span><br/><span className='text-[#AB00E7]'>GAM</span>GAME</p>
                <p className={`text-center text-lg mt-6 ${imprima.className}`}>Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et voluptate omnis qui veritatis dolorem et omnis doloribus et saepe inventore? Et
                     sequi officia rem soluta repudiandae et quia voluptatum qui necessitatibus voluptatem. A doloribus perspiciatis et officiis quas aut consequuntur quod.</p>
                    <div className='flex mt-[60px] ms-[105px] space-x-6'>
                    <Image src={sosmed1} className='' alt='sosmed' width={60} height={40}/>
                    <Image src={sosmed2} alt='sosmed' width={60} height={40}/>
                    <Image src={sosmed3} alt='sosmed' width={60} height={40}/>
                    <Image src={sosmed4} alt='sosmed' width={60} height={40}/>
                    </div>
                </div>
                <div className='my-14'>
                    <p className='text-[35px] font-extrabold text-center mt-5'><span className='text-[#CE7FFF]'>APPS </span>& PLATFORM</p>
                    <div className='grid grid-cols-2 mt-[100px] ms-36 gap-x-7 gap-y-7'>
                      <Image src={apk1} alt='apk' width={90} height={50} />
                      <Image src={apk2} alt='apk' width={90} height={50} />
                      <Image src={apk3} alt='apk' width={90} height={50} />
                      <Image src={apk4} alt='apk' width={90} height={50} />
                    </div>
                </div>
        </div>
    </footer>
  )
}

export default Footer