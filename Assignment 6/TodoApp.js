import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

 
  function addTask() {
    if (inputValue !== "") {
      const newSortedTasks = [...tasks, inputValue].sort();
      
      setTasks(newSortedTasks);
      setInputValue(""); 
    }
  }

  function deleteTask(taskToRemove) {
    
    const remainingTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(remainingTasks);
  }

  return (
    <div>
      <h2>Daily To-Do List</h2>
      
      {}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>

      {}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default TodoApp;