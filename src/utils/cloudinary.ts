import { v2 as cloudinary } from "cloudinary"
import { unlinkSync } from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})


const uploadOnCloudinary = async (localPath: string, owner: string) => {
  if (!localPath) return null
  console.log("local path is", localPath)
  try {
    console.log("Starting cloudinary upload");
    const res = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
      folder: owner,
    });
    console.log({ res });

    // Check if the response is valid
    if (!res || !res.public_id) {
      throw new Error("Invalid Cloudinary response");
    }

    return res;
  } catch (err) {
    console.log("cloudinary error", err);
    throw err;
  } finally {
    unlinkSync(localPath);
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
