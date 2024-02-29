"use client"
import useFolder from '@/hooks/useFolder'
import dynamic from 'next/dynamic'
import React from 'react'
import { Skeleton } from './ui/skeleton'
import useParentFolder from '@/hooks/useParentFolder'
const FolderCard = dynamic(() => import("../components/FolderCard"), { loading: () => <Skeleton className="h-10 w-[10%]" /> })

const DisplayFolders = () => {
  const folderData = useFolder()
  const parentFolder = useParentFolder()
  return (
    <div className='flex flex-col gap-3'>
      {
        folderData && <h1 className='subHeading'>Your Folders ↴</h1>
      }
      {
        (!parentFolder?.parentFolder && folderData?.length <= 0) && <h1>Get started by creating your first folder because file can only be uploaded inside a folder only.
        </h1>
      }
      <div className='flex flex-row gap-4 flex-wrap'>
        {
          folderData?.length > 0 && folderData.map((currFolder) => {
            const folder = JSON.parse(JSON.stringify(currFolder))
            return <FolderCard key={folder._id} folderData={folder} />
          })
        }
      </div>
    </div>
  )
}

export default DisplayFolders
