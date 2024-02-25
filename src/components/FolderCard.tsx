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
    <div onClick={() => handleClicK(folderData._id)} className='fileAndFolderBorder'>
      <FolderOpen />
      <span>{folderData.name}</span></div>
  )
}

export default FolderCard
