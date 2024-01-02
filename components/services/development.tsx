"use client"
import Lottie from 'lottie-react'
import React from 'react'
import comp from '../../public/assets/animations/computerGuy.json'
import pc from '../../public/assets/animations/pcScreen.json'
import { Nunito, Rowdies } from 'next/font/google'
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";

const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });
const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const Dev = () => {
  return (
    <div className='lg:px-28'>
        <div className='lg:text-center text-[28px] mt-3 lg:mt-0 lg:text-[40px] px-3 lg:px-0 text-pink-600 dark:text-pink-400' style={rowdies.style}>Developement</div>
        <div className='flex flex-col lg:flex-row items-center gap-x-20 mt-5 lg:mt-10'>
        <div className="w-[40vh] lg:w-[99vh] -mt-10 lg:mt-0 ">
          <Lottie animationData={pc} loop={true} />
        </div>
        <div className='px-5 lg:w-[90%]'>
            <div style={nunito.style} className='text-blue-600 dark:text-orange-500 text-lg lg:text-xl font-bold '>What do we Serve?</div>
            <div style={nunito.style}  className='text-3xl mt-5 leading-normal lg:text-[35px] font-bold break-words'>Holistic technology services that seamlessly blend digital expertise with strategic business objectives.</div>
        </div>
        </div> 
        <div className='mt-16 px-5'>
        <div style={nunito.style} className='text-blue-600  dark:text-orange-500 text-lg lg:text-xl font-bold mb-10 '>Web.</div>
        <div style={nunito.style}  className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 text-2xl font-bold underline decoration-dotted underline-offset-2'>
               
                    <div>Web Design</div>
                    <div>Front-End</div>
                    <div>Back-End</div>
                    <div>Javascript</div>
                    <div>Typescript</div>
                    <div>CSS 3</div>
                    <div>Animations</div>
                    <div>React</div>
                    <div>E-Commerce</div>
                    <div>Wordpress</div>
                    <div>SquareSpace</div>
                    <div>Wix</div>
                

        </div>
        </div>
        <div className='mt-16 px-5'>
        <div style={nunito.style} className='text-blue-600  dark:text-orange-500 text-lg lg:text-xl font-bold mb-10 '>Mobile.</div>
        <div style={nunito.style}  className='grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 text-2xl font-bold underline decoration-dotted underline-offset-4'>
               
                    <div>IOS</div>
                    <div>Native</div>
                    <div>Hybrid</div>
                    <div>Android</div>
                    <div>Flutter</div>
                    
                    
                

        </div>
        </div>
        <div className='mt-20 px-2 lg:px-14'>
        <div style={nunito.style} className='text-blue-600 text-center uppercase  dark:text-orange-500 text-lg lg:text-xl font-bold mb-10 '>How we do it?</div>
<div  style={nunito.style}  className='text-2xl lg:text-4xl  style={nunito.style} font-bold text-center '>Going above and beyond by consistently putting in extra effort at every turn.</div>
        </div>
        <div className='mt-16 px-4' style={nunito.style}>
<div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-y-10 gap-x-20'>
   <div>
<div className='text-5xl mb-6 '><GrDocumentPerformance /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Understand Objectives</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>As a web and mobile app development company dedicated to client satisfaction, we delve deeply 
        into your digital needs, understanding consumer behaviors, technology platforms, functionalities, and more. Our strategy focuses on crafting the ideal user experience, prioritizing exceptional aesthetic appeal to captivate your audience and provide a competitive advantage.</div>
   </div>
   <div>
   <div className='text-5xl mb-6 '> <MdOutlineDatasetLinked /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Choose Right Technology</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>Leveraging a technology-centric approach, our solutions go beyond conventional problem-solving methods. We guarantee a refined frontend experience and construct a user-friendly backend by envisioning a comprehensive perspective, 
    enabling a tech-driven digital transformation that was previously deemed unattainable.</div>
   </div>
   <div>
   <div className='text-[42px] mb-6 '><GrDeploy /></div>
    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>Successful Build and Deployment</div>
    <div  style={nunito.style} className='text-md  lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>Choosing to collaborate with a dynamic web and mobile app development company such as ours opens the door to unparalleled tech-driven solutions that have proven their efficacy across diverse environments, encompassing both staging and production. Our commitment to excellence ensures that the solutions we provide not only meet but exceed the 
    challenges posed by varying scenarios.
       </div>
   </div>
   <div>
   <div className='text-[42px] mb-6 '><MdSupportAgent /></div>

    <div  style={nunito.style} className='mb-5 text-xl lg:text-2xl font-bold'>24/7 Support</div>
    <div  style={nunito.style} className='text-md lg:text-[17px] leading-relaxed font-medium break-all text-zinc-800/70 dark:text-zinc-100/60'>Our team of technology expert
    s is well-versed in the latest technological advancements and software trends. We manage website maintenance and ensure seamless
     app performance. Additionally, our reliable  support provides top-notch customer assistance, complete with smooth backend
      integration for our valued clients.
      </div>
   </div>
 
</div>
        </div>
    </div>
  )
}

export default Dev
