"use client"
import { ObjectId } from 'mongoose'
import React, { useState } from 'react'

type TParentFolderContext = {
  parentFolder: ObjectId | boolean,
  updateParentFolder: (folderId: ObjectId) => void
}

type TParentFolderProvider = {
  children: React.ReactNode
}

export const PARENT_FOLDER_CONTEXT = React.createContext<TParentFolderContext | undefined>(undefined)

const ParentFolderProvider: React.FC<TParentFolderProvider> = ({ children }) => {
  const [parentFolderId, setParentFolderId] = useState<ObjectId | boolean>(false)

  const updateParentFolder = (folderId: ObjectId) => {
    setParentFolderId(folderId)
  }
  return (
    <PARENT_FOLDER_CONTEXT.Provider value={{ parentFolder: parentFolderId, updateParentFolder }}>
      {children}
    </PARENT_FOLDER_CONTEXT.Provider>
  )
}

export default ParentFolderProvider
