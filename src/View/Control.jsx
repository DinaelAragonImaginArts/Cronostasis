import UseAuth from '../hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const Control = () => {
    const { autentication } = UseAuth();
    if (autentication.area === 'Administracion') {
        return (
            <>
                <Navigate to='administracion' />
            </>
        )
    }
    else{
        return (
            <>
                <Navigate to='comandas' />
            </>
        )
    }
}

export default Control
