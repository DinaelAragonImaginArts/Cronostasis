import { useState, useEffect } from 'react'
import { CSVLink } from 'react-csv';
import UseAdmin from '../hooks/UseAdmin';
import CargaBitacora from '../utils/CargaBitacora';
import { formatSort, fechaBitacora } from '../helpers/FormatearFechas';


const Bitacora = () => {
  const [fecha, setFecha] = useState('');
  const [listTarea, setListTarea] = useState('');
  const [listaFiltro, setListaFiltro] = useState([])
  const { tareas } = UseAdmin();
  const [validate, setValidate] = useState(false);

  const list = tareas.map(tarea => {
    return {
      usuario: tarea.usuario,
      area: tarea.area,
      fechaEntrega: fechaBitacora(tarea.fechaEntrega),
      filtroFecha: formatSort(tarea.fechaEntrega),
      comanda: tarea.comanda,
      cuenta: tarea.cuenta,
      tiempo: tarea.tiempo,
      nombre: tarea.nombre,
    }
  })

  useEffect(() => {
    if (tareas.length) {
      setListTarea(list)
    }
  }, [tareas, fecha])


  const headers = [
    { label: "Nombre", key: "usuario" },
    { label: "Area", key: "area" },
    { label: "Semana", key: "" },
    { label: "Dia", key: "fechaEntrega" },
    { label: "Comanda", key: "comanda" },
    { label: "Cuenta", key: "cuenta" },
    { label: "Minutos", key: "tiempo" },
    { label: "Tarea", key: "nombre" },
  ]

  const handleFecha = (e) => {
    e.preventDefault()
    setValidate(true)
    const filtro = list?.filter(day => day.filtroFecha >= formatSort(fecha))
    setListaFiltro(filtro);
    setTimeout(() => {
      setValidate(false)
    }, 1000)
  }

  return (
    <div className='max-w-screen-lg flex flex-col p-4 mx-auto'>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <div className='flex flex-col lg:flex-row md:flex-row gap-3 justify-between items-center'>
          <form onSubmit={(e) => handleFecha(e)} className='flex items-center justify-between gap-4'>
            <div className='p-2 flex-col flex'>
              <label htmlFor="fecha" className='font-semibold px-1'>Fecha de inicio</label>
              <input
                className='bg-amber-100 p-2 leading-tight rounded-lg shadow-md focus:outline-none'
                type="date"
                id="fecha"
                value={fecha}
                onChange={(e) => { setFecha(e.target.value) }} />
            </div>
            <div>
              <br></br>
              <input
                type="submit"
                className='py-1 px-4 bg-green-600 text-white  rounded-lg shadow-lg font-semibold hover:cursor-pointer' />
            </div>
          </form>
          {validate ? <CargaBitacora /> :
            <div>
              {listaFiltro.length > 0 ?
                <div>
                  <CSVLink
                    data={listaFiltro}
                    headers={headers}
                    className="bg-red-600 rounded-md text-white flex items-center px-4 py-3 text-md gap-1"
                    filename="Bitacora"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>Bitácora</CSVLink>
                </div>
                : <span 
                className='text-slate-600 font-semibold border-b-2 border-gray-200 py-2 px-5 rounded-lg'> Selecciona una fecha de inicio</span>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Bitacora