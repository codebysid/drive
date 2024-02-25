"use client"
import useFiles from '@/hooks/useFiles'
import React, { useEffect } from 'react'
import FileCard from './FileCard'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useParentFolder from '@/hooks/useParentFolder'

const DisplayFiles = () => {
  let files = useFiles()
  const { parentFolder } = useParentFolder()

  return (
    <div className='flex flex-row flex-wrap gap-3'>
      {
        files.length > 0 && <h1 className='subHeading'>Your file's ↴</h1>
      }
      {
        files.length > 0 && <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Size</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              files && files.map((curr, key) => {
                return <FileCard key={key} fileData={curr} />
              })
            }
          </TableBody>
        </Table>
      }
    </div>
  )
}

export default DisplayFiles
