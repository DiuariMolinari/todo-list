import { Trash, Check } from 'phosphor-react'
import style from './Task.module.css'

export interface TaskObject {
    id: string;
    description: string;
    completed: boolean;
}

interface TaskProps {
    text: string;
    completed: boolean;
    onDelete: () => void;
    onComplete: () => void;
}

export function Task({ text, completed, onDelete, onComplete }: TaskProps) {
    return (
        <div className={style.task}>
            <div className={style.taskContent}>
                <button
                    className={completed ? style.btnComplete : style.btnIncomplete}
                    onClick={() => {
                        onComplete();
                    }}
                >
                    <Check weight="bold" />
                </button>
                <span className={completed ? style.taskTextCompleted: style.taskText}>{text}</span>
            </div>
            <button className={style.deleteButton} onClick={onDelete}>
                <Trash size={12} />
            </button>
        </div>
    );
};