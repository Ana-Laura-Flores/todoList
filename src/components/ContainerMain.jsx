import Modify from './Modify.jsx'
import Filter from './Filter.jsx'
//import Add from './SaveNote.jsx'
import { useState } from "react";
import SaveNote from './SaveNote.jsx';

export default function ContainerMain({notes, setNotes}) {
  const [work, setWork] = useState ({
    title: "",
    complete: false,
    id: crypto.randomUUID(),

  })
    const modifyWork = (e) => {
        e.preventDefault()
        setWork({
          title: e.target.value,
          complete: false,
          id: crypto.randomUUID(),
          
          })
      }
    

    const addNote = (e) => {
        e.preventDefault()
        setNotes([...notes, work])
        localStorage.setItem("notes", JSON.stringify([...notes, work]))
        window.location.reload()
    }
  return (
    <div className="mt-3 w-full">
        <div className='flex w-11/12 flex-col md:flex-row'>
            <Modify modifyWork={modifyWork} work={work}/>
            <Filter/>
        </div>
            <SaveNote work={work} addNote={addNote}/>
    </div>
  )
}
