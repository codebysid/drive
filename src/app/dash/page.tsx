import dynamic from 'next/dynamic'
import React from 'react'
const DisplayFolders = dynamic(() => import("@/components/DisplayFolders"))
const DisplayFiles = dynamic(() => import("@/components/DisplayFiles"))

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <DisplayFolders />
      <DisplayFiles />
    </div>
  )
}

export default page
