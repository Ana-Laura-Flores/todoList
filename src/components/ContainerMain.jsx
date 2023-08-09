import Modify from './Modify.jsx'
import Filter from './Filter.jsx'
import { useState } from "react";
import SaveNote from './SaveNote.jsx';
import Validate from './Validate.jsx';

export default function ContainerMain({notes, setNotes, setFilterStatus, error, setError}) {
  
  const [isDisabled, setIsDisabled] = useState(true);
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
         }),
        
        Validate ({valor : e.target.value, setIsDisabled, notes, setError})       
         }

    
    const addNote = (e) =>{ 
      if (!isDisabled) {
        e.preventDefault()
        setNotes([...notes, work])
        localStorage.setItem("notes", JSON.stringify([...notes, work]))
      }
    }
   
  return (
    <div className='w-4/5 flex flex-col justify-center items-center'>
      <form type="submit" className="mt-3 w-11/12 flex flex-col justify-center items-center ">
          <div className='flex w-full flex-col  justify-center items-center md:flex-row'>
            <Modify modifyNote={modifyNote} work={work} error={error}/>
            <Filter setFilterStatus={setFilterStatus} />
          </div>
            <SaveNote addNote={addNote} isDisabled={isDisabled} />
      </form>
    </div>
  )
}
