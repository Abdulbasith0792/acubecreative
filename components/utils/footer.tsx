import Image from 'next/image'
import React from 'react'
import Logo_Text from '../../public/assets/logos/logo_text_light.png'
import Logo_Text_Dark from '../../public/assets/logos/logo_text_dark.png'
import Link from 'next/link'
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='mb-10'>
      <div className='flex items-center flex-col justify-center gap-3 my-5'>
        <Image src={Logo_Text} height={100} width={200} alt='' className='h-16 lg:w-[10%] lg:h-[60px] w-[36%] dark:hidden block'/>
        <Image src={Logo_Text_Dark} height={100} width={200} alt='' className='h-16 lg:w-[10%] lg:h-[60px] w-[36%] dark:block hidden'/>
        <div >
        <ul className='flex justify-center gap-x-4 text-xl lg:text-lg my-1'>
            <li className='hover:scale-110'><Link href=''><LuFacebook /></Link></li>
            <li className='hover:scale-110'><Link href=''><FaInstagram /></Link></li>
            <li className='hover:scale-110'><Link href=''><SlSocialLinkedin /></Link></li>
            <li className='hover:scale-110'><Link href=''><IoLogoWhatsapp /></Link></li>
            <li className='hover:scale-110'><Link href=''><FaXTwitter /></Link></li>
        </ul>
      </div>
      <div className='hidden lg:block text-sm'>
        <div><span className=''>&#169;</span> AcubeCreative.</div>
        <div>All rights reserved 2024 </div>
      </div>
      </div>
    
    </div>
  )
}

export default Footer
