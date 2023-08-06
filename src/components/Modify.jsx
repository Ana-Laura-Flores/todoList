export default function Modify({modifyNote, work, error, disabled}) {
    
    return (
        <div className='w-3/4 md:w-1/2 m-3 md:ml-10' >
            {error ? <div>{error}</div> : ""}
            <div className='w-full md:w-11/12  shadow-md rounded-md bg-violet-200 h-16 flex items-center p-5'>
                <label htmlFor="" className='mr-3'>Tarea</label>
                <input type="text" name="title" className='m-2 w-11/12 p-2' value={work.title} onChange={modifyNote} placeholder='Ingrese una tarea' /> 
            </div>
            
        </div>
    
  )
}
