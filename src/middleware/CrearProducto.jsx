import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import UseAdmin from '../hooks/UseAdmin';
import UseView from '../hooks/UseView';

const CrearProducto = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [numero, setNumero] = useState('');
    const {productoModal, handleProductoModal, setProductoModal, producto,
        saveProduct } = UseView();



    useEffect(() => {
        if (producto?._id) {
            setId(producto._id);
            setNombre(producto.nombre);
            setDescripcion(producto.descripcion);
            setNumero(producto.numero)
            return
        }
        setId('');
        setNombre('');
        setDescripcion('');
        setNumero('');
    }, [producto]);

    const handleSubmit = async e => {
        e.preventDefault();
        if ([nombre, numero].includes('')) {
            mostrarAlerta({
                msg: 'Todos los Campos son obligatorios',
                error: true
            })
            return
        }
        await saveProduct({ id, nombre, descripcion, numero });
        setNombre('');
        setDescripcion('');
        setNumero('')
        setTimeout(() => {
            setProductoModal(false)
        }, 500)
    }
    return (
        <Transition.Root show={productoModal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleProductoModal}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        />
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-red-600 hover:text-red-700"
                                    onClick={handleProductoModal}
                                >
                                    <span className="sr-only">Cerrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
                                        <form onSubmit={handleSubmit}>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="nombre-producto">Nombre del producto</label>
                                                <input
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    id="nombre-producto"
                                                    type="text"
                                                    value={nombre}
                                                    onChange={e => setNombre(e.target.value)}
                                                />
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="descripcion">Familia</label>
                                                <input
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    id="descipcion"
                                                    type="text"
                                                    value={descripcion}
                                                    onChange={e => setDescripcion(e.target.value)}
                                                />
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="numero-producto">
                                                    CÓDIGO
                                                </label>
                                                <input
                                                    id="numero-producto"
                                                    type='text'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    maxLength="3"
                                                    value={numero}
                                                    onChange={e => setNumero(e.target.value)}
                                                />
                                            </div>
                                            <input
                                                type="submit"
                                                className='hover:cursor-pointer bg-red-600 text-white py-3 px-5 rounded-lg w-full'
                                                value={id ? 'Guardar cambios' : 'Crear'}
                                            />
                                        </form>
                                    </Dialog.Title>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default CrearProducto;