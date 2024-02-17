"use client"
import useFolder from '@/hooks/useFolder'
import React from 'react'
import FolderCard from '../components/FolderCard'

const DisplayFolders = () => {
  const folderData = useFolder()
  return (
    <div className='flex flex-row gap-4 flex-wrap'>
      {
        folderData.map((currFolder) => {
          const folder = JSON.parse(JSON.stringify(currFolder))
          return <FolderCard key={folder._id} folderData={folder} />
        })
      }
    </div>
  )
}

export default DisplayFolders
