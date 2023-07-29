import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-4 bg-slate-50 rounded-lg">
      <div className="flex flex-col text-center my-5 gap-4">
        <h1 className="text-2xl font-bold text-black">Todo List</h1>
        <AddTask />
        <TodoList />
      </div>
    </main>
  )
}
