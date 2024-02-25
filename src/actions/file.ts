"use server"
import { ObjectId, mongo } from "mongoose"
import uploadOnCloudinary, { deleteFileFromCloudinary } from "../utils/cloudinary"
import { writeFile } from "fs/promises"
import { join } from "path"
import { existsSync, mkdir } from "fs"
import { nanoid } from 'nanoid'
import connectToMongoDb from "@/utils/connectMongoDb"
import File from "../models/File.model"
import { revalidatePath } from "next/cache"

export const saveFile = async (formData: FormData, owner: ObjectId, parentFolder: ObjectId) => {
  if (!formData || !owner) throw new Error("formData and owner required")
  try {
    const localPath = await saveFileLocally(formData)
    const res = await uploadOnCloudinary(localPath as string, String(owner))
    const file = formData.get("fileData") as File
    if (!res) throw new Error("cant upload on cloudinary")
    await saveFileOnMongo(res.url, owner, parentFolder, file.name, res.bytes, res.format, res.public_id)
    revalidatePath("/dash")
  } catch (err) {
    console.log(err)
  }
}

export const saveFileLocally = async (formData: FormData) => {
  try {
    const id = nanoid()
    const file = formData.get("fileData") as File
    if (!file) return
    const fileDirectory = join(process.cwd(), "/public/temp/")
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    if (!existsSync(fileDirectory)) {
      mkdir(fileDirectory, { recursive: true }, function() { })
    }
    await writeFile(`${fileDirectory}/${id}_${file.name}`, buffer)
    return `${fileDirectory}/${id}_${file.name}`
  } catch (err) {
    console.log(err)
  }
}

export const saveFileOnMongo = async (url: string, owner: ObjectId, parentFolder: ObjectId, fileName: string, bytes: Number, format: string, cloudinaryPublicId: string) => {
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    await File.create({
      url, owner, parentFolder, name: fileName, bytes, format, cloudinaryPublicId
    })
  } catch (err) {
    console.log(err)
  }
}

export const getFiles = async (parentFolder: ObjectId, owner: ObjectId) => {
  if (!parentFolder || !owner) throw new Error("parentFolder and owner id required")
  try {
    const files = await File.find({ parentFolder, owner })
    return JSON.parse(JSON.stringify(files))
  } catch (err) {
    console.log(err)
  }
}

export const deleteFile = async (mongoId: ObjectId, cloudinaryPublicId: String) => {
  if (!mongoId || !cloudinaryPublicId) throw new Error("mongoid/cloudinaryPublicId required")
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    await File.deleteOne({ _id: mongoId })
    await deleteFileFromCloudinary(cloudinaryPublicId as string)
  } catch (err) {
    console.log(err)
  }

}
