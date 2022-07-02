import { Outlet } from 'react-router-dom'
import Header from '../utils/Header'
import UseAuth from '../hooks/UseAuth';
import Loader from '../utils/Loader';

const AuthLayout = () => {
    const { autentication } = UseAuth();
    if (autentication) {
        return (
            <div className='flex flex-col min-h-screen bg-[#ebf0f5]'>
                <div>
                    <Header autentication={autentication} />
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        )
    }
    else {
        return (
            <Loader />
        )
    }
}

export default AuthLayout