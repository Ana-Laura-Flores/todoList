export default function Filter({filterStatus, setFilterStatus}) {

    // const handleFilterChange = (e) => {
    //     setFilterStatus(e.target.value);
    //     //filteredNotes(e.target.value)
     
     const handleChangeStatus = (e) => {
        const valueStatus = e.target.value
        switch (valueStatus){
            case "":
            setFilterStatus("")
            break;
            case "complete" :
            setFilterStatus(true)
            break;
            case "incomplete":
            setFilterStatus(false);
            }
       
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