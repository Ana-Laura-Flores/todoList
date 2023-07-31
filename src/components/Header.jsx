import Sticker01 from "../assets/img/05.png"
import Filter from './Filter.jsx'
import Add from "./Add.jsx"
import Modify from "./Modify.jsx"
import Main from "./Main"

export default function Header () {

    return (
        <div className='w-full'>
            <div className='w-full h-28 flex justify-center items-center'>
                <img src={Sticker01} alt="" className='w-28'/>
                <p className="mx-10 font-['Satisfy'] text-5xl">Mis Notas</p>
            </div>
            <Main />
        </div>
    )
}

