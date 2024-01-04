import { Rowdies } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa6';


const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });
const Cm = () => {
  return (
    <div className=' bg-black relative h-screen pb-10'>
        <div className='p-10'><Link href='/'><div className='text-white text-xl cursor-pointer  w-fit bg-zinc-600/60 px-6 py-2 flex items-center gap-x-2'><FaArrowLeft />Back to Home</div></Link></div>
        <div className='flex items-center justify-center absolute h-[60vh] w-full bg-black'>
      <div style={rowdies.style} className='text-center text-[50px] lg:text-[90px] text-transparent bg-clip-text bg-gradient-to-r from-[#d66d75] animate-pulse to-[#ffc3a0]'>
        coming soon
      </div>
      </div>
    </div>
  )
}

export default Cm
