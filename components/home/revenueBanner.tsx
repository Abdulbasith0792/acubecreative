import Image from "next/image";
import React from "react";
import money1 from "../../public/assets/wallpapers/money1.jpg";
import money3 from "../../public/assets/wallpapers/money3.jpg";
import money2 from "../../public/assets/wallpapers/money2.jpg";
import { TiTick } from "react-icons/ti";
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const RevenueBanner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mb-6 lg:mb-0">
      <div className="uppercase text-orange-500 dark:bg-white bg-black dark:text-blue-600 text-[70px]  font-bold leading-[70px] py-10 lg:hidden block">
            How we generate revenue
          </div>
        <div className="lg:w-[40%] relative bg-black bg-opacity-70 dark:bg-white dark:bg-opacity-50">
          <div className="opacity-50 relative  ">
            <Image
              src={money3}
              className="w-full lg:h-screen h-[60vh] absolute opacity-70"
              height={200}
              width={400}
              alt=""
            />
            <Image
              src={money1}
              className="w-full lg:h-[50vh] h-[30vh]"
              height={200}
              width={400}
              alt=""
            />
            <Image
              src={money2}
              className="w-full lg:h-[50vh] h-[30vh]"
              height={200}
              width={400}
              alt=""
            />
          </div>
        </div>
        <div className=" lg:w-[60%] lg:h-screen lg:px-28 lg:py-10 dark:bg-white bg-black">
          <div className="uppercase text-orange-500 dark:text-blue-600 text-[70px]  font-bold leading-[70px] mb-10 hidden lg:block">
            How we generate revenue
          </div>
          <div className="flex flex-col gap-5 text-white dark:text-black font-bold my-10 pl-3 lg:pl-0 lg:my-0 text-sm lg:text-lg" style={nunito.style} >
            <div className="flex  gap-x-2" ><div className="rounded-full flex items-center justify-center dark:bg-orange-500 bg-blue-500 h-6 w-6 text-lg"><TiTick /></div>ENHANCE BRAND COMMUNICATION AND BOOST CONVERSION</div>
            <div className="flex  gap-x-2" ><div className="rounded-full flex items-center justify-center dark:bg-orange-500 bg-blue-500 h-6 w-6 text-lg"><TiTick /></div>DRIVE WEBSITE TRAFFIC</div>
            <div className="flex  gap-x-2" ><div className="rounded-full flex items-center justify-center dark:bg-orange-500 bg-blue-500 h-6 w-6 text-lg"><TiTick /></div>DEVELOP AND OVERSEE EFFECTIVE ADVERTISING CAMPAIGNS</div>
            <div className="flex  gap-x-2" ><div className="rounded-full flex items-center justify-center dark:bg-orange-500 bg-blue-500 h-6 w-6 text-lg"><TiTick /></div>GATHER, EVALUATE, AND UTILIZE MARKETING DATA</div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueBanner;
