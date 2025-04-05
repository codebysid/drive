"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'
import useParentFolder from './useParentFolder'
import { toast } from 'sonner'
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

  const handleGetFolders = async () => {

    if (!user?.user._id) {
      toast.warning("Login Pls")
      return
    }

    try {
      if (!parentFolder?.parentFolder) {
        const data = await getFolders(user?.user?.email, undefined)
        if (!data) {
          setFolderData([])
          return
        }
        setFolderData(data[0]?.results)
        return
      }
      const data = await getFolders(user?.user?.email, parentFolder?.parentFolder)
      if (!data) {
        setFolderData([])
        return
      }
      setFolderData(data[0]?.results)
      return
    } catch (err) {

      toast.warning("Something went wrong")
      console.log(err)
    }
  }

  useEffect(() => {
    if (user?.user && user?.user?._id) handleGetFolders()
  }, [user, parentFolder])

  return folderData
}

export default useFolder
