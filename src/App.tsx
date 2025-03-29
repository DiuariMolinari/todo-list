import "./Global.css"
import style from "./App.module.css"

import { Header } from "./components/Header/Header"
import { TaskForm } from "./components/TaskForm/TaskForm"
import { TaskList} from "./components/TaskList/TaskList"
import { TaskObject } from "./components/Task/Task"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState<TaskObject[]>([]);

  return (
    <>
      <Header />
      <main className={style.main} >
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}

export default App
