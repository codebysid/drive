"use client"
import { ObjectId } from 'mongoose'
import React, { useState } from 'react'

type TParentFolderContext = {
  parentFolder: ObjectId | null,
  updateParentFolder: (folderId: ObjectId | null) => void
}

type TParentFolderProvider = {
  children: React.ReactNode
}

export const PARENT_FOLDER_CONTEXT = React.createContext<TParentFolderContext | null>(null)

const ParentFolderProvider: React.FC<TParentFolderProvider> = ({ children }) => {
  const [parentFolderId, setParentFolderId] = useState<ObjectId | null>(null)

  const updateParentFolder = (folderId: ObjectId | null) => {
    setParentFolderId(folderId)
  }
  return (
    <PARENT_FOLDER_CONTEXT.Provider value={{ parentFolder: parentFolderId, updateParentFolder }}>
      {children}
    </PARENT_FOLDER_CONTEXT.Provider>
  )
}

export default ParentFolderProvider
