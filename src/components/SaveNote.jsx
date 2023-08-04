import React from 'react'



export default function SaveNote({addNote, error, set}) {
    
   
  return (
    <div className='flex flex-col items-center'>
       <button className='m-5 w-28 border-none bg-violet-100 hover:bg-violet-500 hover:text-white' onClick={addNote}>Send</button>
    </div>
  )
}
