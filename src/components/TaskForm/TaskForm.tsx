import style from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { TaskObject } from '../Task/Task';
import { v4 as uuid } from "uuid";

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}

export function TaskForm({ setTasks }:TaskFormProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function onTaskSubmit() {
    setTasks((prevTasks) => {
      return [...prevTasks, {
        id: uuid(),
        description: taskDescription,
        completed: false,
      }];
    });

    setTaskDescription("");
  }

  return (
    <form 
      className={style.taskForm} 
      onSubmit={(event) => {
        event.preventDefault();
        onTaskSubmit(); 
      }}
    >
      <div className={style.inputContainer}> 
        <input 
          className={style.taskInput} 
          type="text" 
          value={taskDescription} 
          placeholder="Adicione uma nova tarefa" 
          required
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button className={style.submitButton} type="submit">
            Criar <PlusCircle size={16} />
        </button>
      </div>
    </form>
  )
}