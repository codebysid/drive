import { v2 as cloudinary } from "cloudinary"
import { unlinkSync } from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadOnCloudinary = async (localPath: string, owner: string) => {
  if (!localPath) return null
  try {
    const res = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder: owner,
    })
    return res
  } catch (err) {
    console.log(err)
  } finally {
    unlinkSync(localPath)
  }
}

export default uploadOnCloudinary
