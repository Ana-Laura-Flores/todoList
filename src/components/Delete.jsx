import React from 'react'
import { FcApproval, FcFullTrash } from "react-icons/fc";

export default function Delete({taskComplete, notes, title, id}) {
  
  const deleteNote = () => {
        const currentNote =  notes.filter((note) => note.id != id)
        localStorage.setItem("notes", JSON.stringify(currentNote))
        window.location.reload()
    }
  return (
        <div className='flex'>
            <div className="text-4xl text-white w-20 items-end text-right pr-2 cursor-pointer" onClick={taskComplete}><FcApproval/></div>
            <div className="text-4xl text-white w-20 items-end text-right pr-2 cursor-pointer hover:text-black" onClick={deleteNote}><FcFullTrash/></div>
        </div>
  )
}