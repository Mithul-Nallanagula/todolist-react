import { useState } from "react"
import Lits from "./ToDoItem";

function List() {
  

    const [task , setTask] = useState("")
    const [tasks , settasks] = useState([]);
    const [edit , setedit] = useState(null)
     
    function addoredit() {
        if(task.trim()){
            if(edit !== null){
                const update = [...tasks];
                update[edit] = task.trim();
                
                settasks(update);
                setedit(null);
                setTask('');


            }else{

            settasks([...tasks , task.trim()])
            setTask("");
            }
        }
    };

    const edittask = (index) => {
         setTask(tasks[index])
         setedit(index);
    }
 const deleteitem = (index) => {
      settasks(tasks.filter((_ , curindex) => curindex !== index))
    }
    
    return(
        <>
            <div className="flex">
                 <img src="/src/assets/images/notebook.png" className="w-[2.5vw] h-[2.5vw] mt-4 border-2 border-black rounded-tl-xl rounded-bl-xl border-r-0 p-2 bg-white "></img>
                <input type="text" value={task} onChange={(val) => setTask(val.target.value)} placeholder="Add your task" className="w-[30vw] h-[2.5vw]  text-center mt-4 border-2 border-r-0 border-black border-l-0 focus:outline-none  focus:ring-0"  ></input>
             <button type="submit" onClick={addoredit} className="border-2 bg-white border-black h-[2.5vw] w-[90px] rounded-br-xl rounded-tr-xl border-l-0 mt-4 text-blue-500">{ edit !== null ? "Update" : "Add"}</button>
             
             
             
                
           
            
        </div>

        {tasks.length > 0 ? (
            tasks.map((task , index) => <Lits key={index} task={task} deletetask = {() => deleteitem(index)} edit = {() => edittask(index)} editing = {edit === index }/>)
        ): (
            <h2 className="text-4xl mt-20 font-bold text-slate-500">ADD YOUR TASKS!!</h2>
        )}

        </>
    )
}

export default List