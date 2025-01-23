import { useState } from 'react'

import './App.css'
import List from './components/Todolist'
import Header from './components/header'
import Lits from './components/ToDoItem'


function App() {
  

  return (
    <>
     <div className='h-screen w-screen bg-stone-700 grid py-4 '>
      <Header/>
       
     </div>
    </>
  )
}

export default App
