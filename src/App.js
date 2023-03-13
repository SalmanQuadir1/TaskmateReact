import React, { useEffect, useState } from 'react'
import AddTask from './components/Tasks/AddTask'
import Header from './components/Tasks/Header'
import ShowTask from './components/Tasks/ShowTask'
import '../src/components/Styles/Header.css';

const App = () => {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [task, setTask] = useState([]);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || '');
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme])

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList])

  useEffect(() => {
    console.log("Theme", document.documentElement);
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);

  }, [theme])

  return (
    <>
      <div className={theme} >
        <div className="container">
          <Header theme={theme} setTheme={setTheme} />
          <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
          <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />

        </div>

      </div>
    </>
  )
}

export default App