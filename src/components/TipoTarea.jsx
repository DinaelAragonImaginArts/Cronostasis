import UseView from '../hooks/UseView';
import { UilPlus, UilEdit, UilTrashAlt, UilSearch } from '@iconscout/react-unicons'
import CrearTipoTarea from '../middleware/CrearTipoTarea'
import { useState } from 'react';

const TipoTarea = () => {
    const [search, setSearch] = useState('')
    const { tiposTarea, handleTiposTarea, eliminarTipoTarea } = UseView();

    return (
        <>
            <div className='px-10 py-4 flex flex-col justify-between lg:flex-row md:flex-row items-center gap-5'>
                <h1 className='font-bold text-3xl'>Tipos de tarea</h1>
                <button
                    onClick={() => handleTiposTarea()}
                    className='flex items-center gap-3 bg-red-500 text-white p-1.5 rounded-lg shadow'>
                    <UilPlus />
                    <span>Tipo tarea</span>
                </button>
            </div>
            <div className='flex justify-end items-center '>
                <div className='p-3 text-white flex gap-3 items-center bg-slate-800 max-w-fit rounded-xl shadow'>
                    <input
                        className='focus:outline-none px-4 py-1 rounded-lg shadow-lg font-medium text-slate-500'
                        type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search'
                    />
                    <UilSearch />
                </div>
            </div>
            <div className='p-4 flex flex-wrap justify-center'>

                {tiposTarea?.length ?
                    tiposTarea.filter(tipo => {
                        if (search === '') return tipo;
                        else if (tipo.nombre.toLowerCase().includes(search.toLowerCase()) || tipo.area.toLowerCase().includes(search.toLowerCase())) {
                            return tipo
                        }
                    }).map(tipo => (
                        <div
                            className='flex flex-col flex-wrap bg-white m-3 p-4 w-[300px] rounded-lg shadow '
                            key={tipo._id}>
                            <div className='flex justify-between'>
                                <span className="font-bold">Nombre: </span>
                                <span>{tipo.nombre}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className="font-bold">Área :</span>
                                <span>{tipo.area}</span>
                            </div>
                            <div className='flex justify-end px-2 pt-4 text-white gap-2'>
                                <button
                                    onClick={() => handleTiposTarea(tipo)}
                                    className='bg-sky-500 p-1.5 rounded-lg shadow-md'>
                                    <UilEdit />
                                </button>
                                <button
                                    onClick={() => eliminarTipoTarea(tipo)}
                                    className='bg-red-500 p-1.5 rounded-lg shadow-mds'>
                                    <UilTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))
                    : <span>No hay tipos de tareas creados, crea un tipo de tarea</span>}
            </div>
            <CrearTipoTarea />
        </>
    )
}

export default TipoTarea