import React from 'react'
import Card3 from './card3'

function Best() {
  return (
    <div id='bestseller' className='bg-[#260A37] pb-16 rounded-b-2xl -translate-y-[107px] relative z-10'>
        <p className='uppercase text-[28px] font-bold pt-5 ms-[140px]'><span className='text-[#CE7FFF]'>Best</span> seller</p>
        <div className='mx-auto grid ms-[160px] grid-cols-3 me-[120px] '>
        <Card3 foto={'/Rectangle 16 (2).png'} genre1='single-Player, Action , Adventure' judul='CUHMB NURO' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 17 (2).png'} genre1='single-Player, Action , Adventure' judul='VICTORY ST' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 18 (2).png'} genre1='single-Player, Action , Adventure' judul='BIGBANG JAM' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 16 (3).png'} genre1='single-Player, Action , Adventure' judul='APEX LEGEND' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 17 (3).png'} genre1='single-Player, Action , Adventure' judul='KRU ROAD OF T' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        <Card3 foto={'/Rectangle 18 (3).png'} genre1='single-Player, Action , Adventure' judul='OFFLINE WAR M.O' desc='Complete missions and explore the city with your spider web'>
        </Card3>
        </div>
    </div>
  )
}

export default Best