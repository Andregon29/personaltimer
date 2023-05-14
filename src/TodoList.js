import React, { useState } from 'react'
import './TodoList.css'

function TodoList() {

    const [input, setInput] = useState('')
    const [tasks, setTasks] = useState([])
    
    function handleCompleted(taskid){
        setTasks(tasks => [...tasks].map((task)=>{
            if(taskid === task.id){
                    return({...task, completed: !task.completed})
            }
            return task
        }))
    }

    function addNewTask (){
        if(input !== ''){
            let id = tasks.length + 1;
            setTasks((prev)=>[
                ...prev,
                {
                    id: id,
                    task: input,
                    completed: false,
                },
            ])
            setInput('')
        }
    }


  return (
    <div className='todo-container'>
        <h1>
            TodoList
        </h1>
        <div className='todo-inputs'>
            <input value={input} onInput={(e) => setInput(e.target.value)}/>
            <button onClick={()=> addNewTask()}>Add a Task</button>
        </div>

        <ul>
            {tasks.map((task)=>{
                return(
                    <li className={task.completed ? 'completed' : ''} id={task.id} key={task.id}>
                        <button id='toggle-complete-btn' onClick={()=> handleCompleted(task.id)}>Toggle</button>
                        <p id='task-text'>{task.task}</p>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TodoList