import React from 'react'
import icon1 from "../../../public/Ellipse 10.svg"
import Image from 'next/image'
import icon2 from "../../../public/Rectangle 41.svg"

function Review() {
  return (
    <div className='-translate-y-[90px]'>
      <div className='bg-[#5D2588] h-[100px] pt-[26px] ps-[30px]'>
          <p className='text-[35px] font-bold uppercase'><span className='text-[#CE7FFF]'>review</span> by players</p>
      </div>
      <div className='grid grid-cols-7 bg-[#260A37] pt-[90px] pb-[180px] px-[70px]'>
          <div className=' '>
              <Image src={icon1} alt='icon1' width={250} height={250}/>
              <p className='text-[20px] font-extrabold mt-[25px]'>@ USER 2323</p>
          </div>
          <div className='col-span-4 text-center text-[15px] ms-[100px] mt-[48px]'>
          <p>Lorem ipsum dolor sit amet. In illum veniam ut aperiam dolor et
          voluptate omnis qui veritatis dolorem et omnis doloribus et saepe 
          inventore? Et sequi officia rem soluta repudiandae et quia voluptatum 
          qui necessitatibus voluptatem.
          A doloribus perspiciatis et officiis quas aut consequuntur quod.</p>
          <p className='text-[#DCE013] mt-[13px]'>★ ★ ★ ★ ★</p>
          </div>
          <div className='col-span-2 ps-20 pt-[10px]'>
              <Image src={icon2} width={400} height={350} alt='icon2'/>
              <p className='text-[20px] font-extrabold mt-[25px] text-center'>ANDROID MJYU</p>
          </div>
      </div>
    </div>
  )
}

export default Review