import React from 'react'
import Carousel2 from './carousel2'
import Card1 from './card1'

function Trending() {
  return (
    <div className='bg-[#260A37] pb-[100px]'>
        <p className='uppercase text-[28px] font-bold ms-[140px]'><span className='text-[#AB00E7]'>Tren</span>ding now!</p>
        <Carousel2/>
        <div className='flex justify-center gap-[49px] bg-gradient-to-b from-[#4B1D6700] to-[#5D2588] pb-24'>
            <Card1 foto={'/Rectangle 16.png'} genre1='single-Player, Action , Adventure' judul='SPIDERMAN 2' desc='Complete missions and explore the city with your spider web'>
            </Card1>
        <Card1 foto={'/Rectangle 17.png'} genre1='single-Player, Action , Adventure' judul='THE BATMAN'
         desc='DEFEAT BATMANS ENEMIES WITH ADVANCED TOOLS'>
        </Card1>
        <div className='me-3'>
        <Card1 foto={'/Rectangle 18.png'} genre1='single-Player, Action , Adventure' judul='JOKER MISSION' 
        desc='carry out a mission of revenge by eradicating useless heroes'>
        </Card1>
        </div>
        </div>
    </div>
  )
}

export default Trending