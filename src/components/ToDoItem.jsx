import React, { useState } from 'react'


const Lits = (prop) => {
  const [check , setcheck] = useState(false);
  return (
    <div className='flex  flex-col justify-center border-2 border-black w-[40vw] mt-3 rounded-2xl h-[3vw] '>
      <div className='flex items-center '>
           {
            check ? (
              <i class="ri-checkbox-circle-fill text-3xl ml-1" onClick={() => setcheck(!check)}></i>
            ):(
              <i class="ri-checkbox-blank-circle-line text-3xl ml-1" onClick={() => setcheck(!check)}></i>
            )
           }
            <p className={`font-bold text-2xl ml-1 mb-1 cursor-pointer ${check ? "line-through text-gray-500" : ""}`} onClick={() => setcheck(!check)} >{prop.editing ? "Updating...." : prop.task}</p>
            <div className="flex ml-auto space-x-2 mr-2  ">
            <i className="ri-edit-box-fill text-2xl cursor-pointer" onClick={() => check ? null : prop.edit(prop.index)} ></i>
            <i className="ri-delete-bin-5-line text-2xl cursor-pointer"   onClick={() => prop.deletetask(prop.index)} ></i>
         
</div>
        </div>
    </div>
  )
  
}

export default Lits