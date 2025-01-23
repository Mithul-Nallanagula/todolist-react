import List from "./Todolist"
import Lits from './ToDoItem'
import { useState } from "react"



function Header() {
    const [lead , setlead] = useState([]);
    return(
        <>
    <div className='bg-stone-100 place-self-center w-[55vw] h-[80vh] rounded-xl flex flex-col items-center'>
   
   <div><h2 className="font-bold text-5xl font font-Agd mt-4">To-Do List</h2></div>
   <List/>
    </div>
    </>
    )
}
export default Header