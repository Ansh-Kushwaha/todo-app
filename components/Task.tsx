import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { BsCheckSquare } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import EditTask from "./EditTask"
import { useState } from "react"

type TaskProps = {
  task: DocumentData;
  toggleComplete: (task: DocumentData) => {}
  handleDelete: (task: DocumentData) => {}
}

function Task({ task, toggleComplete, handleDelete }: TaskProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <tr className={`${task.data().completed ? 'bg-green-50 dark:bg-[#07310b] line-through' : ''}`} >
      <td>
        <BsCheckSquare className={`${task.data().completed ? 'fill-green-600' : 'fill-gray-600'} hover:cursor-pointer`} 
          onClick={() => {toggleComplete(task)}}
        />
      </td>
      <td>{task.data().task}</td>
      <td>
        <AiFillEdit className={`${task.data().completed ? 'fill-blue-300' : 'fill-blue-600'} hover:cursor-pointer`}
          onClick={() => {
            if (!task.data().completed) setModalOpen(true)
          }}
        />
        <EditTask task={task} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </td>
      <td>
        <RiDeleteBin6Fill className='fill-red-600 hover:cursor-pointer' 
          onClick={() =>{handleDelete(task)}}
        />
      </td>
    </tr>
  )
}

export default Task