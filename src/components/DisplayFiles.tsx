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
import useParentFolder from "@/hooks/useParentFolder"
const FileCard = dynamic(() => import("./FileCard"), {
  loading: () => <FilesTableLoader />
})

const DisplayFiles = () => {
  const files = useFiles()
  const parentFolder = useParentFolder()

  const styles = {
    listMarker: "before:content-['🔥']"
  }

  return (
    <div className='flex flex-col gap-3 max-h-screen min-h-screen w-full overflow-y-auto'>
      {
        (!parentFolder?.parentFolder) ? <ul>
          <li className={`${styles.listMarker}`}>
            You are at root of the project
          </li>
          <li className={`${styles.listMarker}`}>
            Files can only be uploaded inside a folder only
          </li>
          <li className={`${styles.listMarker}`}>
            So, create a folder or go inside an existing folder and start uploading files
          </li>
          <li className={`${styles.listMarker}`}>
            Do not upload any private/sensitive file, Next Drive is just a cool side project
          </li>
        </ul> : <p>Start Uploading files</p>
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
              files?.length > 0 && files.map((curr, key) => {
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
