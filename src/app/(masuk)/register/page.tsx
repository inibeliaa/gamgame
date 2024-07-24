import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/Group 2.svg"

function Page() {
  return (
    <div className='bg-gradient-to-b from-[#4D2067] to-[#9840CD] min-h-screen'>
    <Image src={logo} alt='logo' className='translate-y-[120px]' width={261} height={39}/>
        <div className='grid grid-cols-2 ms-14 py-12'>
            <div className='bg-[#74298E]'>

            </div>
            <div>
             <Image src="/Rectangle151.png" className="w-[505px] h-[600px]" width={200} height={200} alt='login'/>
            </div>
        </div>
    </div>
  )
}

export default Page