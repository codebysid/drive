import BackButton from '@/components/BackButton'
import DisplayFiles from '@/components/DisplayFiles'
import DisplayFolders from '@/components/DisplayFolders'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <DisplayFolders />
      <DisplayFiles />
    </div>
  )
}

export default page
