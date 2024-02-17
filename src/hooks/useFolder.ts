"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'

const useFolder = () => {
  const [folderData, setFolderData] = useState([])
  const user = useUser()

  const handleGetFolders = async () => {
    try {
      const data = await getFolders(user.email)
      setFolderData(data[0].results)
    } catch (err) {
      console.log(err)
    }
  }

  console.log("usefolder se hu bhnchod")
  useEffect(() => {
    console.log("chl toh rha hu useFolder")
    if (user && user._id) handleGetFolders()
  }, [user, getFolders])
  return folderData
}

export default useFolder
