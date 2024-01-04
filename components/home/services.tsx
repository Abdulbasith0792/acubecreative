import React from "react";
import { Nunito, Rowdies } from "next/font/google";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Social from "../../public/assets/logos/socialMedia.png";
import digi from "../../public/assets/logos/marketing.png";
import website from "../../public/assets/logos/web.png";
import Link from "next/link";
import Development from "@/app/services/development/page";

const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });

const Services = () => {
  return (
    <div className="lg:px-20 lg:my-20 mb-6  flex flex-col lg:items-center">
      <div
        className="text-center lg:text-start font-semibold text-2xl mb-10 "
        style={nunito.style}
      >
        Services We Can Help With
      </div>
      <div className="lg:relative flex lg:justify-center lg:items-center w-full">
        <div className="h-[50vh] w-[90vh] bg-[#0352ff] dark:bg-orange-600 rounded-full blur-[96px] opacity-30 dark:opacity-20 hidden lg:block" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 lg:absolute gap-y-4 ">
          {/* social media */}
          <div className="lg:bg-transparent bg-opacity-20  rounded-3xl px-6 py-4 gap-4 flex  items-center lg:items-start flex-col group cursor-pointer lg:hover:bg-white lg:hover:border  lg:border-zinc-300 lg:dark:hover:bg-[#131314] lg:dark:border-gray-700  duration-300">
            <div className="bg-yellow-400 rounded-lg px-3 py-2 w-fit">
              <Image
                src={Social}
                width={100}
                height={100}
                alt="hello"
                className="h-10 w-10 "
              />
            </div>
            <div style={rowdies.style} className="text-xl">Social Media Management</div>
            <div className="leading-snug text-sm break-words opacity-50 group-hover:opacity-75 lg:text-start transition ease-in duration-300 text-center ">
              Effortlessly traverse the social landscape through our
              comprehensive management services. From the inception of
              compelling content to proactive community engagement, we magnify
              your brand presence across platforms, nurturing profound
              connections with your audience for enduring impact and resonance.
            </div>
            <Link href='../../services/socialMediaManagement'><div className=" right-1 font-semibold dark:text-[#0352ff] dark:hover:text-orange-500 hover:text-blue-600 hover:transition-all ease-in-out hover:duration-300 bg-zinc-200 dark:bg-zinc-900 lg:bg-transparent lg:dark:bg-transparent  rounded-full px-6 lg:p-0 py-1   text-orange-500 flex gap-2 items-center">
              Read more <FaArrowRight />
            </div></Link>
          </div>
          {/* website */}
          <div className="lg:bg-transparent bg-opacity-20  rounded-3xl px-6 py-4 gap-4 flex items-center lg:items-start flex-col group cursor-pointer lg:hover:bg-white lg:hover:border  lg:border-zinc-300 lg:dark:hover:bg-[#131314] lg:dark:border-gray-700 transition-all duration-300">
            <div className="bg-green-400 rounded-lg px-3 py-2 w-fit">
              <Image
                src={website}
                width={100}
                height={100}
                alt="hello"
                className="h-10 w-10  "
              />
            </div>
            
           <div style={rowdies.style} className="text-xl">Development</div>
            <div className="leading-snug text-sm break-words opacity-50 group-hover:opacity-75 transition ease-in duration-300  text-center lg:text-start">
              Elevate your digital presence to new heights through our
              meticulously crafted website and mobile app solutions. With a distinct focus on
              e-commerce and captivating landing pages, we seamlessly amalgamate
              cutting-edge design and robust functionality, ensuring success of your
              business in different ways.
            </div>
            <Link href='../../services/development'><div className=" right-1 font-semibold dark:hover:text-orange-500 hover:text-blue-600 hover:transition-all ease-in-out hover:duration-300 dark:text-[#0352ff] bg-zinc-200 dark:bg-zinc-900 lg:bg-transparent lg:dark:bg-transparent lg:p-0 rounded-full px-6 py-1 text-orange-500 flex gap-2 items-center">
              Read more <FaArrowRight />
            </div></Link>
          </div>
          {/* digital Marketing */}
          <div className="lg:bg-transparent bg-opacity-20  rounded-3xl px-6 py-4 gap-4 flex  items-center lg:items-start flex-col group cursor-pointer lg:hover:bg-white lg:hover:border  lg:border-zinc-300 lg:dark:hover:bg-[#131314] lg:dark:border-gray-700 transition-all duration-300">
            <div className="bg-fuchsia-400 rounded-lg px-3 py-2 w-fit">
              <Image
                src={digi}
                width={100}
                height={100}
                alt="hello"
                className="h-10 w-10 "
              />
            </div>
            
            <div style={rowdies.style} className="text-xl">Digital Marketing</div>
            <div className="leading-snug text-sm break-words opacity-50 group-hover:opacity-75 transition ease-in duration-300  text-center lg:text-start">
              Maximize your online impact with our holistic marketing approach.
              From precision-targeted Facebook Ads to strategic Google AdSense
              optimization, we amplify your brand presence and engagement
              through expert social media management, ensuring success in the
              digital landscape.
            </div>
            <Link href='../../services/digitalMarketing'><div className=" right-1 font-semibold dark:text-[#0352ff] dark:hover:text-orange-500 hover:text-blue-600 hover:transition-all ease-in-out hover:duration-300 bg-zinc-200 dark:bg-zinc-900 lg:bg-transparent lg:dark:bg-transparent rounded-full px-6 py-1 lg:p-0 text-orange-500 flex gap-2 items-center">
              Read more <FaArrowRight />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
