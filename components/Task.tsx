import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { BsCheckSquare } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'

type TaskProps = {
  task: QueryDocumentSnapshot<DocumentData, DocumentData>
}

function Task({ task }: TaskProps) {
  return (
    <tr>
      <td>{task.id}</td>
      <td><BsCheckSquare /></td>
      <td><AiFillEdit className='fill-blue-600' /></td>
      <td><RiDeleteBin6Fill className='fill-red-600' /></td>
    </tr>
  )
}

export default Task