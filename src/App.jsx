import Header from './components/Header.jsx';
import List from './components/List.jsx';
import { useState } from "react";
import ContainerMain from './components/ContainerMain.jsx';


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
  const [filterStatus, setFilterStatus] = useState('all')
  const [notesFiltered, setNotesFiltered] = useState([])
  return (
    
      <div className='flex flex-col justify-center items-center w-full'>
        <Header />
        <ContainerMain notes={notes} setNotes={setNotes} filterStatus={filterStatus} setFilterStatus={setFilterStatus} notesFiltered={notesFiltered} setNotesFiltered={setNotesFiltered} />
        <List notes={notes} setNotes={setNotes} filterStatus={filterStatus} setFilterStatus={setFilterStatus} notesFiltered={notesFiltered} setNotesFiltered={setNotesFiltered}/>
      </div>
      
   
  )
}

export default App

