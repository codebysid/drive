"use client"
import { createUser } from '@/actions/user';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useToast } from './ui/use-toast';

const SigninAndCreateCard = () => {
  const { toast } = useToast()
  const handleUser = (formData: FormData) => {
    signIn('credentials', { email: formData.get("email"), password: formData.get("password") })
  }
  const handleCreateUser = async (formData: FormData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    if (!email || !password) {
      toast({ title: "Email and Pssword required 😖" })
      return
    }
    try {
      await createUser(formData)
      toast({ title: "User Created 👍" })
    } catch (err) {
      toast({ title: "Something went wrong", variant: "destructive" })
      console.log(err)
    }
  }
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">SignIn</TabsTrigger>
        <TabsTrigger value="password">Create Account</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2">
            <form className='flex flex-col gap-4 pt-5' action={handleUser}>
              <Button onClick={() => signIn('google')} type="button" variant='iconButton'>
                <FaGoogle />
                Sign Up with Google</Button>
              <span className='text-center'>or</span>
              <Input placeholder='Enter email' type='email' name='email' required />
              <Input placeholder='Enter password' type='password' name='password' required />
              <Button type='submit'>sign in</button>
            </form>

          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2">
            <form action={createUser} className='flex flex-col gap-4 pt-5'>
              <Input placeholder='Enter email' name='email' type='email' required />
              <Input placeholder='Enter password' name='password' type='password' required />
              <Button type="submit">Create Account</Button>
            </form>

          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>

  )
}

export default SigninAndCreateCard
