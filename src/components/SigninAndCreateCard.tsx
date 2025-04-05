import { Button } from "@/components/ui/button";
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { handleGoogleSigninServerAction } from '@/actions/authActions';

const SigninAndCreateCard = () => {
  return (
    <div>
      <Button onClick={handleGoogleSigninServerAction} type="button" className="h-6 lg:h-9 md:h-9 text-xs lg:text-normal md:text-normal flex items-center">
        <FaGoogle className=" size-3 lg:size-4 md:size-4" />
        Sign Up with Google
      </Button>
    </div>

  )
}

export default SigninAndCreateCard
