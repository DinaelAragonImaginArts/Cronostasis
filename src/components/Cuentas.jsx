import UseView from '../hooks/UseView';
import { UilPlus, UilEdit, UilTrashAlt, UilSearch } from '@iconscout/react-unicons'
import CrearCuenta from '../middleware/CrearCuenta';
import { useState } from 'react';


const Cuentas = () => {
    const { cuentas, handleCuentas, eliminarCuenta } = UseView();
    const [search, setSearch] = useState('')

    return (
        <>
            <div className='flex justify-between p-6 mx-auto w-full'>
                <h1 className='font-bold text-3xl'>Cuentas</h1>
                <button
                    onClick={() => handleCuentas()}
                    className=' flex items-center gap-2 font-bold bg-red-600 p-1.5 rounded-lg shadow-md text-white' >
                    <UilPlus /> Cuenta
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
            <div className='flex justify-center flex-wrap items-center'>
                {cuentas.length ?
                    cuentas.filter(cuenta => {
                        if (search === '') return cuenta;
                        else if (cuenta.nombre.toLowerCase().includes(search.toLowerCase()) || cuenta.siglas.toLowerCase().includes(search.toLowerCase())) {
                            return cuenta
                        }
                    }).map(cuenta => (
                        <div key={cuenta._id}
                            className='flex flex-col bg-white gap-2 rounded-lg m-4 p-4 w-[300px]'>
                            <div className='flex justify-between'>
                                <span className='font-bold text-slate-700'>Nombre:</span>
                                <span className='text-right'>{cuenta.nombre}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold text-slate-700'>Siglas: </span>
                                <span className='text-right'>{cuenta.siglas}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='font-bold text-slate-700'>Estado</span>
                                <span className='text-right'>
                                    {cuenta.activo ?
                                        <span className='text-green-600 font-bold'>Alta</span>
                                        : <span className='text-red-600 font-bold'>Baja</span>}
                                </span>
                            </div>
                            <div className='flex justify-end gap-2 mt-5'>
                                <button
                                    onClick={() => handleCuentas(cuenta)}
                                    className='bg-sky-500 text-white p-1.5 rounded-md shadow-lg'>
                                    <UilEdit />
                                </button>
                                <button
                                    onClick={() => eliminarCuenta(cuenta)}
                                    className='bg-red-500 text-white p-1.5 rounded-md shadow-lg'>
                                    <UilTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))
                    : <span>Aun no hay cuentas disponibles, crea una</span>

                }
            </div>
            <CrearCuenta />
        </>
    )
}

export default Cuentas