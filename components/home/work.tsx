import { Nunito, Rowdies } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import wall2 from '../../public/assets/wallpapers/work_wall2.jpg'
import wall3 from '../../public/assets/wallpapers/workwall3.jpg'
import smalltown from '../../public/assets/wallpapers/smalltown.png'

const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });
const Work = () => {
  return (
    <div className=' mb-10'>
      <div className=''>
      <div
        className="text-center  font-semibold text-2xl  mb-10"
        style={nunito.style}
      >Some of Out Finest Work</div>
        <div className=''>
           
               <div className='flex flex-col gap-20'>
               <div className='bg-black   relative '>
               {/* <div className='text-white text-3xl absolute'>hello</div> */}
               
                <div className='    flex flex-col lg:flex-row z-20 lg:justify-between items-center h-[70vh] absolute w-full px-5 lg:px-28 gap-y-10 lg:gap-x-20'>
                <div className='text-white flex flex-col gap-4 '>
                  <div className='text-3xl font-bold mt-5 lg:mt-0' style={nunito.style}>Website Development</div>
                  <div className='flex flex-col relative gap-1 '><div className=' text-white pt-9'>Small Town Esports </div><div style={rowdies.style} className=' right-0 absolute text-zinc-400/50'>Work of Art in Gaming World</div></div>
                <button className='px-6 py-2 bg-orange-500 rounded-full mt-10 font-semibold tracking-wide hidden lg:block'>View Case Study</button>
                </div>
                <div className='flex flex-col items-center'>
                <Image src={smalltown} height={200} width={400} alt='' className='w-[350px] h-[160px] lg:w-[540px] lg:h-[280px]  opacity-100 rounded-2xl'/>
                <button className='px-6 py-2 bg-orange-500 rounded-full mt-7 font-semibold tracking-wide lg:hidden block'>View Case Study</button>
                </div>
                </div>
                <Image src={wall2} height={200} width={1000} alt='' className='w-full z-0 lg:h-[70vh] h-[53vh] opacity-20 lg:opacity-30 dark:opacity-20 lg:dark:opacity-40 relative '/>
                
                
               </div>
               <div className='bg-gray-500    relative '>
               {/* <div className='text-white text-3xl absolute'>hello</div> */}
               
                <div className='    flex flex-col justify-between lg:flex-row-reverse z-20 items-center h-[70vh] absolute w-full px-5 lg:px-36 gap-x-20'>
                <div className='text-white flex flex-col gap-4 bg-gray-700 dark:bg-gray-900 px-10 py-14 lg:rounded-2xl bg-opacity-25 dark:bg-opacity-30 lg:bg-opacity-100 dark:lg:bg-opacity-100  w-screen lg:w-fit'>
                  <div className='text-3xl font-bold ' style={nunito.style}>Content Creation</div>
                  {/* <div className='flex flex-col relative gap-1 '><div className=' text-orange-600 pt-9'>Small Town Esports </div><div style={rowdies.style} className=' right-0 absolute text-zinc-200/90'>Work of Art in Gaming World</div></div> */}
                  <div className='text-zinc-300 lg:text-zinc-300/50 break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis molestias quas impedit sint consectetur maiores!</div>
                <button className='px-6 py-2 bg-blue-600 rounded-full mt-10 font-semibold tracking-wide'>View Case Study</button>
                </div>
                <Image src={smalltown} height={200} width={400} alt='' className='w-[540px] h-[280px]  opacity-100 rounded-2xl hidden lg:block'/>
                
                </div>
                <Image src={wall3} height={200} width={1000} alt='' className='w-full z-0 h-[70vh]  opacity-30 dark:opacity-40 '/>
                
                
               </div>
            </div>
            </div>
        </div>
      </div>
    
  )
}

export default Work
