import List from "./List.jsx"
import { useState } from 'react'
import Note from "./Note.jsx"

export default function Filter() {
    // const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
    // const [status, setStatus] = useState(JSON.parse(localStorage.getItem("notes"))||[])
    // console.log(notes)
    
    // const complete = () => {
    //     const completeNotes = notes.filter((note) => note.target.name === "Completa")
    //     localStorage.setItem("notes", JSON.stringify(completeNotes))
    //     window.location.reload()
        
    // }
    // const inComplete = () => {
    //     const inCompleteNotes = notes.filter((note) => note.target.name === "Incompleta")
    //     //localStorage.setItem("notes", JSON.stringify(inCompleteNotes))
    //     console.log(setStatus(inCompleteNotes))
       
    //}
    return (
        <div className='w-full m-3 md:w-1/2 shadow-md rounded-md bg-violet-200 h-16 flex items-center p-5'>
                        <label htmlFor="" className='px-5'>Seleccionar</label>
                        <select name="" id="" onChange={e => e.target.value == "Completas" ? {complete} : {inComplete}}>
                            <option value="Todas">Todas</option>  
                            <option value="Completas">Completas</option> 
                            <option value="Incompletas">Incompletas</option> 
                        </select> 
                    </div>
    )
}