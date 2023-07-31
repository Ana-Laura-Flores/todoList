import { useState } from 'react';
import Note from './Note.jsx';

export default function List() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
   
    return (
        <div>
           {notes && notes.map((dat, index) => {
            return (
                    <Note 
                    work={dat}
                    key={index}
                    />   
                )
            })
            }
        </div>
    )
}