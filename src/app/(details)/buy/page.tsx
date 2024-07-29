import Navbar2 from '@/app/components/navbar2'
import React from 'react'
import Image from 'next/image'
import pay1 from "../../../../public/Rectangle 87.svg"
import pay2 from "../../../../public/Rectangle 88.svg"
import pay3 from "../../../../public/Rectangle 89.svg"
import pay4 from "../../../../public/Rectangle 90.svg"
import Link from 'next/link'
import like from "../../../../public/Frame 14.svg"

function Page() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#0000007f] via-transparent to-transparent">
      <Navbar2/>
      <Image
        src="/Rectangle 80.png"
        alt="Background"
        className="absolute inset-0 object-fill opacity-80 h-[690px] w-full" width={1200} height={700}
/> 
       <div className="absolute inset-0 bg-gradient-to-b h-[690px] from-black via-transparent to-[#5B0292] opacity-50"></div>
       <div className='absolute inset-0 grid grid-cols-2'>
       <div className='mt-[120px] ms-28'>
                <p className='text-[55px] uppercase font-bold'>victory</p>
                <p className='-translate-y-4'>MADE BY : APCEX STUDIO WORLD GAME</p>
                <p className='font-extrabold text-lg -translate-y-3 ms-[330px]'>$65.00</p>
                <div className=''>
              <Image src='/Rectangle 81.png' width={390} height={200} alt='detail'/>
              <Image src={like} className='translate-x-[350px] -translate-y-10' width={45} height={45} alt='like'/>
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
        <div className='bg-black px-3 mt-[120px] bg-opacity-40 ms-10 w-[430px] h-[500px]'>
            <p className='text-[28px] mt-4 mx-4 font-bold'>PAYMENT METHOD</p>
            <div className='flex flex-col space-y-7 mt-10 items-center'>
            <Image src={pay1} alt='pay' width={200} height={100}/>
            <Image src={pay2} alt='pay' width={200} height={100}/>
            <Image src={pay3} alt='pay' width={200} height={100}/>
            <Link href='/purchase'>
            <Image src={pay4} alt='pay' width={200} height={100}/>
            </Link>
            <p className='font-extrabold text-[40px]'>$65.00</p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Page