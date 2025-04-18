"use client"
import { createFolder } from '@/actions/folder'
import useParentFolder from '@/hooks/useParentFolder'
import useUser from '@/hooks/useUser'
import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { DialogClose, DialogFooter } from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { toast } from 'sonner'

const FolderInput = () => {
  const [folderName, setFolderName] = useState("")
  const user = useUser()
  const parentFolder = useParentFolder()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFolderName(e.target.value)

  const handleFolderClick = async () => {
    if (!folderName || !user?.user?._id) {
      toast.warning("Folder Name is required")
      return
    }
    try {
      if (!parentFolder?.parentFolder) await createFolder(folderName, undefined, user?.user?._id, undefined)
      else await createFolder(folderName, parentFolder.parentFolder, user?.user?._id, undefined)
    } catch (err) {
      console.log(err)

      toast.error("Something went wrong")
    }
  }
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value={folderName} onChange={handleChange} placeholder='Enter folder name' className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit" onClick={handleFolderClick}>Create Folder</Button>
        </DialogClose>
      </DialogFooter>

    </>

  )
}

export default FolderInput
