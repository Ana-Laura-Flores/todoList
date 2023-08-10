import Header from './components/Header.jsx';
import List from './components/List.jsx';
import { useState } from "react";
import ContainerMain from './components/ContainerMain.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
  const [filterStatus, setFilterStatus] = useState("")
  const [error, setError] = useState("")
  const [filteredNotes, setFilteredNotes] = useState([notes])
  return (
    
      <div className='flex flex-col justify-center items-center w-full'>
        <Header />
        <ContainerMain filteredNotes={filteredNotes} setFilteredNotes={setFilteredNotes} notes={notes} error={error} setError={setError} setNotes={setNotes} setFilterStatus={setFilterStatus} />
        <List notes={notes} filteredNotes={filteredNotes} setNotes={setNotes} filterStatus={filterStatus} />
        <Footer/>
      </div>
      
   
  )
}

export default App

