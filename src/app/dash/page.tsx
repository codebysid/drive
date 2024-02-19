import AddFile from '@/components/AddFile'
import AddFolder from '@/components/AddFolder'
import DisplayFolders from '@/components/DisplayFolders'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-row gap-4 items-center'>
        <AddFolder />
        <AddFile />
      </div>
      <DisplayFolders />
    </div>
  )
}

export default page
