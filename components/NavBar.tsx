'use client'

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { data: session } = useSession();

  return (
    <div className="h-12 w-full flex flex-row justify-between px-4 items-center bg-gray-100 dark:bg-[#121212] backdrop-blur-sm rounded-b-lg shadow-lg dark:shadow-sm dark:shadow-[#4a4a4a]">
        <div className='flex flex-row items-center text-2xl font-sans font-bold text-gray-800'>
          <Image src = 'icon.svg' width={32} height={32} alt="icon" />
          {/* Todo App */}
        </div>
        <button className="btn btn-sm btn-square btn-ghost text-gray-50"
          onClick={() => {setShowMenu(!showMenu)}}
        >
          <GiHamburgerMenu className='h-6 w-6 fill-gray-600 dark:fill-gray-300' />
        </button>
        {showMenu && 
        <div className='absolute top-[64px] right-[10px] flex flex-col items-center rounded-md w-[120px] h-fit shadow-lg z-10 backdrop-blur-xl'>
          <div>
            {session && 
            <img src={session?.user?.image!} width={64} height={64} className='mt-4 rounded-full hover:cursor-pointer' />
            }
          </div>
          <div className='flex justify-center items-center text-sm font-semibold text-gray-800 dark:text-slate-50'>
            {session && session?.user?.name}
          </div>
          <button className='btn btn-neutral btn-sm text-gray-50 text-sm my-5'
            onClick={() => {signOut()}}
          >
            Logout
          </button>
        </div>
        }
    </div>
  )
}

export default NavBar