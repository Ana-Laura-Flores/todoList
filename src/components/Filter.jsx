
export default function Filter({setFilterStatus, notes, setFilteredNotes}) {
    
     const handleChangeStatus = (e) => {
        let noteFiltradas = notes
        const valueStatus = e.target.value
               
            if (valueStatus === "") {
                noteFiltradas = notes
                setFilterStatus("")
                
            } else if (valueStatus === "complete") {
                noteFiltradas = notes.filter((note) => note.complete),
                setFilteredNotes(noteFiltradas),
                setFilterStatus(true)
              
            } else {
                noteFiltradas = notes.filter((note) => !note.complete),
               setFilterStatus(false)
            }
            
          setFilteredNotes(noteFiltradas) 
        }
         
    return (
        <div className='w-3/4 m-3 md:w-1/2 shadow-md rounded-md bg-violet-200 h-16 flex items-center p-5'>
            <label htmlFor="" className='pr-5'>Seleccionar</label>
            <select className="w-1/2" onChange={handleChangeStatus}>
                <option value="">Todas</option>  
                <option value="complete">Completas</option> 
                <option value="incomplete">Incompletas</option> 
            </select>
                         
         </div>
    )
}