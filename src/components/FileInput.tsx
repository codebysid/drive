"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { DialogFooter } from './ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { saveFile } from '@/actions/file'
import useUser from '@/hooks/useUser'
import useParentFolder from '@/hooks/useParentFolder'

const FileInput = () => {
  const [file, setFile] = useState<File>()
  const user = useUser()
  const parentFolder = useParentFolder()

  const handleFileSubmit = async () => {
    if (!file || !user?.user._id || !parentFolder?.parentFolder) return
    try {
      const data = new FormData()
      data.append("fileData", file)
      await saveFile(data, user?.user._id, parentFolder.parentFolder)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e?.target?.files[0])
  }
  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input id="fileInput" type="file" onChange={handleFileInputChange} />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={handleFileSubmit} >Close</Button>
        </DialogClose>
      </DialogFooter>



    </>
  )
}

export default FileInput
