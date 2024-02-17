import { TFolders } from '@/types/folderTypes'
import { FolderOpen } from 'lucide-react'
import React from 'react'

type TFolderCard = {
  folderData: TFolders
}

const FolderCard: React.FC<TFolderCard> = ({ folderData }) => {
  return (
    <div className=' flex flex-row gap-2 px-2 py-2 border border-primaryForeground rounded cursor-pointer hover:bg-secondary'>
      <FolderOpen />
      <span>{folderData.name}</span></div>
  )
}

export default FolderCard
