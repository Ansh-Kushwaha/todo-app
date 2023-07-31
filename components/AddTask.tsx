import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NewTask from './NewTask';

function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
        <button className="btn btn-neutral w-[95%] text-slate-50"
          onClick={() => setModalOpen(true)}
        >
            Add new task
            <FaPlus size={15} className='ml-2' />
        </button>

        <NewTask modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default AddTask