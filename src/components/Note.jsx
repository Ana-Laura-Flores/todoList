
import { useState } from "react";
import Delete from "./Delete.jsx";
import Filter from "./Filter.jsx";

export default function Note({title, complete, setNotes, notes}) {
    const [agregarClase, setAgregarClase] = useState(false);
    const taskComplete = () => {
        setAgregarClase(!agregarClase);
    }
    return (
        
        <div className="w-11/12 flex flex-row p-3 bg-slate-300 rounded-lg m-5">
            <div className="w-full flex">
            {/* name={!agregarClase ? "Incompleta" : "Completa"} */}
                <p  className={`w-3/4 items-start justify-between text-left font-bold pl-5 ${agregarClase ? 'line-through font-normal' : ''}`}>{title}</p>
                <Delete work={title} taskComplete={taskComplete} />
                
            </div>
        </div>
    )
}