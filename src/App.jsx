import Header from './components/Header.jsx';


import './App.css'

function App({notes, addNote}) {
  return (
    <>
      {/* <h1 className='text-red-600'>Notas</h1> */}
      <div>
        <Header notes={notes}/>
      </div>
      
    </>
  )
}

export default App

