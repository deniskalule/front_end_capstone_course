import React, { useState } from 'react';
import '../css/Menu.css';

function Menu() {
  const [todolist, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) =>{
    setNewTask(e.target.value);
  };
  
  const addTask = () =>{
    setTodolist([...todolist,newTask]);
  };

  const deleteTask = (taskName) => {
    const newTodoList = todolist.filter((task) => {
      return task !== taskName;
    });
    setTodolist(newTodoList);
  };
  
  return (
    <div className='p-4'>To do list

      <div className='add-task'>
        <input className='form-control' onChange={handleChange} placeholder="Enter new task" />
        <button className='bg-dark mt-3 text-white' onClick={addTask}> Add Task</button>
      </div>
      <div className='output mt-4'>
        {
          todolist.map((task) => {
            return (
              <div>
                <h1>{task}</h1>
                <button onClick={() => deleteTask(task)}>X</button>
              </div>
              
            )
            
          })
        }
      </div>
      

    </div>
    
  );
}

export default Menu