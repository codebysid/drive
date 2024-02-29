"use client"
import { saveFile } from '@/actions/file'
import { Input } from "@/components/ui/input"
import useParentFolder from '@/hooks/useParentFolder'
import useUser from '@/hooks/useUser'
import { DialogClose } from '@radix-ui/react-dialog'
import dynamic from 'next/dynamic'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Loader from "../components/Loader"
import { Button } from './ui/button'
import { DialogFooter } from './ui/dialog'
import { useToast } from './ui/use-toast'

const FileInput = ({ setOpenDialog }: { setOpenDialog: Dispatch<SetStateAction<boolean>> }) => {
  const [file, setFile] = useState<File>()
  const [loading, setLoading] = useState(false)
  const user = useUser()
  const parentFolder = useParentFolder()
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
      if ((file.size / (1024 * 1024)) > 4) {
        toast({ title: "File should be less than 4mb 📄" })
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
      toast({ title: "Something went wrong", variant: "destructive" })
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
