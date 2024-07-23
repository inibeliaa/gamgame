import Image from 'next/image'
import React from 'react'

function Main() {
  return (
    <section id='home' className='h-screen'>
        <div>
            <Image className='mx-auto mt-[80px]' src='/Group4.png' alt='logo' width={450} height={240}/>
            <p className='text-center text-[21px] mt-5'>Welcome to the world of gaming, a world where you will <br/>
                explore extraordinary moments of <br/>
                enjoyment only on GAMGAME</p>
        </div>
    </section>
  )
}

export default Main