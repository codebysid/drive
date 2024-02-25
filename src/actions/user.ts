"use server"

import User from "@/models/User.model"
import connectToMongoDb from "@/utils/connectMongoDb"
import { getHash } from "@/utils/passwords"


export async function createUser(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) throw new Error("Credentials not found")
  await connectToMongoDb(process.env.MONGODB_URI as string)
  const hashedPassword = await getHash(password as string)
  const user = await User.create({
    email, password: hashedPassword
  })
  return user
}

export async function createGoogleUser(email: string) {
  if (!email) throw new Error("no email found")
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    const checkUser = await User.findOne({ email })
    if (checkUser) return null
    const user = await User.create({
      email, password: "google"
    })
    return user
  } catch (err) {
    console.log(err)
  }
}

export async function getUser(email: string) {
  if (!email) throw new Error("no email found")
  try {
    await connectToMongoDb(process.env.MONGODB_URI as string)
    const user = await User.findOne({ email })
    if (!user) return "No User Found"
    return JSON.parse(JSON.stringify(user))
  } catch (err) {
    console.log(err)
  }
}
