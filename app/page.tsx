'use client'

import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const name: string | null | undefined = session?.user?.name;

  return (
    <div className="w-1/2 min-w-[320px] h-fit max-h-full mx-auto mt-4 bg-slate-50 rounded-lg shadow-lg">
      <div className="flex flex-col text-center my-5 gap-4">
        <h1 className="text-2xl font-bold text-black">
          {session && `${name?.split(' ').slice(0, 1)}'s `}
          Todo List
        </h1>
        <div className='pb-4'>
          <AddTask />
        </div>
          <TodoList />
      </div>
    </div>
  )
}
