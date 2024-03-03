"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <Button variant="ghost" size="sm" className='w-full text-red-700' onClick={() => signOut()}>Sign Out</Button>
  )
}

export default SignOutButton
