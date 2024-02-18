"use client"
import { getFolders } from '@/actions/folder'
import useUser from './useUser'
import { useEffect, useState } from 'react'
import useParentFolder from './useParentFolder'

const dummy = [{
  results: [
    {
      name: ""
    }
  ]
}]

const useFolder = () => {
  const [folderData, setFolderData] = useState([])
  const user = useUser()
  const parentFolder = useParentFolder()

  const handleGetFolders = async () => {
    try {
      const data = await getFolders(user?.user?.email, parentFolder?.parentFolder)
      if (!data) {
        console.log(console.log("no data"))
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
