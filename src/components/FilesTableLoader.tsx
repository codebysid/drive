import React from 'react'
import { Skeleton } from './ui/skeleton'
import { TableRow, TableCell } from "./ui/table"

const FilesTableLoader = () => {
  return (
    <TableRow className='flex flex-row gap-3 w-[90vw] mb-5'>
      <TableCell>
        <Skeleton className='h-10 w-[30%]' />
      </TableCell>
      <TableCell>
        <Skeleton className='h-10 w-[20%]' />
      </TableCell>
      <TableCell>
        <Skeleton className='h-10 w-[20%]' />
      </TableCell>
      <TableCell>
        <Skeleton className='h-10 w-[20%]' />
      </TableCell>
    </TableRow>
  )
}

export default FilesTableLoader
