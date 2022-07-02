import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import UseView from '../hooks/UseView';
import UseAuth from '../hooks/UseAuth';
import Alerta from '../utils/Alerta';

const CrearComanda = () => {
    const [nombre, setNombre] = useState('');
    const [siglas, setSiglas] = useState('');
    const [nomenglatura, setNomenglatura] = useState('');
    const [numero, setNumero] = useState(0);
    const [creador, setCreador] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [fecha, setFecha] = useState('');
    const [productoComanda, setProductoComanda] = useState('');
    const [final, setFinal] = useState('');
    const [crudo, setCrudo] = useState();
    const [numeroProducto, setNumeroProducto] = useState('');
    const [creadorNombre, setCreadorNombre] = useState('');
    const [comentario, setComentario] = useState('');
    //Hooks
    const { modalComanda, handleComanda, crearComanda, productos, cuentas, comandas  } = UseView();
    const { autentication } = UseAuth();

    const siglasCliente = cuentas?.map((item) => {
        return item.siglas;
    })
    const product = productos?.map(item => {
        return [
            item.numero,
            item.nombre
        ]
    })


    useEffect(() => {
        const filterItems = (arr, query) => {
            return comandaCrudo?.filter(el => el?.toLowerCase().indexOf(query?.toLowerCase()) !== -1)
        }
        const comandaCrudo = comandas?.map(item => {
            return item.crudo
        })
        setCreadorNombre(autentication.nombre);
        setNumeroProducto(nomenglatura[0] + nomenglatura[1] + nomenglatura[2])
        setProductoComanda(nomenglatura)
        const provider = filterItems(comandaCrudo, crudo);
        const conteo = provider?.lastIndexOf(crudo);
        const number = conteo + 2;
        setFinal("-" + number?.toString());
        setNombre(siglas + numeroProducto + final);
        setCrudo(siglas + nomenglatura);
        setCreador(autentication);
        setCuenta(siglas);
        setNumero(final);
    })

    const handleSubmit = async e => {
        e.preventDefault();
        await crearComanda({ nombre, comentario, creador, cuenta, fecha, productoComanda, numero, crudo, creadorNombre });
    }
    return (
        <Transition.Root show={modalComanda} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleComanda}>
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
                                    className="bg-white rounded-md text-[#ff3131]  hover:text-[#ff0000]"
                                    onClick={handleComanda}
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
                                                    htmlFor="prioridad">
                                                    Cuenta
                                                </label>
                                                <select
                                                    id="prioridad"
                                                    placeholder='Nombre de la tarea'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    value={siglas}
                                                    onChange={e => setSiglas(e.target.value)}
                                                >
                                                    <option value="">--- Seleccionar ---</option>
                                                    {siglasCliente?.map(opcion => (
                                                        <option key={opcion}>{opcion}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="prioridad">
                                                    Producto
                                                </label>
                                                <select
                                                    id="prioridad"
                                                    placeholder='Nombre de la tarea'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    value={nomenglatura}
                                                    onChange={e => setNomenglatura(e.target.value)}
                                                >
                                                    <option value="">--- Seleccionar ---</option>
                                                    {product?.map(producto => (
                                                        <option key={producto}>{producto}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="comentario">
                                                    Comentarios
                                                </label>
                                                <textarea
                                                    id="comentario"
                                                    placeholder='Comentarios'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    value={comentario}
                                                    onChange={e => setComentario(e.target.value)}
                                                />
                                            </div>
                                            <div className='mb-5'>
                                                <label
                                                    className='text-gray-700 uppercase font-bold text-sm'
                                                    htmlFor="fecha-entrega">
                                                    Fecha de entrega
                                                </label>
                                                <input
                                                    id="fecha-entrega"
                                                    type='date'
                                                    className='border w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                                                    value={fecha}
                                                    onChange={e => setFecha(e.target.value)}
                                                />
                                            </div>
                                            <input
                                                type="submit"
                                                className='hover:cursor-pointer bg-[#FF0000] text-white py-3 px-5 rounded-lg w-full'
                                                value={"Crear"}
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
export default CrearComanda;



