"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <Button variant="signOutButton" className='w-full lg:text-xl lg:underline lg:underline-offset-8' onClick={() => signOut()}>Sign Out</Button>
  )
}

export default SignOutButton
