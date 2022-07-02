import { Outlet } from 'react-router-dom'
import logo from '../utils/timeApp.png';

const Public = () => {
    return (
        <div className='min-h-screen bg-slate-800 flex flex-col justify-center items-center'>
            <div className='w-1/3 p-6'>
                <img src={logo} alt="Logo TimeApp" />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Public
