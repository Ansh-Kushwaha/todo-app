function EditTask() {
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

export default EditTask