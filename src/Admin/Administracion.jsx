import ControlButtons from "./ControlButtons"
import ComadasList from "./ComadasList";
import ComandasHeader from "./ComandasHeader";
import UseView from '../hooks/UseView';
import { formatSort, formatearFecha } from "../helpers/FormatearFechas";
import Alerta from '../utils/Alerta';
import CrearComanda from "../middleware/CrearComanda";
import { useState } from 'react'



const Administracion = () => {
  const [search, setSearch] = useState('')
  const { comandas, alerta } = UseView();
  const comanda = comandas?.map(comanda => {
    return {
      id: comanda._id,
      nombre: comanda.nombre,
      creador: comanda.creadorNombre,
      cuenta: comanda.cuenta,
      fecha: comanda.fecha,
      fechaSort: formatSort(comanda.fecha),
      descripcion: comanda.productoComanda.slice(3, 300),
      estado: comanda.terminado,
    }
  })

  function sortear(a, b) {
    return a.fechaSort.valueOf() - b.fechaSort.valueOf();
  }
  const comandaSort = comanda.sort(sortear);

  const { msg } = alerta;

  return (
    <>
      <div className="flex gap-2">
        <div>
          <ControlButtons />
        </div>
        <div className="flex-1 ml-10">
          <div className="flex flex-col gap-5">
            <ComandasHeader />
            <input
              type="text" placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='focus:outline-none px-4 py-1 rounded-lg shadow-lg font-medium text-slate-500'
            />
            {msg && <Alerta alerta={alerta} />}
            {comandas?.length ?
              comandaSort.filter(comanda => {
                if (search === '') return comanda;
                else if (comanda.nombre.toLowerCase().includes(search.toLowerCase()) || comanda.descripcion.toLowerCase().includes(search.toLowerCase()) || comanda.creador.toLowerCase().includes(search.toLowerCase()) || comanda.cuenta.toLowerCase().includes(search.toLowerCase()) || formatearFecha(comanda.fecha).toLowerCase().includes(search.toLowerCase())) {
                  return comanda
                }
              }).map(comanda => (
                  <ComadasList comanda={comanda} key={comanda.id} />
              ))
              : <span>No hay comandas creadas</span>
            }
          </div>
        </div>
        <CrearComanda />
      </div>
    </>
  )
}

export default Administracion