const ModalConfirm = ({ isOpen, onClose, children, notes, id }) => {
    const deleteNote = () => {
        const currentNote = notes.filter((note) => note.id != id);
        localStorage.setItem("notes", JSON.stringify(currentNote));
        window.location.reload();
    };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <div className="bg-violet-100	 w-4/5 md:w-1/2 p-6 rounded shadow-xl">
                {children}
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-2  bg-violet-400 hover:bg-violet-500 text-white rounded "
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

export default ModalConfirm;
