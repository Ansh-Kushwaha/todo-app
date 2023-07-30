'use client'

import { signOut } from "next-auth/react"
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar() {
  return (
    <div className="h-12 w-full flex flex-row justify-between px-2 items-center bg-gray-100 rounded-b-lg shadow-lg">
        <div className='text-2xl font-sans font-bold text-gray-800'>Todo App</div>
        <button className="btn btn-sm btn-square btn-neutral btn-outline text-gray-50"
          onClick={() => signOut()}
        >
          <GiHamburgerMenu className='h-6 w-6 fill-gray-800' />
        </button>
    </div>
  )
}

export default NavBar