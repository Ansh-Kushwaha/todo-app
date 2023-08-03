'use client'

import { signOut } from "next-auth/react"
import Image from "next/image"
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar() {
  return (
    <div className="h-12 w-full flex flex-row justify-between px-4 items-center bg-gray-100 rounded-b-lg shadow-lg">
        <div className='flex flex-row items-center text-2xl font-sans font-bold text-gray-800'>
          <Image src = 'icon.svg' width={32} height={32} alt="icon" />
          {/* Todo App */}
        </div>
        <button className="btn btn-sm btn-square btn-neutral btn-outline text-gray-50"
          onClick={() => signOut()}
        >
          <GiHamburgerMenu className='h-6 w-6 fill-gray-600' />
        </button>
    </div>
  )
}

export default NavBar