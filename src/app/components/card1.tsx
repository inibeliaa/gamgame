import React from 'react'

function Card1({foto,children}:{foto:any,children:string}) {
  return (
    <div className='grid grid-cols-2'>
        <img src={foto} width={500} height={280} className='rounded-s-lg'/>
        <div className='w-[500px] h-[280px] bg-[#A571C6]'>
            {children}
        </div>
    </div>
  )
}

export default Card1