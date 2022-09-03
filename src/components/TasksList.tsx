import { Trash } from 'phosphor-react'
import { Checkbox } from './Checkbox';

import styles from './TasksList.module.css'

interface Task {
    isChecked: boolean;
    content: string;
}

export function TasksList({ isChecked, content }: Task) {
    return (
        <div className={styles.container}>
            <Checkbox />
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            
            <button>
                <Trash size={24}/>
            </button>
                
        </div>
    )
}