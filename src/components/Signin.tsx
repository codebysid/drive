"use client"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
const Logo = dynamic(() => import("./Logo"))
const TechStack = dynamic(() => import("./TechStack"))
const SigninAndCreateCard = dynamic(() => import("./SigninAndCreateCard"))
const FAQ = dynamic(() => import("./FAQ"))

function Signin() {
  return (
    <div className='flex flex-col gap-14 w-full'>
      <Logo />
      <div className='flex flex-col md:flex-row lg:flex-row md:h-[80vh] lg:h-[80vh] gap-10 '>
        <div className='flex flex-col gap-10 md:gap-20 lg:gap-20 lg:justify-center md:justify-center'>
          <h2 className='text-3xl font-bold md:text-4xl lg:text-4xl'><span className='primaryText'>Store,</span> <span className='primaryText'>View,</span> and <span className='primaryText'>Access</span> files seamlessly.<br /><br />All at one<span className='primaryText'> place.</span></h2>
          <SigninAndCreateCard />
        </div>
        <div className='relative w-full h-[40vh] lg:h-full md:h-full'>
          <Image src="/cloud.jpg" sizes='100vw' className=' object-cover rounded-xl' alt='cloud:Adobe FIrefly' fill />
        </div>
      </div>
      <TechStack />
      <FAQ />
    </div>
  )
}

export default Signin
