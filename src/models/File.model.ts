import { Schema, model, models } from "mongoose";

const fileSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  parentFolder: {
    type: Schema.Types.ObjectId,
    ref: "Folder"
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const File = models.File || model("File", fileSchema)
export default File
