"use client"
import Lottie from 'lottie-react'
import React from 'react'
import comp from '../../public/assets/animations/computerGuy.json'
import smm from '../../public/assets/animations/smm.json'
import { Nunito, Rowdies } from 'next/font/google'
import { VscGraph } from "react-icons/vsc";
import { GiShieldOpposition } from "react-icons/gi";
import { TbSpeakerphone } from "react-icons/tb";
import { RiPresentationFill } from "react-icons/ri";

const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });
const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const SMM = () => {
  return (
    <div className='lg:px-28'>
        <div className='lg:text-center text-[26px] mt-4 lg:mt-0 lg:text-[40px] px-3 lg:px-0 text-indigo-600 dark:text-indigo-400' style={rowdies.style}>Social Media Management</div>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-x-20 mt-5'>
        
        <div className='px-5 lg:w-[90%]'>
            <div style={nunito.style} className='text-blue-600 dark:text-orange-500 text-lg lg:text-xl font-bold '>What do we Serve?</div>
            <div style={nunito.style}  className='text-[28px] mt-5 leading-snug lg:text-[35px] font-bold break-words'>Maximizing Your Social Presence, One Post at a Time: Elevate Your Brand with Expert SMM.</div>
        </div>
        <div className="w-[40vh] lg:w-[99vh] -mt-5 lg:mt-0 mb-2 lg:mb-0">
          <Lottie animationData={smm} loop={true} />
        </div>
        </div> 
        <div className='mt-16 px-5'>
        {/* <div style={nunito.style} className='text-blue-600  dark:text-orange-500 text-lg lg:text-xl font-bold mb-10 '>Web.</div> */}
        <div style={nunito.style}  className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 text-2xl font-bold underline decoration-dotted underline-offset-2'>
               
                    <div>Branding</div>
                    <div>Facebook Ads</div>
                    <div>Google AdSense</div>
                    <div>Email Marketing</div>
                    <div>SEO</div>
                    <div>SMO</div>
                    <div>Content Marketing</div>
                    <div>Content Creation</div>
                    
                

        </div>
        </div>
        
        <div className='mt-20 px-2 lg:px-14'>
        <div style={nunito.style} className='text-blue-600 text-center uppercase  dark:text-orange-500 text-lg lg:text-xl font-bold mb-10 '>How we do it?</div>
<div  style={nunito.style}  className='text-2xl lg:text-4xl  style={nunito.style} font-bold text-center '>Comprehensive digital marketing services and digital branding strategies from start to finish.</div>
        </div>
        <div className='mt-16 px-4' style={nunito.style}>
<div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-y-10 gap-x-20'>
   <div>
<div className='text-5xl mb-6 '><VscGraph /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Research</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>We create resilient brands for the future through thorough research, carefully identifying business challenges by evaluating current marketing materials.</div>
   </div>
   <div>
   <div className='text-5xl mb-6 '> <GiShieldOpposition /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Postioning</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>L
In our brand collaborations, we collaboratively shape the brand&apos;s purpose, vision, platform, architecture, and messaging matrix. This involves human behavioral insights and different strategies to create a cohesive brand identity</div>
   </div>
   <div>
   <div className='text-[42px] mb-6 '><RiPresentationFill /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>innovative</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>From crafting exceptional visual and verbal identities to establishing comprehensive guidelines, and from developing brand assets to 
    conducting brand sprints, we assist our clients in achieving value-driven brand positioning outcomes.
       </div>
   </div>
   <div>
   <div className='text-[42px] mb-6 '><TbSpeakerphone /></div>

    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Marketing</div>
    <div  style={nunito.style} className='text-md lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>We design brand touchpoints with a forward-looking approach, facilitating smooth interactions between the brand and users, fortified by robust security measures and optimal performance.
    
      </div>
   </div>
 
</div>
        </div>
    </div>
  )
}

export default SMM

