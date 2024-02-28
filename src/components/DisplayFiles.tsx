"use client"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useFiles from '@/hooks/useFiles'
import dynamic from 'next/dynamic'
import React from 'react'
import FilesTableLoader from './FilesTableLoader'
const FileCard = dynamic(() => import("./FileCard"), {
  loading: () => <FilesTableLoader />
})

const DisplayFiles = () => {
  const files = useFiles()
  return (
    <div className='flex flex-col gap-3 h-[60vh] overflow-auto'>
      {
        files.length > 0 && <h1 className='subHeading'>Your file's ↴</h1>
      }
      {
        files.length > 0 && <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[300px]'>Name</TableHead>
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
