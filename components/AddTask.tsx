import { FaPlus } from 'react-icons/fa';

function AddTask() {
  return (
    <div className="">
        <button className="btn btn-neutral w-[95%] text-slate-50">
            Add new task
            <FaPlus size={15} className='ml-2' />
        </button>
    </div>
  )
}

export default AddTask