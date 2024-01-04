import { Nunito, Rowdies } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import wall2 from '../../public/assets/wallpapers/work_wall2.jpg'
import wall3 from '../../public/assets/wallpapers/workwall3.jpg'
import wall from '../../public/assets/wallpapers/work_wall.jpg'
import smalltown from '../../public/assets/wallpapers/smalltown.png'
import pxlwrx from '../../public/assets/wallpapers/pxlwrx.png'
import hackrev from '../../public/assets/wallpapers/hackrev.png'
import Link from 'next/link';

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
           
               <div className='flex flex-col gap-20 lg:gap-0'>
               <div className='bg-black   relative '>
               {/* <div className='text-white text-3xl absolute'>hello</div> */}
               
                <div className='    flex flex-col lg:flex-row z-20 lg:justify-between items-center h-[82vh] lg:h-[70vh] absolute w-full px-5 lg:px-28 gap-y-10 lg:gap-x-20'>
                <div className='text-white flex flex-col gap-4 lg:max-w-[40%] '>
                  <div className='text-3xl font-bold mt-5 lg:mt-0' style={nunito.style}>SMM & Development</div>
                  <div className='flex flex-col relative gap-1 '><div className=' text-white/70 pt-9 break-all'>Small Town Esports hosted thrilling Free Fire Max tournaments, showcasing their commitment to creating a platform for local talents to shine. </div><div style={rowdies.style} className=' right-0 absolute text-zinc-400/50'>Work of Art in Gaming World</div></div>
                <Link href='https://www.instagram.com/smalltown_esports/' target='_blank' className='w-fit lg:w-[90%]'><button className='px-10 py-2 bg-orange-500 rounded-md mt-2 font-semibold tracking-wide hidden lg:block'>View More....</button></Link>
                </div>
                <div className='flex flex-col items-center'>
                <Image src={smalltown} height={200} width={400} alt='' className='w-[350px] h-[160px] lg:w-[540px] lg:h-[280px]  opacity-100 rounded-2xl'/>
                <Link href='https://www.instagram.com/smalltown_esports/' target='_blank' className='w-full'><button className='px-6 py-2 bg-orange-500 rounded-full mt-10 font-semibold tracking-wide lg:hidden block'>View More....</button></Link>
                </div>
                </div>
                <Image src={wall2} height={200} width={1000} alt='' className='w-full z-0 lg:h-[70vh] h-[65vh] opacity-20 lg:opacity-30 dark:opacity-20 lg:dark:opacity-40 relative '/>
                
                
               </div>
               {/* 2 */}
               <div className='bg-gray-500    relative '>
               {/* <div className='text-white text-3xl absolute'>hello</div> */}
               
                <div className='    flex flex-col lg:justify-between justify-center lg:flex-row-reverse z-20 items-center h-[70vh] absolute w-full px-5 lg:px-28 gap-x-20'>
                <div className='text-white flex flex-col gap-4 items-center bg-gray-700 dark:bg-gray-900 px-2 lg:px-10 py-14 lg:rounded-2xl bg-opacity-25 dark:bg-opacity-30 lg:bg-opacity-100 dark:lg:bg-opacity-100  w-screen lg:w-fit'>
                  <div className='text-3xl font-bold ' style={nunito.style}>Website Development</div>
                  <Image src={pxlwrx} height={200} width={400} alt='' className='w-[540px] h-[220px]  opacity-100 rounded-2xl lg:hidden block'/>
                  {/* <div className='flex flex-col relative gap-1 '><div className=' text-orange-600 pt-9'>Small Town Esports </div><div style={rowdies.style} className=' right-0 absolute text-zinc-200/90'>Work of Art in Gaming World</div></div> */}
                  <div className='text-zinc-100 lg:text-zinc-300/50 break-words text-center'>PixlWorx: Elevate Your Style with Trendsetting Phone Cases, Mugs, and More for a Pixel-Perfect Lifestyle.</div>
                  <Link className='' href='https://www.pixlworx.com/' target='_blank'><div className=' underline underline-offset-2  text-zinc-100 lg:text-zinc-300/70 break-words text-center'>https://www.pixlworx.com/</div></Link>
               <Link href='https://www.pixlworx.com/' target='_blank' className='w-fit lg:w-full '><button className='px-6 py-2 bg-blue-600 w-fit lg:w-full rounded-full mt-1 font-semibold tracking-wide'>View More....</button></Link>
               
                </div>
                <Image src={pxlwrx} height={200} width={400} alt='' className='w-[540px] h-[280px]  opacity-100 rounded-2xl my-10  lg:my-0 hidden lg:block'/>
                
                </div>
                {/* <button className='px-6 py-2 bg-blue-600 rounded-full mt-10 font-semibold tracking-wide '>View Case Study</button> */}

                <Image src={wall3} height={200} width={1000} alt='' className='w-full z-0 h-[70vh] lg:h-[70vh] opacity-30 dark:opacity-40 '/>
                
                
               </div>
               {/* 3 */}
               <div className='bg-gray-500    relative '>
               {/* <div className='text-white text-3xl absolute'>hello</div> */}
               
                <div className='    flex flex-col lg:justify-between justify-center lg:flex-row z-20 items-center h-[70vh] absolute w-full px-5 lg:px-28 gap-x-20'>
                <div className='text-black flex flex-col gap-4 items-center lg:items-start  px-2 lg:px-10 py-14 lg:rounded-2xl   w-screen lg:w-fit'>
                  <div className='text-3xl font-bold ' style={nunito.style}>Website Development</div>
                  <Image src={pxlwrx} height={200} width={400} alt='' className='w-[540px] h-[220px]  opacity-100 rounded-2xl lg:hidden block'/>
                  {/* <div className='flex flex-col relative gap-1 '><div className=' text-orange-600 pt-9'>Small Town Esports </div><div style={rowdies.style} className=' right-0 absolute text-zinc-200/90'>Work of Art in Gaming World</div></div> */}
                  <div className='text-zinc-700 lg:text-zinc-900/90 break-words text-center lg:text-start'>A pinacle of art in website design, hackrevolution website is built using cutting edge technologies.</div>
                  <Link className='' href='https://hackrevolution.in/' target='_blank'><div className=' underline underline-offset-2  text-zinc-700 lg:text-zinc-900/70 break-words text-center'>https://hackrevolution.in/</div></Link>
               <Link href='https://hackrevolution.in/' target='_blank' className='w-fit lg:w-full '><button className='px-6 py-2 bg-orange-500 w-fit  rounded-lg text-white mt-1 font-semibold tracking-wide'>View More....</button></Link>
               
                </div>
                <Image src={hackrev} height={200} width={400} alt='' className='w-[540px] h-[280px]  opacity-100 rounded-2xl my-10  lg:my-0 hidden lg:block'/>
                
                </div>
                {/* <button className='px-6 py-2 bg-blue-600 rounded-full mt-10 font-semibold tracking-wide '>View Case Study</button> */}

                <Image src={wall} height={200} width={1000} alt='' className='w-full z-0 h-[70vh]  '/>
                
                
               </div>
            </div>
            </div>
        </div>
      </div>
    
  )
}

export default Work
