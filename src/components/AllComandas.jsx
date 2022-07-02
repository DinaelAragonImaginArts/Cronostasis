import UseView from '../hooks/UseView';
import { formatearFecha } from '../helpers/FormatearFechas'
import { UilSearch } from '@iconscout/react-unicons'
import { useState } from 'react';
const AllComandas = () => {
  const { comandas } = UseView();

  const [search, setSearch] = useState("");

  const comandasSort = comandas.sort(
    function (a, b) {
      if (a.terminado === b.terminado) {
        return 1;
      }
      if (a.terminado !== b.terminado) {
        return -1;
      }
    }
  )

  return (
    <>
      <div className='flex flex-col mt-10'>
        <div className='flex items-center justify-between'>
          <h1 className='p-4 text-3xl font-bold text-slate-700'>Lista de comandas</h1>
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
        </div>
        {comandas.length ?
          comandasSort.filter(comanda => {
            if (search === '') return comanda;
            else if (comanda.nombre.toLowerCase().includes(search.toLowerCase()) || comanda.productoComanda.slice(3, 300).toLowerCase().includes(search.toLowerCase()) || comanda.creadorNombre.toLowerCase().includes(search.toLowerCase()) || comanda.cuenta.toLowerCase().includes(search.toLowerCase()) || formatearFecha(comanda.fecha).toLowerCase().includes(search.toLowerCase())) {
              return comanda
            }
          }).map(comanda => (
            comanda.terminado ?
              <div
                key={comanda._id}
                className='bg-red-700 text-white rounded-lg m-2 p-4 flex flex-col'>
                <div className='flex'>
                  <span className='min-w-[150px]'>Comanda: </span>
                  <span>{comanda.nombre}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Cuenta: </span>
                  <span>{comanda.cuenta}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Tipo de producto: </span>
                  <span>{comanda.productoComanda.slice(3, 300)}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Creador: </span>
                  <span>{comanda.creadorNombre}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Fecha: </span>
                  <span>{formatearFecha(comanda.fecha)}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Estado: </span>
                  <span>{comanda.terminado ?
                    <span>Finalizado</span>
                    : <span>En progreso</span>}
                  </span>
                </div>
              </div>
              :
              <div
                key={comanda._id}
                className='bg-white rounded-lg m-2 p-4 flex flex-col'>
                <div className='flex'>
                  <span className='min-w-[150px]'>Comanda: </span>
                  <span>{comanda.nombre}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Cuenta: </span>
                  <span>{comanda.cuenta}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Tipo de producto: </span>
                  <span>{comanda.productoComanda.slice(3, 300)}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Creador: </span>
                  <span>{comanda.creadorNombre}</span>
                </div>
                <div className='flex'>
                  <span className='min-w-[150px]'>Fecha: </span>
                  <span>{formatearFecha(comanda.fecha)}</span>
                </div>
              </div>
          ))
          : <span>No hay comandas que listar</span>}
      </div>

    </>
  )
}

export default AllComandas
