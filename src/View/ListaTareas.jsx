
const ListaTareas = ({ tareas }) => {
  const { nombre, descripcion, estado, tiempo, usuario } = tareas

  return (
    <>
      <div className="p-4 rounded-lg my-3 shadow ">
        <div className="flex flex-col max-w-xs">
          <div className="flex gap-3 justify-between">
            <span className="flex-1 max-w-[75px] font-semibold text-gray-500">Titulo: </span>
            <span className="flex-1 text-gray-400">{nombre}</span>
          </div>
          <div className="flex gap-3 justify-between">
            <span className="flex-1 max-w-[75px] font-semibold text-gray-500">Estado: </span>
            <span className="flex-1 text-gray-400">{estado ? 'Finalizada' : 'Inconclusa'}</span>
          </div>
          <div className="flex gap-3 justify-between">
            <span className="flex-1 max-w-[75px] font-semibold text-gray-500">Detalles:</span>
            <span className="flex-1 text-gray-400">{descripcion === '' ? 'No hay datos disponibles' : descripcion}</span>
          </div>
          <div className="flex gap-3 justify-between">
            <span className="flex-1 max-w-[75px] font-semibold text-gray-500">Tiempo: </span>
            <span className="flex-1 text-gray-400">{tiempo === null ? '0 Minutos' : `${tiempo} minutos`}</span>
          </div>
          <div className="flex gap-3 justify-between">
            <span className="flex-1 max-w-[75px] font-semibold text-gray-500">Usuario: </span>
            <span className="flex-1 text-gray-400">{usuario}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaTareas;