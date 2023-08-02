"use client"

import { Button } from '@/components/ui/button'
import { useUser } from "@clerk/nextjs";
import  Link  from 'next/link';

const LandingPage = () => {
   const { user } = useUser();
  return (
    <div>
      Landing page (Unprotected)
      <div>
        {user && (
          <p>You are already log in. Go check <Link className='font-bold underline' href="/dashboard">dashboard </Link></p>
        )}

        {!user && (
          <>
            <Link href="/sign-in">
              <Button>Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Register</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default LandingPage
