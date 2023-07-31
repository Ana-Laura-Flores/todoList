import Header from './components/Header.jsx';
import List from './components/List.jsx';

import './App.css'

function App({notes, addNote}) {
  return (
    <>
      {/* <h1 className='text-red-600'>Notas</h1> */}
      <div>
        <Header notes={notes}/>
        <List notes={notes} addNote={addNote} />
      </div>
      
    </>
  )
}

export default App

