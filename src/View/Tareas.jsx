import UseAuth from "../hooks/UseAuth";
import Cronometro from "../App/Cronometro";
import Controls from "./Controls";

const Tareas = ({ tareas }) => {
    const { descripcion, nombre, tiempo, estado, _id, usuario } = tareas;
    const { autentication } = UseAuth();

    if (autentication.nombre === usuario) {
        return (
            <div className="bg-white p-4 rounded-lg my-3 shadow flex flex-col lg:justify-between items-center md:justify-between lg:flex-row md:flex-row gap-5">
                <div className="flex flex-col lg:max-w-xs md:max-w-xs w-full">
                    <div className="flex gap-3 justify-between">
                        <span className="flex-1 max-w-[75px] font-bold text-slate-800">Titulo: </span>
                        <span className="flex-1 font-medium">{nombre}</span>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <span className="flex-1 max-w-[75px] font-bold text-slate-800">Estado: </span>
                        <span className="flex-1">{estado ? 'Finalizada' : 'Inconclusa'}</span>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <span className="flex-1 max-w-[75px] font-bold text-slate-800">Detalles:</span>
                        <span className="flex-1">{descripcion === '' ? 'No hay datos disponibles' : descripcion}</span>
                    </div>
                    <div className="flex gap-3 justify-between">
                        <span className="flex-1 max-w-[75px] font-bold text-slate-800">Tiempo: </span>
                        <span className="flex-1">{tiempo === null ? '0 Minutos' : `${tiempo} Minutos`}</span>
                    </div>
                </div>
                <div className="flex justify-between lg:justify-center md:justify-center gap-3 items-center w-full lg:w-48">
                    <Cronometro tarea={tareas} />
                    <Controls tarea={tareas} />
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Tareas