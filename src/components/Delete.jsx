import React from 'react'
import { useState } from 'react';
import Note from "./Note.jsx"
import { FcApproval, FcFullTrash } from "react-icons/fc";

export default function Delete({taskComplete, title, id}) {
   
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])

    const deleteNote = () => {
        const currentNote =  notes.filter(({id}) => id != work)
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
