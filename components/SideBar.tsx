'use client'

import { useSession } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  
  return (
    <div className='bg-gray-200 w-1/6 min-w-[200px] sm:flex flex-col justify-start items-center hidden h-screen shadow-md'>
      <div className='pt-12'>
      {session && (
        <img src={session.user?.image!} alt = "Profile Picture" 
          className="h-24 w-24 rounded-xl cursor-pointer hover:opacity-50 ml-[0.5]"
        />        
      )}
      </div>
      {session && (
        <div className='text-gray-800 font-semibold text-xl pt-2'>
          {session.user?.name!}
        </div>)}
    </div>
  )
}

export default SideBar