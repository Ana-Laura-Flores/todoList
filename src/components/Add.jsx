import React from 'react'
import { useState } from "react"

export default function Add() {
    const [work, setWork] = useState ("")
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])

    const addNote = (e) => {
        e.preventDefault()
        setNotes([...notes, work])
        
        localStorage.setItem("notes", JSON.stringify([...notes, work]))
        
        window.location.reload()
    }
  return (
    <div className='flex flex-col items-center'>
        <button className='m-10 w-28 border-none bg-violet-100 hover:bg-violet-500 hover:text-white	' onClick={addNote}>Send</button>
    </div>
  )
}
