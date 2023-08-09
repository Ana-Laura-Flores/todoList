import Note from './Note.jsx';
import SinNotes from './SinNotes.jsx';
import { useState } from 'react';

export default function List({notes, setNotes, filterStatus}) {
    const [filteredNotes, setFilteredNotes] = useState([])
      
     return (
        <div className='w-3/5'>
            
            { notes.length === 0 ? <SinNotes/> : notes && notes.map(({title, id, complete}) => {
                               
                if(complete == filterStatus || filterStatus === ""){
                    return (
                        <Note 
                        title={title}
                        key={id}
                        id={id}
                        complete={complete}
                        notes={notes}
                        setNotes={setNotes}
                        />)
                    }
                })
        
            }
  
        </div>
        )
}