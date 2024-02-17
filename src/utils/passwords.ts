import bcrypt from "bcryptjs"

const salt = 10
export async function getHash(plainPassword: string) {
  try {
    const hash = await bcrypt.hash(plainPassword, salt)
    return hash
  } catch (err) {
    console.log(err)
  }
}

export async function compareHash(plainPassword: string, hashedPassword: string) {
  try {
    const res = await bcrypt.compare(plainPassword, hashedPassword)
    return res
  } catch (err) {
    console.log(err)
    return false
  }
} 
