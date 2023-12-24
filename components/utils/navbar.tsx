import React from 'react'
import ThemeSwitch from './themeSwitch'
import Image from 'next/image'
import Logo from './logo'
import Hamburger from './hamburger'


const Navbar = () => {

  return (
    <div className='mt-3 lg:mt-0 z-10'>
      <div className='flex justify-between items-center px-4  lg:px-24 lg:pr-40 lg:dark:bg-zinc-900 lg:bg-opacity-100 lg:bg-zinc-200/40 '>
        <div>
          <Logo />
        </div>
        <div className=''>
        <div className='flex justify-start items-center lg:gap-8 gap-3 '>
            <ul className='lg:flex gap-11 justify-center items-center text-lg font-semibold hidden'> 
                <li>Services</li>
                <li>About</li>
                <li>Work</li>
                <li>Courses</li>
            </ul>
            <ThemeSwitch />
            <div className='lg:hidden block z-20 '><Hamburger /></div>
            <div className='px-8 font-bold bg-black  duration-300 dark:bg-white text-white dark:text-black py-3 rounded-md text-xl cursor-pointer hidden lg:block'><div className='hover:animate-rubberBand'>Let&apos;s Talk</div></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
