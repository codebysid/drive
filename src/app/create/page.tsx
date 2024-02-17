import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Href from '@/components/Href'
import { createUser } from '@/actions/user'

const page = () => {
  return (
    <div>
      <form action={createUser}>
        <Input placeholder='Enter email' name='email' type='email' />
        <Input placeholder='Enter password' name='password' type='password' />
        <Button type="submit">Create Account</Button>
        <Href href='/' title="Already have an account ?" callToAction='Sign in Now' />
      </form>

    </div>
  )
}

export default page
