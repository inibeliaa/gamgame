import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/Group 2.svg"
import Link from 'next/link'

function Page() {
  return (
    <div className='bg-gradient-to-b from-[#4D2067] to-[#9840CD] w-screen min-h-screen'>
      <div className='bg-black blur-md bg-opacity-25 w-[860px] translate-x-12'></div>
      <div className=' relative'>
      <Image src={logo} alt='logo' className='absolute top-[40px] translate-x-[180px] z-10 left-0' width={140} height={39}/>
          <div className='grid grid-cols-2 pt-[40px] pb-[40px] '>
          <div className='ms-auto'>
              <Image src="/Rectangle151.jpg" className="w-[440px] scale-x-[-1] h-[530px] shadow-[-20px_20px_5px] shadow-[#00000052]" width={400} height={200} alt='login'/>
              </div>
              <div className='bg-[#FFFFFF] w-[430px] shadow-[21px_20px_5px] z-10 shadow-[#00000052]'>
                <div className='mx-16 my-16 space-y-5'>
                 <p className='font-bold uppercase text-[#AB00E7] text-[18px]'>Register</p>
                 <div>
                      <input type='text' 
                                name='name'
                                placeholder='Name'
                                className="w-full rounded-md h-[45px] bg-[#ECECEC] placeholder:text-[#AB00E7] text-[#AB00E7] text-[10px] pb-6 ps-3 uppercase" />                        
                      </div>
                      <div>
                      <input type='email' 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md h-[45px] bg-[#ECECEC] placeholder:text-[#AB00E7] text-[#AB00E7] text-[10px] pb-6 ps-3 uppercase" />                        
                      </div>
                    <div>
                      <input type='tel' 
                                name='telephone'
                                placeholder='no telepon'
                                className="w-full rounded-md h-[45px] bg-[#ECECEC] text-[10px] pb-6 ps-3 uppercase text-[#AB00E7] placeholder:text-[#AB00E7]" />                        
                      </div>
                    <div className='flex space-x-3'>
                    <div>
                      <input type='password' 
                                name='password'
                                placeholder='password'
                                className="w-full rounded-md h-[45px] bg-[#ECECEC] text-[10px] pb-6 ps-3 uppercase text-[#AB00E7] placeholder:text-[#AB00E7]" />                        
                      </div>
                      <div>
                      <input type='password' 
                                name='password'
                                placeholder='confirm password'
                                className="w-full rounded-md h-[45px] bg-[#ECECEC] pb-6 ps-3 uppercase text-[#AB00E7] placeholder:text-[#AB00E7] placeholder:text-[10px]" />                        
                      </div>
                    </div>
                    <div className='mx-4 space-y-56 space-x-[84px]'>
                      <Link href='/login'>
                        <button className='bg-[#AB00E7] ms-17 h-[35px] w-[90px] text-[10px] rounded-md font-bold items-center'>
                          REGISTER
                        </button>
                      </Link>
                      <Link href='/login'>
                        <button className='bg-white border-[1.5px] h-[35px] w-[90px] text-[10px] text-[#AB00E7] rounded-md font-bold items-center'>
                          LOGIN
                        </button>
                      </Link>
                    </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Page