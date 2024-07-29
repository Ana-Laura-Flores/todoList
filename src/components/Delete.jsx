import React from "react";
import { FcApproval, FcFullTrash } from "react-icons/fc";
import ModalConfirm from "./ModalConfirm.jsx";
import { useState } from "react";

export default function Delete({ taskComplete, notes, id }) {
  const [modalOpen, setModalOpen] = useState(false);
  const currentNote = notes.find((note) => note.id === id);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex">
      <div
        className="text-4xl text-white w-14 items-end text-right pr-2 cursor-pointer"
        onClick={taskComplete}
      >
        <FcApproval />
      </div>
      <div
        className="text-4xl text-white w-14 items-end text-right pr-2 cursor-pointer hover:text-black"
        onClick={handleOpenModal}
      >
        <FcFullTrash />
      </div>
      <ModalConfirm
        notes={notes}
        id={id}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      >
        <h2 className="text-xl font-semibold flex flex-wrap">
          ¿Estas seguro que quieres eliminar la nota{" "}
          <p className="font-bold text-violet-500">"{currentNote.title}"</p>?{" "}
        </h2>
        <p className="mt-2">Esta acción no podrá deshacerse.</p>
      </ModalConfirm>
    </div>
  );
}
