import Modify from './Modify.jsx'
import Filter from './Filter.jsx'
import { useState } from "react";
import SaveNote from './SaveNote.jsx';

export default function ContainerMain({notes, setNotes, filterStatus, setFilterStatus}) {
  const [error, setError] = useState("")
  
  const [work, setWork] = useState ({
    title: "".trim(),
    complete: false,
    id: crypto.randomUUID(),

  })
    const modifyNote = (e) => {
        e.preventDefault()
        setWork({
          title: e.target.value,
          complete: false,
          id: crypto.randomUUID(),
          
          })
          const value = e.target.value
          value.length < 5 ? setError(<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 text-sm md:text-base p-4 m-2 w-5/6" role="alert" >
          <p className="font-bold">Campo Requerido</p>
          <p>Debe contener al menos 5 caracteres.</p>
      </div>)  : setError("")
      }
     
    const addNote = (e) => {
        e.preventDefault()
        setNotes([...notes, work])
        localStorage.setItem("notes", JSON.stringify([...notes, work]))
      }

  return (
    <div className='w-4/5 flex flex-col justify-center items-center'>
      <form type="submit" className="mt-3 w-11/12 flex flex-col justify-center items-center ">
          <div className='flex w-full flex-col  justify-center items-center md:flex-row'>
            <Modify modifyNote={modifyNote} work={work} error={error}/>
            <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
          </div>
            <SaveNote work={work} addNote={addNote}/>
      </form>
    </div>
  )
}
