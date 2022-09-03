import { useState } from 'react'
import styles from './Checkbox.module.css'

interface Checkbox {
    isChecked: boolean
}

export function Checkbox({ isChecked=true }: Checkbox) {
    const [checked, setChecked] = useState(true)

    return (
        <label className={styles.container}>
            <input type="checkbox" checked={checked} onClick={() => {setChecked(!checked)}}/>
            <span className={styles.checkmark}/>
        </label>
    )
}