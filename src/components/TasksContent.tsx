import { PlusCircle } from 'phosphor-react'
import { TasksList } from './TasksList'
import styles from './TasksContent.module.css'
import { EmptyTasksList } from './EmptyTasksList'

interface Task {
    id: number;
    isChecked: boolean;
    content: string;
}

export function TasksContent() {
    const tasks: Task[] = [
        {
            id: 1,
            isChecked: false,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero aut quo ab commodi consequatur totam.'
        },
        {
            id: 2,
            isChecked: false,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero aut quo ab commodi consequatur totam.'
        },
        {
            id: 3,
            isChecked: true,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero aut quo ab commodi consequatur totam.'
        },
    ]

    return (
        <div className={styles.container}>
            <header className={styles.containerForm}>
                <form className={styles.formTasks}>
                    <input placeholder='Adicione uma nova tarefa' type="text" />
                    <button type='submit'>
                        Criar
                        {' '}<PlusCircle size={16} /> 
                    </button>
                </form>
            </header>

            <div className={styles.containerTasksList}>
                <header className={styles.headerTaskList}>
                    <div className={styles.tasksCreated}>
                        Tarefas criadas
                        <span>0</span>
                    </div>
                    <div className={styles.tasksDone}>
                        Concluídas
                        <span>0</span>
                    </div>
                </header>

                {tasks.length === 0 ? 
                    <>
                        <EmptyTasksList />
                    </>:
                    <div className={styles.containerTaskList}>
                        {tasks.map(task => (
                            <TasksList 
                                key={task.id} 
                                isChecked={task.isChecked} 
                                content={task.content} 
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}