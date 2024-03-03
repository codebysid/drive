"use client"
import { useEffect, useState } from "react"
import useUser from "./useUser"
import { getTotalFileSize } from "../actions/file"
const useFileMemory = () => {
  const user = useUser()
  const [totalFilesSize, setTotalFilesSize] = useState(0)

  const calculateFilesMemory = async () => {
    if (!user?.user._id) return
    try {
      const fileSize = await getTotalFileSize(user.user._id)
      if (!fileSize) return totalFilesSize
      setTotalFilesSize(fileSize)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    calculateFilesMemory()
  }, [user])
  return totalFilesSize
}

export default useFileMemory
