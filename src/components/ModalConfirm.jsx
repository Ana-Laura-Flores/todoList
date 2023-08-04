import React from 'react';

const Modal = ({ isOpen, onClose, children, notes, id}) => {
  
  const deleteNote = () => {
    const currentNote =  notes.filter((note) => note.id != id)
        localStorage.setItem("notes", JSON.stringify(currentNote))
        window.location.reload()
      }
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
      <div className="bg-white w-1/2 p-6 rounded shadow-lg">
        {children}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-2  bg-violet-100 text-violet-500 hover:bg-violet-500 hover:text-white rounded "
          >            
            Cerrar
          </button>
          <button
            onClick={deleteNote}
            className="px-2 mx-5 ml-8 bg-red-600 text-white rounded hover:bg-red-700"
          >            
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
