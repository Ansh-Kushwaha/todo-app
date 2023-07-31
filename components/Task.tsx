import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { BsCheckSquare } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'

type TaskProps = {
  task: DocumentData;
  toggleComplete: (task: DocumentData) => {}
  handleDelete: (task: DocumentData) => {}
}

function Task({ task, toggleComplete, handleDelete }: TaskProps) {

  return (
    <tr className={`${task.data().completed ? 'bg-green-50 line-through' : ''}`} >
      <td>
        <BsCheckSquare className={`${task.data().completed ? 'fill-green-600' : 'fill-gray-600'} hover:cursor-pointer`} 
          onClick={() => {toggleComplete(task)}}
        />
      </td>
      <td>{task.data().task}</td>
      <td><AiFillEdit className='fill-blue-600' /></td>
      <td>
        <RiDeleteBin6Fill className='fill-red-600 hover:cursor-pointer' 
          onClick={() =>{handleDelete(task)}}
        />
      </td>
    </tr>
  )
}

export default Task