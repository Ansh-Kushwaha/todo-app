import { database } from "@/firebase";
import { doc, DocumentData, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

type ModalProps = {
  task: DocumentData
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function EditTask({task, modalOpen, setModalOpen}: ModalProps) {
  const[updatedTask, setUpdatedTask] = useState<string>("");
  const { data: session } = useSession();
  const handleEdit = async(e: FormEvent) => {
    e.preventDefault();
    if (updatedTask !== "") {
      await updateDoc(doc(database, 'users', session?.user?.email!, 'tasks', task.id), {
        task: updatedTask,
      })
      setUpdatedTask("");
    }
  };

  return (

    <div className='dark:text-gray-50 text-gray-90'>
      <dialog id="my_modal_3" className={`modal ${modalOpen ? 'modal-open' : ''}`}>
        <form method="dialog" className="modal-box h-fit"
          onSubmit={handleEdit}
        >
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          <h2 className='text-lg font-semibold'>Edit task</h2>
          <div className='modal-action flex flex-row'>
            <input type="text" placeholder={task.data().task} value={updatedTask}
              className="input input-bordered w-full max-w-full" 
              onChange={(e) => {setUpdatedTask(e.target.value)}}
            />
            <button className='btn btn-Submit btn-tertiary'
              onClick={() => {
                if (updatedTask !== "")
                  setModalOpen(false)
              }}
            >
              Update
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default EditTask