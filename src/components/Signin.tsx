"use client"
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { PiArrowArcLeftLight } from "react-icons/pi";
const Logo = dynamic(() => import("./Logo"))
const TechStack = dynamic(() => import("./TechStack"))
const SigninAndCreateCard = dynamic(() => import("./SigninAndCreateCard"))
const FAQ = dynamic(() => import("./FAQ"))

function Signin() {
  return (
    <div className='flex flex-col gap-14 w-full'>
      <Logo />
      <div className='flex flex-col md:flex-row lg:flex-row md:h-[80vh] lg:h-[80vh] gap-10 lg:items-start lg:justify-center md:justify-center md:items-start lg:relative md:relative'>
        <div className='flex flex-col gap-10 lg:justify-center md:justify-center md:relative lg:relative'>
          <h2 className='text-3xl font-bold md:text-4xl lg:text-4xl lg:w-3/4 md:w-3/4 md:pt-28 lg:pt-28'><span className='primaryText'>Store,</span> <span className='primaryText'>View,</span> and <span className='primaryText'>Access</span> files seamlessly.<br /><br />All at one<span className='primaryText'> place.</span></h2>
          <PiArrowArcLeftLight className='md:w-1/2 md:h-1/2 lg:w-60 lg:h-60 rotateArrow text-primary md:top-full md:left-20 lg:left-52 hidden md:block lg:block absolute' />
          <SigninAndCreateCard />
        </div>
        <div className='relative w-full md:w-full lg:w-1/2 h-[40vh] lg:h-full md:h-full'>
          <Image src="/cloud.jpg" sizes='100vw' className=' object-cover rounded-xl' alt='created with Adobe Firefly' fill />
        </div>
      </div>
      <TechStack />
      <FAQ />
    </div>
  )
}

export default Signin

