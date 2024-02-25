"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { DialogFooter } from './ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { saveFile } from '@/actions/file'
import useUser from '@/hooks/useUser'
import useParentFolder from '@/hooks/useParentFolder'
import { useToast } from './ui/use-toast'

const FileInput = () => {
  const [file, setFile] = useState<File>()
  const user = useUser()
  const parentFolder = useParentFolder()
  const { toast } = useToast()

  const handleFileSubmit = async () => {
    if (!file || !user?.user._id) {
      toast({ title: "File is not selected 😵" })
      return
    }
    if (!parentFolder?.parentFolder) {
      toast({ title: "Get inside a folder first 😵" })
      return
    }
    try {
      const data = new FormData()
      if ((file.size / (1024 * 1024)) > 4) {
        toast({ title: "File should be less than 4mb 📄" })
        return
      }
      data.append("fileData", file)
      await saveFile(data, user?.user._id, parentFolder.parentFolder)
    } catch (err) {
      toast({ title: "Something went wrong", variant: "destructive" })
      console.log(err)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e?.target?.files[0])
  }
  return (
    <div>
      <div className="grid items-center gap-1.5">
        <Input id="fileInput" type="file" onChange={handleFileInputChange} />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={handleFileSubmit} >Upload</Button>
        </DialogClose>
      </DialogFooter>
    </div>
  )
}

export default FileInput
