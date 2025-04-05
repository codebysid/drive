import { Trash2 } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { deleteFile } from '@/actions/file'
import { ObjectId } from 'mongoose'
import { toast } from 'sonner'
import { customRevalidate } from '@/actions/customRevalidate'

type TDeleteFile = {
  mongoId: ObjectId,
  cloudinaryPublicId: String
}


const DeleteFile: React.FC<TDeleteFile> = ({ mongoId, cloudinaryPublicId }) => {

  const handleDelete = async () => {
    try {
      await deleteFile(mongoId, cloudinaryPublicId)
      toast.success("File Deleted")
      await customRevalidate("/dash")
    } catch (err) {

      toast.error("Something went wrong")

      console.log(err)
    }
  }
  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}><Trash2 /></Button>
  )
}

export default DeleteFile
