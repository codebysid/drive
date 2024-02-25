import { Schema, model, models } from "mongoose";

const fileSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  bytes: {
    type: Number,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  cloudinaryPublicId: {
    type: String,
    required: true
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

const File = models.File || model("File", fileSchema)
export default File
