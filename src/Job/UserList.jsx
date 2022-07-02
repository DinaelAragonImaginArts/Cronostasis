import { UilPlus } from '@iconscout/react-unicons'
import UseView from '../hooks/UseView';

const UserList = ({ user }) => {
    const {nombre } = user
    const { agregarColaborador } = UseView();
    return (
        <>
            <div className="flex my-3 bg-white p-5 rounded-lg shadow items-center gap-5 w-[320px] justify-between">
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">Nombre: </span>
                    <span>{nombre}</span>
                </div>
                <div className="flex justify-end items-end mt-2">
                    <button
                        onClick={() => agregarColaborador(user)}
                        className="p-1 bg-green-500 rounded-lg shadow text-white">
                        <UilPlus />
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserList