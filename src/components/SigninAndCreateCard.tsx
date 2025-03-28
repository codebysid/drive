// import { createUser } from '@/actions/user';
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useToast } from './ui/use-toast';
// import { signIn } from "../utils/auth"
import { handleGoogleSigninServerAction } from '@/actions/authActions';

const SigninAndCreateCard = () => {
  const { toast } = useToast()
  // const handleUser = (formData: FormData) => {
  //   signIn('credentials', { email: formData.get("email"), password: formData.get("password") })
  // }
  // const handleCreateUser = async (formData: FormData) => {
  //   const email = formData.get("email")
  //   const password = formData.get("password")
  //   if (!email || !password) {
  //     toast({ title: "Email and Password required" })
  //     return
  //   }
  //   try {
  //     const user = await createUser(formData)
  //     if (!user) toast({ title: "Email and Password required" })

  //     toast({ title: "User Created 👍" })
  //   } catch (err) {
  //     console.log(err)

  //     toast({ title: "Something error in backend, try again later" })
  //   }
  // }

  return (
    <div>
      {/* // <Tabs defaultValue="account" className="w-full md:w-full lg:w-1/2 md:absolute lg:absolute lg:top-80 lg:left-3/4 md:top-80 md:left-3/4 z-20">
    //   <TabsList className="grid w-full grid-cols-2">
    //     <TabsTrigger value="account">SignIn</TabsTrigger>
    //     <TabsTrigger value="password">Create Account</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="account">
    //     <Card> */}
      {/* <CardContent className="space-y-2">
              <form className='flex flex-col gap-4 pt-5' action={handleUser}> */}
      <Button onClick={handleGoogleSigninServerAction} type="button" variant='iconButton'>
        <FaGoogle />
        Sign Up with Google</Button>
      {/* <span className='text-center'>or</span>
              <Input placeholder='Enter email' type='email' name='email' required />
              <Input placeholder='Enter password' type='password' name='password' required />
              <Button type='submit'>Sign in</Button> */}
      {/* </form> */}

      {/* </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2">
            <form action={handleCreateUser} className='flex flex-col gap-4 pt-5'>
              <Input placeholder='Enter email' name='email' type='email' required />
              <Input placeholder='Enter password' name='password' type='password' required />
              <Button type="submit">Create Account</Button>
            </form>

          </CardContent>
        </Card>
      </TabsContent> */}
      {/* </Tabs> */}
    </div>

  )
}

export default SigninAndCreateCard
