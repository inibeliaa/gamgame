import React from 'react';
import Image from 'next/image';
import logo from "../../../public/Group 2.svg";
import Link from 'next/link';

function Navbar2() {
  return (
      <div className='bg-gradient-to-b h-[250px] from-black to-transparent'>
            <nav className='fixed top-0 z-20 w-full p-6'>
            <ul className='flex justify-between items-center px-8'>
                <li>
                <Image src={logo} alt='logo' width={200} height={39} />
                </li>
                <li className='flex space-x-10 pe-24'>
                <Link href='../'>
                    <p className='text-[16px] font-bold bg-gradient-to-b from-[#F2C0FF] to-[#AB00E7] text-transparent bg-clip-text'>
                    Home
                    </p>
                </Link>
                <Link href='#'>
                    <p className='text-[16px] font-bold'>
                    Another Game
                    </p>
                </Link>
                </li>
            </ul>
             </nav>
        </div>
  );
}

export default Navbar2;
