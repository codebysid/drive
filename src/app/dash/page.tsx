import dynamic from 'next/dynamic'
import React from 'react'
const DisplayFiles = dynamic(() => import("@/components/DisplayFiles"))

const page = () => {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <DisplayFiles />
    </div>
  )
}

export default page
