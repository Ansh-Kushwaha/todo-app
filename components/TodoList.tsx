'use client'

import { database } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore'
import Task from './Task';

function TodoList() {
  const { data: session } = useSession();

  const [tasks, loading, error] = useCollection(
    session && collection(database, 'users', session?.user?.email!, 'tasks')
  );

  return (
    <div className="flex justify-between mx-auto overflow-x-none w-[90%]">
      <table className="table table-zebra">
        <tbody>
            {tasks?.docs.map((task, key) => (
              <Task task={task} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList