import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'
import SignOutButton from './SignOutButton'

const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='flex flex-row items-center justify-between'>
      <h1>Hello {session?.user?.name?.split(" ")[0] || session?.user?.email}</h1>
      <SignOutButton />
    </div>
  )
}

export default Navbar
