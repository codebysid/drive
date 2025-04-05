"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { Meteors } from './ui/meteors';
const SigninAndCreateCard = dynamic(() => import("./SigninAndCreateCard"))

function Signin() {
  return (
    <div className='flex flex-col gap-10 items-center justify-center w-full min-h-screen max-h-screen'>
      <h2 className='font-extrabold text-[30vw] lg:text-[15vw] md:text-[15vw] whitespace-nowrap lg:pt-11 md:pt-11 bg-linear-to-b from-neutral-800 to-neutral-500 text-transparent bg-clip-text absolute text-center'>
        NEXT
        <br className=' lg:hidden md:hidden' />
        DRIVE
      </h2>
      <div className='w-[60%] h-[35vh] lg:w-[40%] lg:h-[85%] rounded-full bg-black/40 backdrop-blur-sm border flex flex-col justify-center items-center gap-4 lg:gap-5 md:gap-5'>
        <p className=' font-bold text-sm px-2 lg:px-0 md:px-0 lg:text-2xl md:text-2xl text-balance text-center'>
          Store, Access & View your files seamlessly. All at One Place.
        </p>
        <SigninAndCreateCard />
        <Meteors number={12} />
      </div>
    </div >
  )
}

export default Signin