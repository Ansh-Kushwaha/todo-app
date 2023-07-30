'use client'

import { database } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface ModalProps {
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
      const doc = await addDoc(
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
    <div>
      <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
        <form method="dialog" className="modal-box"
          onSubmit={createNewTask}
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          <h2 className='text-lg font-semibold'>Add new task</h2>
          <div className='modal-action flex flex-row'>
            <input type="text" placeholder="Type here" value={task}
              className="input input-bordered w-full max-w-full" 
              onChange={(e) => setTask(e.target.value)}
            />
            <button className='btn btn-Submit btn-primary'
              onClick={() => setModalOpen(false)}
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
