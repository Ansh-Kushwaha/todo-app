'use client'

import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="w-1/2 min-w-[320px] mx-auto mt-4 bg-slate-50 rounded-lg shadow-lg">
      <div className="flex flex-col text-center my-5 gap-4">
        <h1 className="text-2xl font-bold text-black">Todo List</h1>
        <AddTask />
        <TodoList />
      </div>
    </div>
  )
}
