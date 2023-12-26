import { Nunito } from 'next/font/google';
import React from 'react'
// import mb2 from '../../public/assets/placeholders/mb2.mp4'

const nunito = Nunito({ weight: "variable", subsets: ["cyrillic"] });
const Work = () => {
  return (
    <div className='px-3 lg:px-28 mb-10'>
      <div className='flex flex-col justify-center items-center w-full'>
      <div
        className="text-center lg:text-start font-semibold text-2xl  mb-10"
        style={nunito.style}
      >Some of Out Finest Work</div>
        <div>
            <div className='flex flex-wrap justify-center items-center gap-x-8 '>
                <div className='flex  flex-col rounded-2xl overflow-hidden justify-between  bg-green-800 w-[350px]'>
                <video autoPlay muted loop style={{ width: '350px', height: '250px' }}  src='../../assets/placeholders/mb2.mp4' className=''/>
    <div> Website Development</div>
    <div> Lorem ipsum dolor sit amet consectetur,.</div>
   
                </div>
                <div className='flex  flex-col rounded-2xl  justify-start items-start overflow-hidden bg-zinc-600 w-[350px] h-[260px]'>
                <video autoPlay muted loop style={{ width: '350px', height: '250px' }}  src='../../assets/placeholders/md1.mp4' className='top-0 -mt-4'/>
    <div className='text-gray-100'> Website Development</div>
    <div> Lorem ipsum dolor sit amet consectetur, </div>
   
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
