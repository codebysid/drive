"use client"
import { PARENT_FOLDER_CONTEXT } from '@/context/ParentFolderProvider'
import { useContext } from 'react'

const useParentFolder = () => {
  const value = useContext(PARENT_FOLDER_CONTEXT)
  return value
}

export default useParentFolder
