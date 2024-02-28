import React from 'react'
import { Skeleton } from './ui/skeleton'

const FilesTableLoader = () => {
  return (

    <div className='flex flex-row gap-3 w-[90vw] mb-5'>
      <Skeleton className='h-10 w-[30%]' />
      <Skeleton className='h-10 w-[20%]' />
      <Skeleton className='h-10 w-[20%]' />
      <Skeleton className='h-10 w-[20%]' />
    </div>
  )
}

export default FilesTableLoader
