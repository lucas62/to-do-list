import { ClipboardText } from 'phosphor-react'

import styles from './EmptyTasksList.module.css'

export function EmptyTasksList() {
    return (
        <div className={styles.container}>
            <ClipboardText size={56} />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}