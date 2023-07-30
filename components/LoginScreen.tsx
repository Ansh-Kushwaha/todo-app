'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className=" bg-white text-gray-800 h-screen flex flex-col items-center justify-center text-center">
        {/* <Image src={icon} alt="ChatGPT 2.0" width={40} height={40} className="my-5" /> */}
        <p className="text-sm font-semibold my-1">Welcome to Todo App</p>
        <p className="text-sm my-1">Log in with your Google account to continue</p>
        <button className="btn btn-neutral btn-sm text-gray-50"
          onClick={() => signIn('google')}
        >
          Log in
        </button>
    </div>
  )
}

export default Login