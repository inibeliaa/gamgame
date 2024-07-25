import React from 'react'
import Image from 'next/image'

function Live() {
  return (
    <div className='h-screen bg-gradient-to-b flex flex-col items-center justify-center from-[#5D2588] via-[#5D2588] to-[#260A37]'>
        <p className='bg-[#EE0202] py-[6px] mt-14 w-[170px] text-center font-extrabold rounded-xl'>LIVE NOW !</p>
        <Image src='/Rectangle 39.png' className='mt-6 shadow-[0px_0px_16px_15px] shadow-[#0000009c] rounded-3xl' width={800} height={600} alt='live'/>
        <svg width="140" height="120" className='-translate-y-60' viewBox="0 0 175 169" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.4583 21.125L138.542 84.5L36.4583 147.875V21.125Z" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  )
}

export default Live