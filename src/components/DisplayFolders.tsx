"use client"
import useFolder from '@/hooks/useFolder'
import dynamic from 'next/dynamic'
import React from 'react'
import { Skeleton } from './ui/skeleton'
const FolderCard = dynamic(() => import("../components/FolderCard"), { loading: () => <Skeleton className="h-10 w-[10%]" /> })

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
