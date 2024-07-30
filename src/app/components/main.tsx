import Image from 'next/image'
import React from 'react'
import { Imprima } from 'next/font/google'

const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });
function Main() {
  return (
    <section id='home' className='h-screen'>
        <div>
            <Image className='mx-auto mt-[70px]' src='/Group4.png' alt='logo' width={450} height={240}/>
            <p className={`mt-5 text-[25px] text-center ${imprima.className}`}>Welcome to the world of gaming, a world where you will <br/>
                explore extraordinary moments of <br/>
                enjoyment only on GAMGAME</p>
        </div>
    </section>
  )
}

export default Main