export default function SaveNote({addNote, isDisabled}) {
  
   
  return (
    <div className='flex flex-col items-center'>
       <button type="submit" className='m-5 w-28 border-none bg-violet-100 hover:bg-violet-500 hover:text-white ' onClick={addNote} disabled={isDisabled} >Send</button>
    </div>
  )
}
