"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/Group 2.svg';
import login from '../../../public/Group 6.svg';

const Navbar = () => {
    const [scrollLocation, setScrollLocation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollLocation = window.scrollY;
            setScrollLocation(currentScrollLocation);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 z-20 w-full transition pb-5 duration-300 ease-in-out ${scrollLocation <= 550 ? 'bg-transparent' : 'bg-black bg-opacity-75'}`}>
            <ul className='flex justify-between'>
                <li className='mt-[15px] ps-[40px]'>
                    <Image src={logo} alt='logo' width={261} height={39} />
                </li>
                <li className='w-[800px] ms-[100px] flex uppercase mt-[25px]'>
                    <Link href='#'>
                        <p className='text-[16px] me-[39px] font-bold bg-gradient-to-b from-[#F2C0FF] to-[#AB00E7] inline-block text-transparent bg-clip-text'>Home</p>
                    </Link>
                    <Link href='#about'>
                        <p className='text-[16px] me-[39px] font-bold'>About Us</p>
                    </Link>
                    <Link href='#bestseller'>
                        <p className='text-[16px] me-[39px] font-bold'>Best Seller</p>
                    </Link>
                    <Link href='#favorite'>
                        <p className='text-[16px] me-[39px] font-bold'>Favorite</p>
                    </Link>
                    <Link href='#coming'>
                        <p className='text-[16px] font-bold'>Upcoming</p>
                    </Link>
                </li>
                <li className='mt-[20px] flex ms-[50px] me-[40px]'>
                    <Link href='/register'>
                        <button className='bg-gradient-to-b w-[85px] h-[32px] from-[#42166F] to-[#260A37] justify-center rounded-md me-[10px]'>
                            <p className=''>Register</p>
                        </button>
                    </Link>
                    <Link href='/login'>
                        <button className='bg-gradient-to-b w-[85px] h-[32px] from-[#9B03F8] to-[#42166F] justify-center rounded-md'>
                            <p className=''>Log in</p>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
