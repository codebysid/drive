"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'
import useParentFolder from './useParentFolder'
import { useToast } from '@/components/ui/use-toast'
import { ObjectId } from 'mongoose'

type TData = {
  _id: ObjectId,
  owner: ObjectId,
  name: string,
  results: []
}

const useFolder = () => {
  const [folderData, setFolderData] = useState([])
  const user = useUser()
  const parentFolder = useParentFolder()
  const { toast } = useToast()

  const handleGetFolders = async () => {

    if (!user?.user._id) {
      toast({ title: "Login Pls 🤦" })
      return
    }

    try {
      let data: TData[] = []
      if (!parentFolder?.parentFolder) data = await getFolders(user?.user?.email, undefined)
      else data = await getFolders(user?.user?.email, parentFolder?.parentFolder)
      if (!data) {
        setFolderData([])
      }
      else setFolderData(data[0]?.results)
    } catch (err) {

      toast({ title: "Something went wrong", variant: "destructive" })
      console.log(err)
    }
  }

  useEffect(() => {
    if (user?.user && user?.user?._id) handleGetFolders()
  }, [user, parentFolder?.parentFolder])

  return folderData
}

export default useFolder
