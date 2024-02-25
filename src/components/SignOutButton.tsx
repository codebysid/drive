"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <Button variant="signOutButton" className='w-full md:text-xl lg:text-xl md:underline md:underline-offset-8 lg:underline lg:underline-offset-8' onClick={() => signOut()}>Sign Out</Button>
  )
}

export default SignOutButton
