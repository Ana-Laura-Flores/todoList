import { useState } from "react";

import Modify from "./Modify.jsx";
import Filter from "./Filter.jsx";
import SaveNote from "./SaveNote.jsx";
// import Validate from './Validate.jsx';

export default function ContainerMain({
  notes,
  setNotes,
  setFilterStatus,
  error,
  setError,
  setFilteredNotes,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [work, setWork] = useState({
    title: "".trim(),
    complete: false,
    id: crypto.randomUUID(),
  });
  const modifyNote = (e) => {
    e.preventDefault();
    setWork({
      title: e.target.value,
      complete: false,
      id: crypto.randomUUID(),
    }),
      validateNote(e.target.value);
    // Validate ({valor : e.target.value, setIsDisabled, notes, setError})
  };

  const validateNote = (valor) => {
    //const value = e.target.value
    const noteExist = notes.find((note) => note.title === valor);

    if (valor.length < 5 || valor === "") {
      setError(
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 text-sm md:text-base p-4 m-2 w-5/6"
          role="alert"
        >
          <p className="font-bold">Campo Requerido</p>
          <p>Debe contener al menos 5 caracteres.</p>
        </div>,
        setIsDisabled(true)
      );
    } else if (noteExist) {
      setError(
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 text-sm md:text-base p-4 m-2 w-5/6"
          role="alert"
        >
          <p className="font-bold">Ya existe una nota con ese nombre</p>
        </div>,
        setIsDisabled(true)
      );
    } else {
      setError("");
      setIsDisabled(false);
    }
  };

  const addNote = () => {
    if (!isDisabled) {
      setNotes([...notes, work]);
      localStorage.setItem("notes", JSON.stringify([...notes, work]));
    }
  };

  return (
    <div className="w-4/5 flex flex-col justify-center items-center">
      <form
        type="submit"
        className="mt-3 w-11/12 flex flex-col justify-center items-center "
      >
        <div className="flex w-full flex-col  justify-center items-center md:flex-row">
          <Modify modifyNote={modifyNote} work={work} error={error} />
          <Filter
            setFilterStatus={setFilterStatus}
            setFilteredNotes={setFilteredNotes}
            notes={notes}
          />
        </div>
        <SaveNote 
          addNote={addNote} 
          isDisabled={isDisabled}   
        />
      </form>
    </div>
  );
}
