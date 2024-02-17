import { ObjectId } from "mongoose";

export type TFolders = {
  _id: ObjectId,
  name: String,
  owner: ObjectId,
  parentFolder?: ObjectId,
  subFolder?: ObjectId,
}
