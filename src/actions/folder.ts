"use server"
import Folder from "@/models/Folder.model"
import User from "@/models/User.model"
import connectToMongoDb from "@/utils/connectMongoDb"
import mongoose, { ObjectId, isValidObjectId } from "mongoose"
import { revalidatePath } from "next/cache"

export async function createFolder(folderName: string, parentFolder: ObjectId | undefined, owner: ObjectId, subFolder: ObjectId | undefined) {

  if (!folderName || !owner) throw new Error("foldername and owner required")

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

export async function getFolders(ownerEmail: String, parentFolderId: ObjectId | undefined = undefined) {
  if (!ownerEmail) throw new Error("OwnerEmail is not specified")
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    if (parentFolderId && isValidObjectId(parentFolderId)) {
      const folders = await Folder.aggregate([
        {
          $match: {
            parentFolder: parentFolderId
          }
        },
        {
          $group: {
            _id: null,
            results: { $push: "$$ROOT" }
          }
        },
        {
          $project: {
            _id: 0
          }
        }
      ])
      return JSON.parse(JSON.stringify(folders))
    } else {
      const folders = await User.aggregate([
        {
          $match: {
            email: ownerEmail,
          }
        },
        {
          $lookup: {
            from: "folders",
            localField: "_id",
            foreignField: "owner",
            as: "results"
          }
        },
        {
          $project: {
            results: {
              $filter: {
                input: "$results",
                as: "folder",
                cond: {
                  $eq: [{
                    $type: "$$folder.parentFolder"
                  }, "missing"]
                }
              }
            }
          }
        }
      ])
      return JSON.parse(JSON.stringify(folders))
    }
  } catch (err) {
    console.log(err)
  }
}
