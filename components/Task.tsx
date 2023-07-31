import { collection, DocumentData, orderBy, query, QueryDocumentSnapshot } from "firebase/firestore"
import { BsCheckSquare } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useSession } from "next-auth/react"
import { database } from "@/firebase"
import { useCollection } from "react-firebase-hooks/firestore"

type TaskProps = {
  key: number;
  task: DocumentData;
}

function Task({ key, task }: TaskProps) {

  return (
    <tr>
      <td>{task.data().task}</td>
      <td><BsCheckSquare /></td>
      <td><AiFillEdit className='fill-blue-600' /></td>
      <td><RiDeleteBin6Fill className='fill-red-600' /></td>
    </tr>
  )
}

export default Task