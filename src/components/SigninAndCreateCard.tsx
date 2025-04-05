import { Button } from "@/components/ui/button";
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { handleGoogleSigninServerAction } from '@/actions/authActions';

const SigninAndCreateCard = () => {
  return (
    <div>
      <Button onClick={handleGoogleSigninServerAction} type="button" className="text-xs lg:text-normal md:text-normal">
        <FaGoogle />
        Sign Up with Google
      </Button>
    </div>

  )
}

export default SigninAndCreateCard
