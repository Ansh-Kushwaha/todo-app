'use client'

import { database } from '@/firebase';
import { collection, deleteDoc, doc, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot, Unsubscribe, updateDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Task from './Task';

function TodoList() {
  const { data: session } = useSession();
  const[tasks, loading, error] = useCollection(session && query(collection(database, 'users', session?.user?.email!, 'tasks'), 
    orderBy('createdAt', 'desc'))
  );

  const toggleComplete = async(task: DocumentData) => {
    await updateDoc(doc(database, 'users', session?.user?.email!, 'tasks', task.id), {
      completed: !task.data().completed,
    })
  };
  
  const handleDelete = async(task: DocumentData) => {
    await deleteDoc(doc(database, 'users', session?.user?.email!, 'tasks', task.id))
  };
  
  return (
    <div className="flex justify-between mx-auto overflow-x-none w-[90%]">
      <table className="table text-md text-gray-800">
        <tbody>
            {tasks?.docs.map((task, key) => (
              !task?.data().completed && (
              <Task key={key} task={task} toggleComplete={toggleComplete} handleDelete={handleDelete} />
              )
            ))}
            {tasks?.docs.map((task, key) => (
              task?.data().completed && (
              <Task key={key} task={task} toggleComplete={toggleComplete} handleDelete={handleDelete} />
              )
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList