import UseAuth from '../hooks/UseAuth';
import UseView from '../hooks/UseView';
import { formatSort } from '../helpers/FormatearFechas';

//components
import ComandaList from './ComadaList';
import Loader from '../utils/Loader';

const Comandas = () => {
  const { autentication } = UseAuth();
  const { comandas } = UseView();
  const comanda = comandas?.map(comanda => {
    return {
      id: comanda._id,
      nombre: comanda.nombre,
      creador: comanda.creadorNombre,
      cuenta: comanda.cuenta,
      fecha: comanda.fecha,
      fechaSort: formatSort(comanda.fecha),
      descripcion: comanda.productoComanda,
      estado: comanda.terminado,
    }
  })

  function sortear(a, b) {
    return a.fechaSort.valueOf() - b.fechaSort.valueOf();
  }
  const comandaSort = comanda.sort(sortear);

    return (
      <>
        <div className='flex lg:justify-end md:justify-end  justify-center px-6'>
          <div className='mt-2 flex items-center gap-2 px-5 bg-slate-800 rounded-full text-white max-w-min py-2 whitespace-nowrap font-black'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className=''>{autentication.nombre}</span>
            <span className='w-[11px] h-[11px] bg-green-400 rounded-full ml-5'></span>
          </div>
        </div>
        <div className='mt-2 p-4'>
          {comandaSort.length ?
            comandaSort.map(comanda => (
              <ComandaList key={comanda.id} comanda={comanda} />
            ))
            : <span> No hay comandas listas, favor de comunicarse con su jefe inmediato</span>}
        </div>
      </>
    )
  }
 

export default Comandas
