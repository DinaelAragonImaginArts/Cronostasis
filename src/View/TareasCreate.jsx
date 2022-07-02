import UseView from '../hooks/UseView';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Loader from '../utils/Loader';
import Alerta from '../utils/Alerta';
import NuevaTarea from '../middleware/NuevaTarea';
import Tareas from './Tareas';
import ListaTareas from './ListaTareas';
import EliminarTarea from '../middleware/EliminarTarea';

const TareasCreate = () => {
  const params = useParams();
  const { getComanda, comanda, cargando, alerta, handleModalTarea } = UseView()

  useEffect(() => {
    getComanda(params.id)
  }, [])
  const { msg } = alerta
  return (
    <> {cargando ? <Loader />
      : <div className='lg:p-10 p-4 flex flex-col gap-2'>
        {msg && <Alerta alerta={alerta} />}
        < div className='flex flex-col gap-3 justify-center lg:flex-row lg:justify-between md:flex-row md:justify-between items-center  shadow bg-slate-50 p-4 rounded-lg' >
          <div className='flex flex-col gap-2'>
            <h2 className='font-black text-3xl text-center lg:text-left md:text-left lg:p-1 md:p-1'>{comanda.nombre}</h2>
            <span className='px-2 text-lg font-medium text-gray-600 text-justify mx-auto w-4/5 lg:w-full md:w-full'>{comanda.comentario}</span>
          </div>
          <div className=''>
            <button
              onClick={handleModalTarea}
              className='flex gap-1 items-center justify-center bg-red-600 py-1 px-3 rounded-lg text-white font-semibold'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>crear tarea</span>
            </button>
          </div>
        </div >
        <div>
          <div className='pt-10 border-b-slate-300 border-b-2 shadow-b py-2'>
            <span className='text-slate-600 font-medium text-lg '>Tareas de la comanda</span>
            <div>
              {comanda.tareas?.length ?
                comanda.tareas?.map(tarea => (
                  tarea.estado ?
                    <></>
                    :
                    <div key={tarea._id}>
                      <Tareas tareas={tarea} />
                    </div>
                ))
                : <span className='text-center my-5 p-10'>No hay tareas disponibles</span>
              }
            </div>
            <span className='text-slate-600 font-medium text-lg'>Tareas terminadas</span>
            <div>
              {
                comanda.tareas?.length ?
                  comanda.tareas?.map(tarea => (
                    tarea.estado ?
                      <div key={tarea._id}>
                        <ListaTareas tareas={tarea} />
                      </div>
                      :
                      <></>
                  ))
                  : <></>
              }
            </div>
          </div>
        </div>
      </div>

    }
      <NuevaTarea comandas={comanda} />
      <EliminarTarea />
    </>
  )
}

export default TareasCreate;
