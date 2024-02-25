"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'
import useParentFolder from './useParentFolder'
import { useToast } from '@/components/ui/use-toast'

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
      const data = await getFolders(user?.user?.email, parentFolder?.parentFolder)
      if (!data) {
        setFolderData([])
      }
      else setFolderData(data[0]?.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (user?.user && user?.user?._id) handleGetFolders()
  }, [user, parentFolder?.parentFolder])

  return folderData
}

export default useFolder
