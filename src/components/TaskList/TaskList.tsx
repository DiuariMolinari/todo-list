import { Task, TaskObject } from "../Task/Task";
import style from './TaskList.module.css';
import clipboard from '../../assets/Clipboard.svg';

interface TaskListProps {
    tasks: TaskObject[],
    setTasks: React.Dispatch<React.SetStateAction<TaskObject[]>>;
}

export function TaskList({tasks, setTasks} :TaskListProps) {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;

    function onDelete(taskId: string) {
        setTasks((prev) => {
            return prev.filter((task) => task.id !== taskId);
        });
    }

    function onTaskCompleted(taskId: string) {
        setTasks((prev) => {
            return prev.map((task) => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        completed: !task.completed,
                    };
                }
                return task;
            });
        });
    }

    return (
        <div className={style.taskList}>
            <div className={style.taskListHeader}>
                <div>
                    <span className={style.totalTasksSpan}>Tarefas criadas</span>
                    <span className={style.badge}>{totalTasks}</span>
                </div>

                <div>
                    <span className={style.totalOfSpan}>Concluídas </span>

                    { totalTasks > 0 ? (
                        <span className={style.badge}>{completedTasks} de {totalTasks}</span>
                    ) : 
                    (
                        <span className={style.badge}>0</span>
                    )}
                    
                </div>
            </div>

            {tasks.length === 0 ? (
                <div className={style.emptyTaskList}>
                    <img src={clipboard} alt="Clipboard" />
                    <div className={style.emptyTaskListText}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div>
            ) : (
                tasks.map((task) => (
                    <Task key={task.id} text={task.description} completed={task.completed} onComplete={() => onTaskCompleted(task.id)} onDelete={() => {onDelete(task.id)}} />
                ))
            )} 
        </div>
    );
};
