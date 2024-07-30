import Navbar2 from '@/app/components/navbar2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import like from "../../../../public/Frame 14.svg"
import { Imprima } from 'next/font/google'
const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });

function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0000007f] via-transparent to-transparent">
      <Navbar2/>
      <Image
        src="/Rectangle 80.png"
        alt="Background"
        className="absolute inset-0 object-fill opacity-80 h-[680px] w-full" width={1200} height={700}
/> 
      <div className="absolute inset-0 bg-gradient-to-b h-[680px] from-black via-transparent to-[#5B0292] opacity-50"></div>
        <div className=' absolute inset-0 grid grid-cols-2'>
            <div className='mt-32 ms-28 '>
                <p className='text-xl uppercase font-bold'>details</p>
                <p className='text-[55px] uppercase font-bold'>victory</p>
                <div className='bg-black px-3 bg-opacity-40 w-[490px] h-[290px]'>
                    <p className='text-stroke font-semibold'>MADE BY : APCEX STUDIO WORLD GAME</p>
                    <p className={`text-[20px] ${imprima.className}`}>Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor
                         et voluptate omnis qui veritatis dolorem et omnis doloribus 
                         et saepe inventore? Et sequi officia rem soluta repudiandae 
                         et quia voluptatum qui necessitatibus voluptatem.
                         A doloribus perspiciatis et officiis quas aut consequuntur quod.</p>
                     <div className='ms-12 mt-6 flex space-x-16'>
                        <p> RELEASED </p>
                        <p> 15 DESEMBER 2025</p>
                    </div>
                </div>
                <div className=''>
                  <p className='font-extrabold text-lg ms-16 mt-10'>$65.00</p>
                  <Link href='/buy'>
                  <button className="h-[40px] w-[180px] mt-1 uppercase font-extrabold bg-[#AB00E769] bg-opacity-40 rounded-lg">
                        buy
                    </button>
                  </Link>
                </div>
            </div>
            <div className='mt-[170px] ms-[130px]'>
              <Image src='/Rectangle 81.png' width={400} height={200} alt='detail'/>
              <Image src={like} className='translate-x-[360px] -translate-y-10' width={45} height={45} alt='like'/>
            <ul className="flex space-x-6 ms-10 mt-4 -translate-y-10">
                <li className="text-[30px] text-[#DCE013]">
                ★ ★ ★ ★ ★
                </li>
                <li className="text-[16px] mt-3 my-[5px]">
                [12323 REVIEW]
                </li>
              </ul>
              <div className='flex w-[400px] space-y-3 space-x-4 -translate-y-10'>
                <button className="text-[13px] h-[25px] ms-7 my-3 w-[100px] uppercase font-bold bg-[#9838948C] rounded-lg">
                MEKANIC
                </button>
                <button className="text-[13px] h-[25px] w-[130px] uppercase font-bold bg-[#9838948C] rounded-lg">
                MULTY-PLAYER
                </button>
                <button className="text-[13px] h-[25px] w-[100px] uppercase font-bold bg-[#9838948C] rounded-lg">
                BATTLE
                </button>
                </div>
                <div className=' flex space-x-3 -translate-y-10'>
                <button className="text-[13px] h-[25px] w-[100px] uppercase font-bold bg-[#9838948C] rounded-lg">
                STORY
                </button>
                <button className="text-[13px] h-[25px] w-[100px] uppercase font-bold bg-[#9838948C] rounded-lg">
                SURvIVAL
                </button>
                <button className="text-[13px] h-[25px] w-[100px] uppercase font-bold bg-[#9838948C] rounded-lg">
                TEAM
                </button>
                </div>
              
            </div>
        </div>
    </div>
  );
}

export default Page;
