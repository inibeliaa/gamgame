import Navbar2 from '@/app/components/navbar2';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0000007f] via-transparent to-transparent">
      <Navbar2/>
      <Image
        src="/Rectangle 80.png"
        alt="Background"
        className="absolute inset-0 object-fill opacity-80 h-[680px] w-full" width={1200} height={700}
      />
      <div className="absolute inset-0 bg-gradient-to-b h-[680px] from-transparent via-transparent to-[#5B0292] bg-blend-hard-light">
        <div className='grid grid-cols-2'>
            <div className='mt-32 ms-28 '>
                <p className='text-xl uppercase font-bold'>details</p>
                <p className='text-[55px] uppercase font-bold'>victory</p>
                <div className='bg-black px-3 bg-opacity-40 w-[380px] h-[290px]'>
                    <p>MADE BY : APCEX STUDIO WORLD GAME</p>
                    <p className='text-[18px]'>Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor
                         et voluptate omnis qui veritatis dolorem et omnis doloribus 
                         et saepe inventore? Et sequi officia rem soluta repudiandae 
                         et quia voluptatum qui necessitatibus voluptatem.
                         A doloribus perspiciatis et officiis quas aut consequuntur quod.</p>
                     <div className='ms-10 text-sm mt-6 flex space-x-6'>
                        <p> RELEASED </p>
                        <p> 15 DESEMBER 2025</p>
                    </div>
                </div>
                <div className=''>
                  <p className='font-extrabold text-lg ms-16 mt-12'>$65.00</p>
                  <button className="h-[40px] w-[180px] mt-1 uppercase font-extrabold bg-[#AB00E769] bg-opacity-40 rounded-lg">
                        buy
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
