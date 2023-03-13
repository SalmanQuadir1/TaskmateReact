import React from 'react'
import { BiMessageEdit } from 'react-icons/bi';
import { RiChatDeleteFill } from 'react-icons/ri';

import '../Styles/showTask.css';

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (taskId) => {
    const updatedTaskList = taskList.filter(t => t.id !== taskId);
    setTaskList(updatedTaskList);
  }
  const handleEdit = (taskId) => {
    const selectedTask = taskList.find(t => t.id === taskId);
    console.log(selectedTask);
    setTask(selectedTask);
  }



  return (
    <>
      <section className='bg-light showTask shadow-lg border border-light p-4 '>
        <div className="todo">
          <div className="badge badge-primary text-dark">Todo({taskList.length})</div>
          <button className='btn btn-primary btn-sm' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <hr />
        <div className="taskList">
          <div className="row text-center">
            {taskList.map((item) => (
              <div className="col-md-4 mb-2" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-text">
                      <p className='pad '>{item.name.toUpperCase()}</p>
                      <div className="btns ">
                        <BiMessageEdit onClick={() => handleEdit(item.id)} size={20} color=" blue" />
                        <RiChatDeleteFill onClick={() => handleDelete(item.id)} size={20} color="red" />
                      </div>
                    </div>
                    <div className="DateTime">
                      <p className='pad'>{item.time}</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}



          </div>

        </div>
      </section>
    </>
  )
}

export default ShowTask