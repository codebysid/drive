"use server"
import Folder from "@/models/Folder.model"
import User from "@/models/User.model"
import connectToMongoDb from "@/utils/connectMongoDb"
import { ObjectId } from "mongoose"
import { revalidateTag, revalidatePath } from "next/cache"

export async function createFolder(folderName: string, parentFolder: ObjectId | undefined, owner: ObjectId, subFolder: ObjectId | undefined) {

  if (!folderName || !owner) throw new Error("401: foldername and owner required")

  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    await Folder.create({
      name: folderName,
      owner,
      ...(subFolder && { subFolder }
      ),
      ...(parentFolder && { parentFolder })
    })
    revalidatePath("/dash")
  } catch (err) {
    console.log(err)
  }
}

export async function getFolders(ownerEmail: string) {
  if (!ownerEmail) throw new Error("401:Owner Email not found")
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    const folders = await User.aggregate([
      {
        $match: {
          email: ownerEmail
        }
      },
      {
        $lookup: {
          from: "folders",
          localField: "_id",
          foreignField: "owner",
          as: "results"
        }
      }
    ])
    console.log(folders)
    return JSON.parse(JSON.stringify(folders))
  } catch (err) {
    console.log(err)
  }
}
