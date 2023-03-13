import React from 'react'
import '../Styles/addTask.css';

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const date = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTaskList = taskList.map((todo) => (
        todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}` } : todo
      ))
      setTaskList(updateTaskList);
      setTask({});

    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
    }



  }
  return (
    <section className='addTask shadow-sm bg-light '>
      <form className='formData ' onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ''} className='form-control ' onChange={e => setTask({ ...task, name: e.target.value })} autoComplete='off' placeholder='Add Task' maxLength={25} />
        <button type='submit' className='btn btn-success mx-2' >{task.id ? 'UPDATE' : 'ADD'}</button>
      </form>

    </section>)
}

export default AddTask