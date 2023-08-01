import Header from './components/Header.jsx';
import List from './components/List.jsx';
import './App.css';
import { useState } from "react";
import ContainerMain from './components/ContainerMain.jsx';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])
  return (
    <>
      {/* <h1 className='text-red-600'>Notas</h1> */}
      <div>
        <Header notes={notes} setNotes={setNotes}/>
        <ContainerMain notes={notes} setNotes={setNotes}/>
        <List notes={notes} setNotes={setNotes} />
      </div>
      
    </>
  )
}

export default App

