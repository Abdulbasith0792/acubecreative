"use client"
import { Rowdies } from "next/font/google";
import React from "react";
import anime from '../../public/assets/animations/home_animation.json'
import anime_dark from '../../public/assets/animations/home_dark1.json'
import Lottie from "lottie-react";


const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });

const Banner = () => {
  return (
    <div className="flex  items-center lg:items-start flex-col lg:flex-row  lg:justify-between px-5 lg:px-40 lg:mt-16  mt-4">
      {/* <div className='h-[75vh] w-[105vh] bg-green-400 dark:bg-orange-600 rounded-full blur-[96px] opacity-60 dark:opacity-20'/> */}
      <div className="">
        <div
          className="text-black dark:text-white text-[60px] lg:text-[90px] leading-[60px] lg:leading-[85px] mt-1"
          style={rowdies.style}
        >
          <div className="">Scale</div>
          <div className="text-[#0352ff]">Your</div>
          <div className="text-orange-600">Business</div>
        </div>
        <div className="font-bold pl-2 mt-10 text-md lg:text-lg">
          <div>Website Landing   <span >&#160;&#160;</span>|<span >&#160;&#160;</span>   Digital Marketing <span>&#160;&#160;</span>|<span>&#160;&#160;</span></div>
          
          <div>Social Media Management </div>
        </div>
      </div>
      <div>
        <div className="w-[40vh] lg:w-[70vh] dark:hidden block">
          <Lottie animationData={anime} loop={true} />
        </div>
        <div className="w-[40vh] lg:w-[70vh] dark:block hidden">
          <Lottie animationData={anime_dark} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
