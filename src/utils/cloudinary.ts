import { v2 as cloudinary } from "cloudinary"
import { unlinkSync } from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadOnCloudinary = async (localPath: string, owner: string) => {
  if (!localPath) return null
  console.log("local path is", localPath)
  try {
    const res = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder: owner,
    })
    console.log(res)
    return res
  } catch (err) {
    console.log(err)
  } finally {
    unlinkSync(localPath)
  }
}

export const deleteFileFromCloudinary = async (public_id: string) => {
  if (!public_id) return
  try {
    await cloudinary.uploader.destroy(public_id).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
}

export default uploadOnCloudinary
