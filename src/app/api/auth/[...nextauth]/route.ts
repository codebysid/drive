import { createGoogleUser } from "@/actions/user"
import User from "@/models/User.model"
import connectToMongoDb from "@/utils/connectMongoDb"
import { compareHash } from "@/utils/passwords"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials as { email: string, password: string }
          if (!email || !password) return null
          await connectToMongoDb(process.env.MONGODB_URI as string)
          const user = await User.findOne({ email })
          if (!user) return null
          const checkPassword = await compareHash(password, user.password)
          if (!checkPassword) return null
          const userToSend = JSON.parse(JSON.stringify(user))
          delete userToSend.password
          return userToSend
        } catch (err) {
          console.log(err)
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session }) {
      if (!session || !session.user) return session
      await createGoogleUser(session.user.email as string)
      return session
    }
  },
  pages: {
    signIn: "/"
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
