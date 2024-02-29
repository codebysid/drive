"use server"
import connectToMongoDb from "@/utils/connectMongoDb"
import { ObjectId } from "mongoose"
import { revalidatePath } from "next/cache"
import File from "../models/File.model"
import uploadOnCloudinary, { deleteFileFromCloudinary } from "../utils/cloudinary"

export const saveFile = async (formData: FormData, owner: ObjectId, parentFolder: ObjectId) => {
  if (!formData || !owner) throw new Error("formData and owner required")
  try {
    const localPath = await saveFileLocally(formData)
    const res = await uploadOnCloudinary(localPath as string, String(owner))
    const file = formData.get("fileData") as File
    if (!res) throw new Error("cant upload on cloudinary")
    const format = res.format || undefined
    await saveFileOnMongo(res.url, owner, parentFolder, file.name, res.bytes, format, res.public_id)
    revalidatePath("/dash")
  } catch (err) {
    console.log(err)
  }
}

export const saveFileLocally = async (formData: FormData) => {
  try {
    const file = formData.get("fileData") as File
    if (!file) return
    const bytes = await file.arrayBuffer()
    const mime = file.type
    const encoding = 'base64';
    const buffer = Buffer.from(bytes).toString('base64')
    const fileUri = 'data:' + mime + ';' + encoding + ',' + buffer;
    return fileUri
  } catch (err) {
    console.log(err)
  }
}

export const saveFileOnMongo = async (url: string, owner: ObjectId, parentFolder: ObjectId, fileName: string, bytes: Number, format: string | undefined, cloudinaryPublicId: string) => {
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    await File.create({
      url, owner, parentFolder, name: fileName, bytes, format: format, cloudinaryPublicId
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
