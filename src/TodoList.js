import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function HandleCompleted(taskid) {
    setTasks((tasks) =>
      [...tasks].map((task) => {
        if (taskid === task.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  function AddNewTask() {
    if (input !== "") {
      let id = tasks.length + 1;
      setTasks((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          completed: false,
        },
      ]);
      setInput("");
    }
  }

  return (
    <div className="todo-container">
      <h1>Todos</h1>
      <div className="todo-inputs">
        <input
          id="input-button"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={() => AddNewTask()}>Add a Task</button>
      </div>

      <ul>
        {tasks.map((task) => {
          return (
            <li
              className={task.completed ? "completed" : ""}
              id={task.id}
              key={task.id}
            >
              <button
                className={task.completed ? "red" : "yellow"}
                onClick={() => HandleCompleted(task.id)}
              >
                Toggle
              </button>
              <p id="task-text">{task.task}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
