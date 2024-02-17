import React from 'react'
import { Button } from "../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import FolderInput from '../components/FolderInput'
import { FolderPlus } from 'lucide-react'

const AddFolder = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="iconOutlineButton"><FolderPlus /> Add Folder</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Folder</DialogTitle>
        </DialogHeader>
        <FolderInput />
      </DialogContent>
    </Dialog>)
}

export default AddFolder
