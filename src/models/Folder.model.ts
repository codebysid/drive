import { Schema, model, models } from "mongoose";

const folderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subFolder: {
    type: Schema.Types.ObjectId,
    ref: "Folder"
  },
  parentFolder: {
    type: Schema.Types.ObjectId,
    ref: "Folder"
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true })

const Folder = models.Folder || model("Folder", folderSchema)

export default Folder
