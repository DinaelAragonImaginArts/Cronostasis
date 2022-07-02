import timeapp from './timeApp.png'
import { Link } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth';


const Header = ({ autentication }) => {
    const { handleCerrarSesion } = UseAuth();

    return (
        <div className="bg-slate-800 w-full flex pt-5 pb-2 flex-col  justify-center items-center lg:flex-row lg:justify-between  min-h-[100px]">
            <Link to='/app' className='max-w-xs'>
                <img src={timeapp} alt="Logo TimeApp" className='w-10/12 pl-10' />
            </Link>
            <div className='text-white font-medium flex gap-3 py-2 lg:px-4 items-center'>
                {autentication.area === 'Administracion' ?
                    <Link to='administracion'>Administracion</Link>
                    : <></>
                }
                <Link to='comandas'>Comandas</Link>
                <button className='bg-red-600 p-1 rounded-lg' onClick={() => handleCerrarSesion()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Header
