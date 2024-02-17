"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'


const useFolder = () => {
  const [folderData, setFolderData] = useState([])
  const user = useUser()

  const handleGetFolders = async () => {
    try {
      const data = await getFolders(user?.user?.email)
      setFolderData(data[0].results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (user?.user && user?.user?._id) handleGetFolders()
  }, [user])

  return folderData
}

export default useFolder
