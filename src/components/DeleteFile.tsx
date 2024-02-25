import { Trash2 } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { deleteFile } from '@/actions/file'
import { ObjectId } from 'mongoose'

type TDeleteFile = {
  mongoId: ObjectId,
  cloudinaryPublicId: String
}


const DeleteFile: React.FC<TDeleteFile> = ({ mongoId, cloudinaryPublicId }) => {
  const handleDelete = async () => {
    try {
      await deleteFile(mongoId, cloudinaryPublicId)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Button onClick={handleDelete}><Trash2 /></Button>
  )
}

export default DeleteFile
