import React, { useState } from 'react'


const Lits = (prop) => {
  const [check , setcheck] = useState(false);
  return (
    <div className='flex  flex-col justify-center border-2 border-black w-[40vw] mt-3 rounded-2xl h-[3vw] '>
      <div className='flex items-center '>
            <img src={`/src/assets/images/${check ? 'check.png' : 'uncheck.png'}`} onClick={() => setcheck(!check)} className='w-6 h-6 ml-1 cursor-pointer'></img>
            <p className={`font-bold text-2xl ml-1 mb-1 cursor-pointer ${check ? "line-through text-gray-500" : ""}`} onClick={() => setcheck(!check)} >{prop.editing ? "Updating...." : prop.task}</p>
            <div className="flex ml-auto space-x-2 mr-2  ">
              
              <img src='/src/assets/images/edit.png' className='w-6 h-6 ml-1 cursor-pointer' onClick={() => check ? null : prop.edit(prop.index)}></img>
            <img src='/src/assets/images/delete.png' className='w-6 h-6 ml-1 cursor-pointer' onClick={() => prop.deletetask(prop.index) }></img>
</div>
        </div>
    </div>
  )
  
}

export default Lits