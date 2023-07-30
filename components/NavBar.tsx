'use client'

import { signOut } from "next-auth/react"

function NavBar() {
  return (
    <div className="h-12 w-full flex flex-row justify-between px-2 items-center bg-gray-100 rounded-b-lg shadow-lg">
        <div className='text-2xl font-sans font-bold text-gray-800'>Todo App</div>
        <button className="btn btn-sm btn-neutral text-gray-50"
          onClick={() => signOut()}
        >Logout</button>
    </div>
  )
}

export default NavBar