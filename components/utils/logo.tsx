import Image from 'next/image'
import React from 'react'
import Logo_Light from '../../public/assets/logos/logo_light.png'
import Logo_Dark from '../../public/assets/logos/logo_dark.png'

const Logo = () => {
  return (
    <div className={`logo `}>
      <Image src={Logo_Light} alt='light' className='dark:hidden block h-[85px] w-[40%] lg:h-[100px] lg:w-full' height={100} width={100} />
      <Image src={Logo_Dark} alt='dark' className='dark:block hidden h-[85px] w-[40%] lg:h-[100px] lg:w-full' height={100} width={100} />
    </div>
  )
}

export default Logo
