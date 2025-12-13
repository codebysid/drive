"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { Meteors } from './ui/meteors';
import Image from 'next/image';
const SigninAndCreateCard = dynamic(() => import("./SigninAndCreateCard"))

function Signin() {
  return (
    <div className=' w-full flex flex-col items-center justify-center h-screen'>
      {/* <div className='text-center text-balance absolute w-[50%] bg-black/60 z-20 rounded-full h-[70%] flex flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold'>NEXT DRIVE</h1>
        <h2 className='text-xl w-1/2 text-secondary-foreground/80'>Store, view and access your files seamlessly. Anywhere you want.</h2>
      </div> */}
      <Image
        width={400}
        height={400}
        src={"/memory-tree.webp"}
        className='w-[70%] h-auto mix-blend-hard-light glow absolute opacity-60'

        alt='green tree: ai generated image'
      />
    </div >
  )
}

export default Signin