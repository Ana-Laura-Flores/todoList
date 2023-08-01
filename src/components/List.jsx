import { useState } from 'react';
import Note from './Note.jsx';

export default function List({notes, setNotes}) {
    //  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
     console.log(notes)
     return (
        <div>
           {notes && notes.map(({title, id, complete}) => {
            return (
                    <Note 
                    title={title}
                    key={id}
                    id={id}
                    complete={complete}
                    notes={notes}
                    setNotes={setNotes}

                    />   
                )
            })
            }
        </div>
    )
}