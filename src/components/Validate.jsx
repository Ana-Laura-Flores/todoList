import React from "react";

export default function Validate({ valor, notes, setError, setIsDisabled }) {
    const validateNote = () => {
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
                    <p className="font-bold">
                        Ya existe una nota con ese nombre
                    </p>
                </div>,
                setIsDisabled(true)
            );
        } else {
            setError("");
            setIsDisabled(false);
        }
    };
    validateNote(valor);

    return <div></div>;
}
