import UseAdmin from '../hooks/UseAdmin';
import UseView from '../hooks/UseView';
import UserList from './UserList';
import UsersComanda from './UsersComanda';
import Alerta from '../utils/Alerta';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Users = () => {
    const { usuarios } = UseAdmin();
    const { getComanda, comanda, alerta } = UseView();
    const [userFilter, setUserFilter] = useState([]);
    const params = useParams();
    const userDenied = comanda.colaboradores?.map(item => item._id)

    useEffect(() => {
        getComanda(params.id);
    }, [alerta])
    useEffect(() => {
        if (comanda) {
            const userList = usuarios.map(user => {
                if (!userDenied?.includes(user._id)) {
                    return user
                }
            })

            const definedUsers = userList.filter(function (elem) {
                return elem !== undefined;
            });
            setUserFilter(definedUsers);
        }
    }, [comanda, alerta])

    const { colaboradores } = comanda
    const { msg } = alerta

    return (
        <div className='flex flex-col max-w-screen-lg mx-auto justify-center items-center'>
            <div className='fixed w-full top-16'>
                {msg && <Alerta alerta={alerta} />}
            </div>
            <span className='p-4 text-3xl font-bold text-slate-600'>Añade un usuario</span>
            <div className='flex gap-2 flex-wrap flex-1 p-4'>
                {usuarios.length ?
                    userFilter?.map(user => (
                        < UserList key={user._id} user={user} comanda={comanda} />
                    ))
                    : <span>No hay usuarios para listar</span>
                }
            </div>
            <span className='p-4 text-3xl font-bold text-slate-600'>Usuarios en la comanda</span>
            <div className='flex gap-2 flex-wrap flex-1 p-4'>
                {colaboradores?.length ?
                    colaboradores.map(colaborador => (
                        <UsersComanda key={colaborador._id} colaborador={colaborador} />
                    ))
                    : <>No hay usuarios añadidos</>
                }
            </div>
        </div>
    )
}

export default Users

