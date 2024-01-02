'use client'
import Image from "next/image";
import React, { useState } from "react";
import Logo_Text from "../../public/assets/logos/logo_text_light.png";
import Logo_Text_Dark from "../../public/assets/logos/logo_text_dark.png";
import Link from "next/link";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Rowdies } from "next/font/google";
import { initFlowbite } from "flowbite";
import { TiMinus, TiPlus } from "react-icons/ti";

const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });

const data = [
  {
    title: 'Services',
    link1: 'Social Media Management',
    link2: 'Website Development',
    link3: 'Facebook Ads',
    link4: 'Google Ads',

  },
  {
    title: 'About',
    link1: 'About Us',
    link2: 'Our Work',
    link3: 'Courses',
    link4: 'Reach Us',

  },
  {
    title: 'Quick Links',
    link1: 'Terms of Use',
    link2: 'Privacy Policy',
    link3: 'Refund Policy',
    

  },
]
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (index:any) => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-black py-10">
      <div className="flex justify-center flex-col lg:flex-row  gap-x-40">
        <div className="flex items-center lg:items-start justify-start  flex-col  gap-3  mb-5">
          
          <Image
            src={Logo_Text_Dark}
            height={100}
            width={200}
            alt=""
            className="h-16 lg:w-full lg:h-[60px] w-[36%] "
          />
          <div>
            <ul className="flex justify-center gap-x-4 text-xl lg:text-lg my-1 text-white  ">
              <li className="hover:scale-110">
                <Link href="">
                  <LuFacebook />
                </Link>
              </li>
              <li className="hover:scale-110">
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li className="hover:scale-110">
                <Link href="">
                  <SlSocialLinkedin />
                </Link>
              </li>
              <li className="hover:scale-110">
                <Link href="">
                  <IoLogoWhatsapp />
                </Link>
              </li>
              <li className="hover:scale-110">
                <Link href="">
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block text-sm text-white  ">
            <div>
              <span className="">&#169;</span> AcubeCreative.
            </div>
            <div>All rights reserved 2024 </div>
          </div>
        </div>
        <div className="lg:flex flex-col gap-2 text-gray-400    hidden ">
          <div style={rowdies.style} className="text-lg text-white  ">
            Services
          </div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Social Media Management</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Website Development</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Facebook Ads</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Google Ads</div>
        </div>
        <div className="lg:flex flex-col gap-2 text-gray-400     hidden ">
          <div style={rowdies.style} className="text-lg  text-white  ">
            Quick Links
          </div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Terms of Use</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Privacy Policy</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Refund Policy</div>
        </div>
        <div className="lg:flex flex-col gap-2 text-gray-400     hidden ">
          <div style={rowdies.style} className="text-lg  text-white  ">
            About
          </div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">About Us</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Our Work</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Learn</div>
          <div className="cursor-pointer hover:text-blue-600 dark:hover:text-orange-600 transition-all duration-300">Reach Us</div>
        </div>
        { data.map((item, index) =>(<div className="block lg:hidden mb-10 px-10" key={index}>
          <div className="flex justify-between  ">
        <div style={rowdies.style} className="text-lg text-white  ">{item.title}</div>
        <button onClick={() => toggleMenu(index)}  className="text-xl text-white  ">{isOpen ? <TiMinus />: <TiPlus />}</button>
        
        </div>
          
{isOpen && (
  <div className="flex flex-col gap-y-2 mt-2 text-white/70  /70">

              
              <div>{item.link1}</div>
              <div>{item.link2}</div>
              <div>{item.link3}</div>
              <div>{item.link4}</div>
              </div>
             
          
  )  

}
<div className="w-full h-[1px] bg-gray-300 mt-1 "/>

        </div>
        
))}
  <div className="lg:hidden flex justify-center flex-col items-center mb-10 text-md font-semibold text-zinc-100/70 ">
            <div>
              <span className="">&#169;</span> AcubeCreative.
            </div>
            <div className="font-medium text-zinc-100/50 ">All rights reserved 2024 </div>
          </div>

      </div>
    </div>
  );
};

export default Footer;
