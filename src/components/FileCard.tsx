import { ObjectId } from 'mongoose'
import React from 'react'
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { bytesToMb } from '@/utils/bytesToMb'
import Link from 'next/link'
import { formatTimeStamp } from '@/utils/formatTimeStamp'

type TFile = {
  name: string,
  url: string,
  _id: ObjectId,
  parentFolder: ObjectId,
  owner: ObjectId,
  bytes: Number,
  format: string,
  createdAt: EpochTimeStamp
}

type TFileData = {
  fileData: TFile
}

const FileCard: React.FC<TFileData> = ({ fileData }) => {
  return (
    <TableRow key={fileData.name} className='flex-1'>
      <Link href={fileData.url} target='_blank' passHref legacyBehavior>
        <TableCell className="font-medium text-blue-500 hover:underline">{fileData.name}</TableCell>
      </Link>
      <TableCell>{fileData.format}</TableCell>
      <TableCell>{bytesToMb(fileData.bytes as number)} MB</TableCell>
      <TableCell className="text-right">{formatTimeStamp(fileData.createdAt)}</TableCell>
    </TableRow>
  )
}

export default FileCard
