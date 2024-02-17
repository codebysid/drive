"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Href from '@/components/Href'
import { signIn } from 'next-auth/react'
import { FaGoogle } from "react-icons/fa";

function Signin() {
  const handleUser = (formData: FormData) => {
    signIn('credentials', { email: formData.get("email"), password: formData.get("password") })
  }

  return (
    <div>
      <h1>Sign in to Google Drive</h1>
      <form className='flex flex-col gap-4' action={handleUser}>
        <Input placeholder='Enter email' type='email' name='email' required />
        <Input placeholder='Enter password' type='password' name='password' required />
        <Button type='submit'>Sign in</Button>

        <Button onClick={() => signIn('google')} type="button" variant='iconButton'>
          <FaGoogle />
          Sign Up with Google</Button>
      </form>
      <Href href='/create' title="Don't have an account ?" callToAction='Create Now' />
    </div>
  )

}

export default Signin
