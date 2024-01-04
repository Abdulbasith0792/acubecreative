import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Link from 'next/link'

const NavDrop = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='flex flex-col items-center'>
      <div onClick={toggleMenu} className='  flex items-center gap-x-2'><div>Services</div><div className='mt-1'>{isOpen ?<FaAngleUp />:<FaAngleDown />}</div></div>
      {
        isOpen && (
            <div className=' transition ease-in-out duration-500'>
                 <ul className='flex flex-col gap-2 text-[22px] mt-3 bg-zinc-300/50 dark:bg-zinc-700/50 px-6 py-3 rounded-lg'>
                 <Link href='../../services/development'><li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Development <FaArrowRightLong /></li></Link>
           <Link href='../../services/digitalMarketing'> <li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Social Media Management <FaArrowRightLong /></li></Link>
           <Link href='../../services/socialMediaMarketing'><li className='flex gap-2 items-center hover:dark:text-orange-500 hover:text-blue-600'>Digital Marketing <FaArrowRightLong /></li></Link>
           
           </ul>
            </div>
        )}
    </div>
  )
}

export default NavDrop
