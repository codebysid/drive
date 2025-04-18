import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { bytesToMb } from '@/utils/bytesToMb'
import { formatTimeStamp } from '@/utils/formatTimeStamp'
import { ObjectId } from 'mongoose'
import dynamic from "next/dynamic"
import Link from 'next/link'
import React from 'react'
const DeleteFile = dynamic(() => import("./DeleteFile"))

type TFile = {
  name: string,
  url: string,
  _id: ObjectId,
  parentFolder: ObjectId,
  owner: ObjectId,
  bytes: Number,
  format: string,
  createdAt: EpochTimeStamp,
  cloudinaryPublicId: string,
}

type TFileData = {
  fileData: TFile
}

const FileCard: React.FC<TFileData> = ({ fileData }) => {
  return (
    <TableRow key={fileData.name} className='flex-1'>
      <TableCell className="font-medium text-blue-500 hover:underline">
        <Link href={fileData.url} target='_blank' passHref>
          {fileData.name}
        </Link>
      </TableCell>
      <TableCell>{fileData.format ? fileData.format : fileData.name.split(".").at(-1)}</TableCell>
      <TableCell>{bytesToMb(Number(fileData.bytes))} mB</TableCell>
      <TableCell className="text-right">{formatTimeStamp(fileData.createdAt)}</TableCell>
      <TableCell><DeleteFile mongoId={fileData._id} cloudinaryPublicId={fileData.cloudinaryPublicId} /></TableCell>

    </TableRow >

  )
}

export default FileCard
