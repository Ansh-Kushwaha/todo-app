'use client'

import { database } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function NewTask({ modalOpen, setModalOpen }: ModalProps) {
  const { data: session } = useSession();
  const [task, setTask] = useState("");

  const createNewTask = async(e: FormEvent) => {
    e.preventDefault();
    if (task !== "") {
      console.log("trigerred")
      await addDoc(
        collection(database, 'users', session?.user?.email!, 'tasks'), {
          task: task,
          completed: false,
          createdAt: serverTimestamp(),
        }
      )
      setTask(""); 
    }
  } 

  return (
    <div className='dark:text-gray-100 text-gray-900'>
      <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
        <form method="dialog" className='modal-box h-fit align-top'
          onSubmit={createNewTask}
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          <h2 className='text-lg font-semibold'>Add new task</h2>
          <div className='modal-action flex flex-row'>
            <input type="text" placeholder="Type here" value={task}
              className="input input-bordered w-full max-w-full" 
              onChange={(e) => setTask(e.target.value)}
            />
            <button className='btn btn-Submit btn-tertiary'
              onClick={() => {
                if (task !== "")
                  setModalOpen(false)
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default NewTask;
