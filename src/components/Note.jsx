
import Delete from "./Delete.jsx";
import Filter from "./Filter.jsx";

export default function Note({title, id, complete, setNotes, notes}) {
    // const [agregarClase, setAgregarClase] = useState(false);
    // const taskComplete = () => {
    //     setAgregarClase(!agregarClase);
    //     // localStorage.setItem("notes", JSON.stringify([...notes, setNotes(!agregarClase)]))
    //     // console.log(notes)
    // }
     const taskComplete = () => {
        const noteToUpdate = notes.find((note) => note.id === id);
        if (noteToUpdate) {
          // Crear una nueva copia de la nota con la propiedad complete actualizada
          const updatedNote = {
            ...noteToUpdate,
            complete: !noteToUpdate.complete, // Alternar el valor de complete
          };
      
          // Actualizar la lista de notas con la nota actualizada
          const updatedNotes = notes.map((note) => (note.id === id ? updatedNote : note));
      
          // Actualizar el localStorage y el estado con la lista de notas actualizada
          localStorage.setItem("notes", JSON.stringify(updatedNotes));
          setNotes(updatedNotes);
        }
     }
    return (
        
        <div className="w-11/12 flex flex-row p-3 bg-slate-300 rounded-lg m-5">
            <div className="w-full flex">
            {/* name={!agregarClase ? "Incompleta" : "Completa"} */}
                <p id={id} className={`w-3/4 items-start justify-between text-left font-bold pl-5 ${complete ? 'line-through font-normal' : ''}`}>{title}</p>
                <Delete setNotes={setNotes} notes={notes} id={id} taskComplete={taskComplete} />
                
            </div>
        </div>
    )
}