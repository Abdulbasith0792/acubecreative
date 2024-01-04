import { Rowdies } from 'next/font/google';
import React, { useState } from 'react'
import { TiMinus, TiPlus } from "react-icons/ti";


const rowdies = Rowdies({ weight: "700", subsets: ["vietnamese"] });
const FooterDrop = ({title, link1,link2, link3, link4}:{title:string, link1:any, link2:any, link3:any,link4:any}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (index:any) => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
        <div className="block lg:hidden mb-10 px-10" >
          <div className="flex justify-between  ">
        <div style={rowdies.style} className="text-lg text-white  ">{title}</div>
        <button onClick={(index) => toggleMenu(index)}  className="text-xl text-white  ">{isOpen ? <TiMinus />: <TiPlus />}</button>
        
        </div>
          

<div className="w-full h-[1px] bg-gray-300 mt-1 "/>

        </div>
      {isOpen && (
  <div className="flex flex-col gap-y-2 mt-2 text-white/70  /70">

              
              <div>{link1}</div>
              <div>{link2}</div>
              <div>{link3}</div>
              <div>{link4}</div>
              </div>
             
          
  )  

}
    </div>
  )
}

export default FooterDrop
