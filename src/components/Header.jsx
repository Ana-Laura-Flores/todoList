import Sticker01 from "../assets/img/05.png"
export default function Header () {

    return (
        <header className='w-full pt-5'>
            <div className='w-full h-28 flex justify-center items-center'>
                <img src={Sticker01} alt="" className='w-28'/>
                <p className="mx-10 font-['Satisfy'] text-5xl">Mis Notas</p>
            </div>
        </header>
    )
}

