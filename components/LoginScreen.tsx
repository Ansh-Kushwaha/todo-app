'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className="bg-slate-50 dark:bg-[#121212] text-gray-800 dark:text-slate-100 h-screen flex flex-col items-center justify-center text-center">
        <Image src='icon.svg' alt="ToDo App" width={80} height={80} />
        <p className="text-sm font-semibold my-1">Welcome to Todo App</p>
        <p className="text-sm my-1">Log in with your Google account to continue</p>
        <button className="btn btn-neutral btn-sm mt-5 text-gray-50"
          onClick={() => signIn('google')}
        >
          Log in
        </button>
    </div>
  ) 
}

export default Login