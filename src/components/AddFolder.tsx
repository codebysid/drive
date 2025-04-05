import dynamic from 'next/dynamic'
import React from 'react'
const AddComponent = dynamic(() => import("./AddComponent"))

const AddFolder = () => {
  return (
    <AddComponent title='Create Folder' />
  )
}

export default AddFolder

