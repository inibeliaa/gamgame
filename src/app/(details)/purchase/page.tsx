import Navbar2 from '@/app/components/navbar2'
import React from 'react'
import Image from 'next/image'
import like from "../../../../public/Frame 14.svg"

function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0000007f] via-transparent to-transparent">
      <Navbar2/>
      <Image
        src="/Rectangle 80.png"
        alt="Background"
        className="absolute inset-0 object-fill opacity-80 h-[680px] w-full" width={1200} height={700}
/> 
        <div className="absolute inset-0 bg-gradient-to-b h-[680px] from-black via-transparent to-[#5B0292] opacity-75"></div>
        <div className='justify-center items-center absolute inset-0 flex'>

        <div className='mt-[120px]'>
                <p className='text-[55px] uppercase font-bold'>victory</p>
                <p className='-translate-y-4'>MADE BY : APCEX STUDIO WORLD GAME</p>
                <div className=''>
              <Image src='/Rectangle 81.png' width={390} height={200} alt='detail'/>
              <div className='flex -translate-y-10'>
              <p className='font-extrabold text-3xl ms-4'>$65.00</p>
              <Image src={like} className='translate-x-[220px]' width={45} height={45} alt='like'/>
              </div>
                <ul className="flex space-x-6 ms-10 mt-4 -translate-y-12">
                <li className="text-[30px] text-[#DCE013]">
                ★ ★ ★ ★ ★
                </li>
                <li className="text-[16px] mt-3 my-[5px]">
                [12323 REVIEW]
                </li>
                </ul>
                <div className='flex w-[400px] space-y-3 space-x-4 -translate-y-12'>
                    <button className="text-[13px] h-[25px] ms-7 my-3 w-[100px] uppercase  bg-[#9838948C] rounded-lg">
                    MEKANIC
                    </button>
                    <button className="text-[13px] h-[25px] w-[130px] uppercase  bg-[#9838948C] rounded-lg">
                    MULTY-PLAYER
                    </button>
                    <button className="text-[13px] h-[25px] w-[100px] uppercase  bg-[#9838948C] rounded-lg">
                    horor
                    </button>
                    </div>
                    <div className=' flex space-x-3 -translate-y-12'>
                    <button className="text-[13px] h-[25px] w-[100px] uppercase  bg-[#9838948C] rounded-lg">
                    STORY
                    </button>
                    <button className="text-[13px] h-[25px] w-[100px] uppercase  bg-[#9838948C] rounded-lg">
                    SURvIVAL
                    </button>
                    </div>
            </div>
       </div>
        </div>
    </div>
  )
}

export default Page