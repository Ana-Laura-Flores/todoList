import Note from './Note.jsx';

export default function List({notes, setNotes, filterStatus}) {
    //  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
         
     return (
        <div className='w-3/5'>
           {notes && notes.map(({title, id, complete}) => {
                if(complete == filterStatus){
                   
                return (
                    <Note 
                    title={title}
                    key={id}
                    id={id}
                    complete={complete}
                    notes={notes}
                    setNotes={setNotes}
                    />   
                )} else if (filterStatus === ""){
                    return (
                        <Note 
                        title={title}
                        key={id}
                        id={id}
                        complete={complete}
                        notes={notes}
                        setNotes={setNotes}
                        />   
                    )}
                })
        
             }
        </div>
    )
}