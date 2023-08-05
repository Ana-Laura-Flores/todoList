import Note from './Note.jsx';

export default function List({notes, setNotes, filterStatus, setFilterStatus, notesFiltered}) {
    //  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
         
     return (
        <div className='w-3/5'>
           {!notesFiltered.length && notes ? notes.map(({title, id, complete}) => {
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
            }) : notesFiltered.map(({title, id, complete}) => {
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