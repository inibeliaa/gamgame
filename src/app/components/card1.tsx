import Link from 'next/link'
import React from 'react'
import { Imprima } from 'next/font/google'
const imprima = Imprima({ subsets: ['latin'], weight: ['400'] });
import { Inknut_Antiqua } from 'next/font/google';
const inknut = Inknut_Antiqua({ subsets: ['latin'], weight: ['800'] });

function Card1({foto,genre1,judul,desc}:{foto:any, genre1:string, judul:string, desc:string}) {
  return (
   <div className='bg-[#A571C6] mt-10 w-[260px] rounded-b-xl'>
      <img src={foto} alt='foto'/>
      <div className='p-2'>
      <p className={`text-[#260A37] text-[10px] font-bold ${inknut.className}`}>Genre<span className="text-white ms-3">
              {genre1}</span></p>
      <p className="uppercase text-2xl font-extrabold">{judul}</p>
      <ul className="flex space-x-3">
              <li className="text-[18px] text-[#DCE013]">
              ★ ★ ★ ★ ★
              </li>
              <li className="text-[12px] my-[5px]">
               [12323 REVIEW]
              </li>
              <li className="my-[6px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C6.55576 5 3.53109 9.23425 2.45554 11.1164C2.23488 11.5025 2.12456 11.6956 2.1367 11.9836C2.14885 12.2716 2.27857 12.4598 2.53799 12.8362C3.8182 14.6935 7.29389 19 12 19C16.7061 19 20.1818 14.6935 21.462 12.8362C21.7214 12.4598 21.8511 12.2716 21.8633 11.9836C21.8754 11.6956 21.7651 11.5025 21.5445 11.1164C20.4689 9.23425 17.4442 5 12 5Z" stroke="white" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
              </li>
            </ul>
            <p  className={`text-[15px] ${imprima.className}`}>{desc}</p>
      <Link href='/detail'>
        <button className="text-[13px] h-[25px] w-[100px] mt-3 uppercase ms-[130px] font-extrabold bg-[#5B0292] rounded-lg">
                    Details
        </button>
      </Link>
      </div>
   </div>
  )
}

export default Card1