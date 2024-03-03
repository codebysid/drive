"use client"
import { saveFile } from '@/actions/file'
import { Input } from "@/components/ui/input"
import useParentFolder from '@/hooks/useParentFolder'
import useUser from '@/hooks/useUser'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Loader from "../components/Loader"
import { Button } from './ui/button'
import { DialogFooter } from './ui/dialog'
import { useToast } from './ui/use-toast'
import useFileMemory from '@/hooks/useFileMemory'
import { bytesToMb } from '@/utils/bytesToMb'

const FileInput = ({ setOpenDialog }: { setOpenDialog: Dispatch<SetStateAction<boolean>> }) => {
  const [file, setFile] = useState<File>()
  const [loading, setLoading] = useState(false)
  const user = useUser()
  const parentFolder = useParentFolder()
  const ocuppiedMemory = useFileMemory()
  const { toast } = useToast()

  const handleFileSubmit = async () => {
    if (!parentFolder?.parentFolder) {
      toast({ title: "Get inside a folder first 😵" })
      return
    }
    if (!file || !user?.user._id) {
      toast({ title: "File is not selected 😵" })
      return
    }

    try {
      const data = new FormData()
      if (Number(bytesToMb(file?.size)) > 4) {
        toast({ title: "File should be less than 4mb 📄" })
        return
      }
      if ((200 - ocuppiedMemory) < bytesToMb(file?.size)) {
        toast({ title: "No available memory, delete some files 🗑️" })
        return
      }
      setLoading(true)
      data.append("fileData", file)
      await saveFile(data, user?.user._id, parentFolder.parentFolder)
      toast({ title: "File Uploaded 📄" })
      setLoading(false)
      setOpenDialog(false)
      return
    } catch (err) {
      toast({ title: "Unsupported File Format", variant: "destructive" })
      console.log(err)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e?.target?.files[0])
  }
  return (
    <div>
      <div className='flex justify-center items-center'>
        {loading && <Loader />}
      </div>
      <div className="grid items-center gap-1.5">
        <Input id="fileInput" type="file" onChange={handleFileInputChange} />
      </div>
      <DialogFooter>
        <Button onClick={() => handleFileSubmit()} >Upload</Button>
      </DialogFooter>
    </div>
  )
}

export default FileInput
