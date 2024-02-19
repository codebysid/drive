"use server"
import { ObjectId, isValidObjectId } from "mongoose"
import uploadOnCloudinary from "../utils/cloudinary"
import { writeFile } from "fs/promises"
import { join } from "path"
import { existsSync, mkdir } from "fs"
import { nanoid } from 'nanoid'
import connectToMongoDb from "@/utils/connectMongoDb"
import File from "../models/File.model"

export const saveFile = async (formData: FormData, owner: ObjectId, parentFolder: ObjectId) => {
  try {
    const localPath = await saveFileLocally(formData)
    const res = await uploadOnCloudinary(localPath as string, String(owner))
    if (!res) throw new Error("cant upload on cloudinary")
    await saveFileOnMongo(res.url, owner, parentFolder)
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

export const saveFileOnMongo = async (url: string, owner: ObjectId, parentFolder: ObjectId) => {
  if (!url || !isValidObjectId(owner) || !isValidObjectId(parentFolder)) return
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    await File.create({
      url, owner, parentFolder
    })
  } catch (err) {
    console.log(err)
  }
}
