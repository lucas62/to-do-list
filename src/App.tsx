import { useState } from 'react'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { TasksContent } from './components/TasksContent'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <TasksContent />
      </div>
      
    </>
  )
}

export default App
