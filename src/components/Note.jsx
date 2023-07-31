
import { useState } from "react";
import Delete from "./Delete.jsx"

export default function Note({work, index}) {
    const [agregarClase, setAgregarClase] = useState(false);
    const taskComplete = () => {
        setAgregarClase(!agregarClase);
    }
    return (
        
        <div className="w-11/12 flex flex-row p-3 bg-slate-300 rounded-lg m-5">
            <div className="w-full flex">
                <p name={!agregarClase ? "incompleta" : "completa"} className={`w-3/4 items-start justify-between text-left font-bold pl-5 ${agregarClase ? 'line-through text-slate-500 font-normal' : ''}`}>{work}</p>
                <Delete work={work}taskComplete={taskComplete} />
                
            </div>
        </div>
    )
}