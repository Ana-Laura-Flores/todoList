import React from 'react'
import { useState } from 'react'
export default function Modify() {
    const [work, setWork] = useState ("")
    const modifyWork = (e) => {
        e.preventDefault()
        setWork(e.target.value)
        //console.log(work)
    }
    return (
        <div className='w-full m-3 md:w-1/2 shadow-md rounded-md bg-violet-200 h-16 flex items-center p-5'>
            <label htmlFor="" className=''>Tarea</label>
            <input type="text" className='m-2 p-2' onChange={modifyWork} placeholder='Ingrese una tarea' /> 
        </div>
    
  )
}
