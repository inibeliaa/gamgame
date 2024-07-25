import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/Group 2.svg"
import Link from 'next/link'

function Page() {
  return (
    <div className='bg-gradient-to-b from-[#4D2067] to-[#9840CD] w-screen min-h-screen'>
      <div className='bg-black blur-md bg-opacity-25 w-[860px] translate-x-12'></div>
      <div className=' relative'>
      <Image src={logo} alt='logo' className='absolute top-[40px] -translate-x-[170px] right-0' width={140} height={39}/>
          <div className='grid grid-cols-2 pt-[40px] pb-[40px] '>
              <div className='bg-[#74298E] w-[430px] ms-auto shadow-[21px_20px_5px] shadow-[#00000052]'>
                <div className='flex flex-col mx-16 my-16 space-y-5'>
                 <div className='space-y-9'>
                 <p className='font-bold uppercase text-[18px]'>Login</p>
                 <div>
                      <input type='email' 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md h-[45px] placeholder:text-[#AB00E7] text-[10px] pb-6 ps-3 uppercase" />                        
                      </div>
                <div>
                      <input type='password' 
                                name='password'
                                placeholder='password'
                                className="w-full rounded-md h-[45px]  text-[10px] pb-6 ps-3 uppercase placeholder:text-[#AB00E7]" />                        
                      </div>
                    </div>
                  <div className='flex space-x-2'>
                      <input
                        type='checkbox'
                        id='remember'
                        className='appearance-none h-4 w-4 rounded-full bg-[#D9D9D9] checked:bg-[#c866ecdd]'
                      />
                      <label htmlFor='remember' className='text-white uppercase text-[10px] pt-[2px]'>Remember me</label>
                    </div>
                    <div className='space-x-24 ms-3 space-y-16'>
                      <Link href='/register'>
                      <button className='bg-white h-[35px] w-[90px] text-[10px] rounded-md font-bold items-center text-[#AB00E7]'>
                        REGISTER
                      </button>
                      </Link>
                      <Link href='/'>
                      <button className='bg-[#AB00E7] h-[35px] w-[90px] text-[10px] rounded-md font-bold items-center'>
                        LOGIN
                      </button>
                      </Link>
                    </div>
                    <p className='text-[10px] ms-5 -translate-y-4'>IF FIRST TIME</p>
                </div>
              </div>
              <div className=''>
              <Image src="/Rectangle151.jpg" className="w-[440px] h-[530px] shadow-[20px_20px_5px] shadow-[#00000052]" width={400} height={200} alt='login'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Page