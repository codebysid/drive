"use client"
import { getUser } from '@/actions/user'
import { ObjectId } from 'mongoose'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
type TUserProvider = {
  children: React.ReactNode
}

type TContext = {
  email: String,
  password: String,
  _id: ObjectId | undefined

}

export const USERCONTEXT = React.createContext<
  { user: TContext } | undefined
>(undefined)

const UserProvider: React.FC<TUserProvider> = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "", _id: undefined })
  const session = useSession()

  const handleUserUpdate = async (email: string) => {
    const currUser = await getUser(email)
    setUser(currUser)
  }
  useEffect(() => {
    if (session && session.data?.user?.email) handleUserUpdate(session.data?.user?.email as string)
  }, [session])
  return (
    <USERCONTEXT.Provider value={{ user }}>
      {children}
    </USERCONTEXT.Provider>
  )
}

export default UserProvider
