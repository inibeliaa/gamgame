import React from 'react'
import Card3 from './card3'

function Best() {
  return (
    <div className='bg-[#260A37] pb-16 rounded-b-3xl -translate-y-[107px]'>
        <p className='uppercase text-[28px] font-bold pt-5 ms-[140px]'><span className='text-[#CE7FFF]'>Best</span> seller</p>
        <div className='mx-auto grid ms-[160px] grid-cols-3 me-[120px] '>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (1).png'} genre1='single-Player, Action , Adventure' judul='NINJA TUCHLE' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        </div>
    </div>
  )
}

export default Best