"use client"
import useParentFolder from '@/hooks/useParentFolder'
import { TFolders } from '@/types/folderTypes'
import { FolderOpen } from 'lucide-react'
import { ObjectId } from 'mongoose'
import React from 'react'

type TFolderCard = {
  folderData: TFolders
}

const FolderCard: React.FC<TFolderCard> = ({ folderData }) => {
  const parentFolder = useParentFolder()

  const handleClicK = (folderId: ObjectId) => {
    parentFolder?.updateParentFolder(folderId)
  }
  return (
    <div title={folderData.name as string} onClick={() => handleClicK(folderData._id)} className='flex flex-row gap-2 px-2 py-2 cursor-pointer hover:bg-secondary border-b'>
      <FolderOpen className=' size-5' />
      <span className='whitespace-nowrap overflow-hidden text-ellipsis w-[75%]'>{folderData.name}</span></div>
  )
}

export default FolderCard
