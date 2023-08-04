import { useState } from 'react'

export default function Filter({notes, filterStatus, setFilterStatus, setNotesFiltered}) {
    const filteredNotes = (filterStatus) => {
        if (filterStatus === "all") {
          setNotesFiltered(notes) 
          
          } else {
              if (filterStatus === "complete") {
                  setNotesFiltered(notes.filter((note) => note.complete))
                  
                } else {
                  setNotesFiltered(notes.filter((note) => !note.complete));
                 
                }
           }
        }
   
    const handleFilterChange = (e) => {
        setFilterStatus(e.target.value);
        filteredNotes(e.target.value)
      }
     
    return (
        <div className='w-3/4 m-3 md:w-1/2 shadow-md rounded-md bg-violet-200 h-16 flex items-center p-5'>
            <label htmlFor="" className='pr-5'>Seleccionar</label>
            <select className="w-1/2"name={filterStatus} id="" value={filterStatus} onChange={handleFilterChange}>
                <option value="all">Todas</option>  
                <option value="complete">Completas</option> 
                <option value="incomplete">Incompletas</option> 
            </select>
                         
         </div>
    )
}