"use client"
import React, { useEffect, useState } from 'react'
import ThemeSwitch from './themeSwitch'
import Image from 'next/image'
import Logo from './logo'
import Hamburger from './hamburger'
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link'
import Learn from '@/app/learn/page'

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showDiv, setShowDiv] = useState(false)

  useEffect(() => {
    const handleSroll = () => {
      setShowDiv(window.scrollY !== 0);
    }
    window.addEventListener('scroll', handleSroll);

    return () => {
      window.removeEventListener('scroll', handleSroll)
    }
  }, []);

  return (
    <div className='mt-3 lg:mt-0  lg:h-[25vh]  sticky top-0 z-30 '>
      <div className='flex justify-between items-center px-4 bg-white dark:bg-black lg:px-24 lg:pr-40 lg:dark:bg-black lg:bg-opacity-100 lg:bg-zinc-100 '>
        <div>
          <Link href='/'><Logo /></Link>
        </div>
        <div className=''>
        <div className='flex justify-start items-center lg:gap-8 gap-3 '>
            <ul className='lg:flex gap-11 justify-center items-center text-lg font-semibold hidden '> 
                <li className='relative group py-2 hover:transition-all   cursor-pointer '><div  onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} className='flex hover:dark:text-orange-500 hover:text-blue-600 hover:transition hover:duration-300 hover:ease-in-out justify-center items-center gap-1'>Services {isHovered  ? (<IoIosArrowDown />) :(<GoDotFill />)} </div> <div className="hidden  group-hover:block absolute my-2 shadow-md p-4 w-[275px] bg-white dark:bg-zinc-900 rounded-md">
           <ul className='flex flex-col gap-4'>
           <Link href='../../services/development'><li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Development <FaArrowRightLong /></li></Link>
           <Link href='../../services/digitalMarketing'> <li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Social Media Management <FaArrowRightLong /></li></Link>
           <Link href='../../services/socialMediaMarketing'><li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Digital Marketing <FaArrowRightLong /></li></Link>
         
           </ul>
          </div></li>
                <li className='cursor-pointer hover:dark:text-orange-500 hover:text-blue-600 hover:transition hover:duration-300 hover:ease-in-out'>About</li>
                <li className='cursor-pointer hover:dark:text-orange-500 hover:text-blue-600 hover:transition hover:duration-300 hover:ease-in-out'>Work</li>
                <Link href='/learn'><li className='cursor-pointer hover:dark:text-orange-500 hover:text-blue-600 hover:transition hover:duration-300 hover:ease-in-out'>Learn</li></Link>
            </ul>
            <ThemeSwitch />
            <div className='lg:hidden block  '><Hamburger /></div>
            <div className='px-8 font-bold bg-black  duration-300 dark:bg-white text-white dark:text-black py-3 rounded-md text-xl cursor-pointer hidden lg:block'><div className='hover:animate-rubberBand'>Let&apos;s Talk</div></div>
        </div>
        </div>
      </div>
      {showDiv && (
      <div className='flex justify-center'>
      <div className='lg:dark:mx-20 h-[0.75px] bg-black  dark:bg-white w-full ' />
      </div>
      )}
    </div>
  )
}

export default Navbar
