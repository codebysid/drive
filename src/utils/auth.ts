import { createGoogleUser } from "../actions/user"
// import User from "../models/User.model"
// import connectToMongoDb from "./connectMongoDb"
// import { compareHash } from "./passwords"
import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import GoogleProvider from "next-auth/providers/google"
import authConfig from "../utils/auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt"
  },
  ...authConfig,
  // providers: [
  //   CredentialsProvider({
  //     name: "credentials",
  //     credentials: {},
  //     authorize: async (credentials) => {
  //       try {
  //         const { email, password } = credentials as { email: string, password: string }
  //         if (!email || !password) return null
  //         await connectToMongoDb(process.env.MONGODB_URI as string)
  //         const user = await User.findOne({ email })
  //         if (!user) return null
  //         const checkPassword = await compareHash(password, user.password)
  //         if (!checkPassword) return null
  //         const userToSend = JSON.parse(JSON.stringify(user))
  //         delete userToSend.password
  //         return userToSend
  //       } catch (err) {
  //         console.log(err)
  //         return null
  //       }
  //     }
  //   }),
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_CLIENT_ID as string,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
  //   })
  // ],
  callbacks: {
    async session({ session }) {
      console.log("1:auth.ts", { session })
      if (!session || !session.user) return session
      await createGoogleUser(session.user.email as string)
      console.log("2:auth.ts", { session })
      return session
    }
  },
  pages: {
    signIn: "/"
  }
})

