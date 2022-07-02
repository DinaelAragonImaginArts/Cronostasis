import { UilTrashAlt } from '@iconscout/react-unicons'
import UseView from '../hooks/UseView';

const UsersComanda = ({ colaborador }) => {
    const { nombre, email } = colaborador
    const { eliminarColaborador } = UseView();

    return (
        <div className="flex my-3 bg-slate-800 text-white p-5 rounded-lg shadow items-center gap-5  w-[320px] justify-between">
            <div className="flex flex-col gap-2">
                <span className="font-semibold">Nombre: </span>
                <span>{nombre}</span>
            </div>
            <div>
                <button
                    onClick={() => eliminarColaborador(colaborador)}
                    className="p-1 bg-red-500 rounded-lg shadow text-white">
                    <UilTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default UsersComanda