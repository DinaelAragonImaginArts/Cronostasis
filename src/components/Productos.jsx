import UseView from '../hooks/UseView';
import { fechaBitacoraServer } from '../helpers/FormatearFechas';
import { UilPlus, UilEdit, UilTrashAlt, UilSearch } from '@iconscout/react-unicons'
import Alerta from '../utils/Alerta'
import CrearProducto from '../middleware/CrearProducto';
import { useState } from 'react'

const Productos = () => {
    const { productos, alerta, eliminarProducto, handleProductoModal } = UseView();
    const [search, setSearch] = useState('')

    const productosSort = productos?.sort((a, b) => {
        if (a.numero > b.numero) {
            return 1;
        }
        if (a.numero < b.numero) {
            return -1;
        }
        return 0;
    })
    const { msg } = alerta

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col w-full'>
                {msg && <Alerta alerta={alerta} />}
                <div className='flex lg:justify-between md:justify-between justify-center p-2 items-center'>
                    <h1 className='font-semibold lg:text-3xl md:lg:text-3xl p-6 text-xl text-slate-700'>Productos Activos</h1>
                    <button
                        onClick={handleProductoModal}
                        className='bg-green-500 text-white flex justify-between p-1.5 rounded-md shadow-lg gap-2'>
                        <UilPlus />
                        <span className='font-semibold'> producto</span>
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
                <div className='flex flex-wrap items-center justify-center'>
                    {productosSort?.length ?
                        productosSort.filter(producto => {
                            if (search === '') return producto;
                            else if (producto.nombre.toLowerCase().includes(search.toLowerCase()) || producto.descripcion.toLowerCase().includes(search.toLowerCase()) || producto.numero.toLowerCase().includes(search.toLowerCase())) {
                                return producto
                            }
                        }).map(producto => (
                            <div key={producto._id} className='flex flex-col bg-white rounded-lg p-4 m-4 shadow-md w-[300px]'>
                                <div className='flex gap-2 justify-between'>
                                    <span className='font-semibold'>Nombre:</span>
                                    <span className='text-right'>{producto.nombre}</span>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <span className='font-semibold'>Familia:</span>
                                    <span>{producto.descripcion}</span>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <span className='font-semibold'>Estado: </span>
                                    <span>{producto.activo === 'true' ?
                                        <span className="text-green-600 font-bold">Activo</span>
                                        : <span className='text-red-600 font-bold'>Baja</span>
                                    }
                                    </span>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <span className='font-semibold'>Fecha de creación:</span>
                                    <span>{fechaBitacoraServer(producto.createdAt)}</span>
                                </div>
                                <div className='flex gap-2 justify-between'>
                                    <span className='font-semibold'>No. Producto:</span>
                                    <span>{producto.numero}</span>
                                </div>
                                <div className='flex justify-end gap-2 mt-5'>
                                    <button
                                        onClick={() => handleProductoModal(producto)}
                                        className='bg-sky-500 text-white p-1.5 rounded-md shadow-lg'>
                                        <UilEdit />
                                    </button>
                                    <button
                                        onClick={() => eliminarProducto(producto)}
                                        className='bg-red-500 text-white p-1.5 rounded-md shadow-lg'>
                                        <UilTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))
                        : <span>Aun no hay productos disponibles</span>
                    }
                </div>
            </div>
            <CrearProducto />
        </div>
    )
}

export default Productos