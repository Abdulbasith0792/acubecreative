"use client"
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='mt-1'>
      <button onClick={toggleMenu}>
    <span className='text-4xl '><HiOutlineMenuAlt1 /></span>
      </button>
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-screen'>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-screen w-full  -translate-y-1/2 bg-zinc-200 dark:bg-zinc-900 p-4">
  <button onClick={toggleMenu}>
    <span className='text-4xl right-5  absolute'><RxCross2 /></span>
      </button>
      <ul className='flex flex-col gap-11 justify-center items-center text-2xl mt-28 font-semibold '> 
                <li>Services</li>
                <li>About</li>
                <li>Work</li>
                <li>Courses</li>
            
           <li><div className='px-8 font-bold bg-black  duration-300 dark:bg-white text-white dark:text-black py-3 rounded-md text-xl cursor-pointer w-fit'><div className='hover:animate-rubberBand'>Let&apos;s Talk</div></div>
           </li>  </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hamburger
