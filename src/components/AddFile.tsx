import dynamic from 'next/dynamic'
import React from 'react'
const AddComponent = dynamic(() => import("./AddComponent"))

const AddFile = () => {
  return (
    <AddComponent title='Add File' />
  )
}

export default AddFile
