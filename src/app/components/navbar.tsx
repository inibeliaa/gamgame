import React from 'react'
import Image from 'next/image'
import logo from "../../../public/Group 2.svg"
import login from "../../../public/Group 6.svg"
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed top-0 z-20 w-full'>
        <ul className='flex justify-between'>
            <li className='mt-[27px] ps-[40px]'>
                <Image src={logo} alt='logo' width={261} height={39}/>
            </li>
            <li className='w-[800px] ms-[100px] flex uppercase mt-[35px] '>
                <Link href='#'>
                    <p className='text-[16px] me-[39px] font-bold bg-gradient-to-b 
                    from-[#F2C0FF] to-[#AB00E7] inline-block text-transparent bg-clip-text'>Home</p>
                </Link>
                <Link href='#about'>
                    <p className='text-[16px] me-[39px] font-bold'>About Us</p>
                </Link>
                <Link href='#bestseller'>
                    <p className='text-[16px] me-[39px] font-bold'>best seller</p>
                </Link>
                <Link href='#favorite'>
                    <p className='text-[16px] me-[39px] font-bold'>favorite</p>
                </Link>
                <Link href='#coming'>
                    <p className='text-[16px] font-bold'>up coming</p>
                </Link>
            </li>
            <li className='mt-[30px] flex ms-[50px] me-[40px]'>
                <button className='bg-gradient-to-b w-[85px] h-[32px] from-[#42166F] to-[#260A37] justify-center rounded-md me-[10px]'><p className=''>Regist</p></button>
                <button className='bg-gradient-to-b w-[85px] h-[32px] from-[#9B03F8] to-[#42166F] justify-center rounded-md'><p className=''>Log in</p></button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
