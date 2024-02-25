"use client"
import useFolder from '@/hooks/useFolder'
import React, { useEffect } from 'react'
import FolderCard from '../components/FolderCard'

const DisplayFolders = () => {
  const folderData = useFolder()
  return (
    <div className='flex flex-col gap-3'>
      {
        folderData && <h1 className='subHeading'>Your Folders ↴</h1>
      }

      <div className='flex flex-row gap-4 flex-wrap'>
        {
          folderData && folderData.map((currFolder) => {
            const folder = JSON.parse(JSON.stringify(currFolder))
            return <FolderCard key={folder._id} folderData={folder} />
          })
        }
      </div>
    </div>
  )
}

export default DisplayFolders
