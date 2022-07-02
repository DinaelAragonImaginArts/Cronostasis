import { formatDia, formatMes, formatDiaServidor, formatMesServidor, formatearFecha } from '../helpers/FormatearFechas';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComandaList = ({ comanda }) => {
    const { id, nombre, creador, cuenta, fecha, descripcion, estado } = comanda
    const [prioridad, setPrioridad] = useState('');
    const [fechaValid, setFechaValid] = useState('')
    const calendario = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const diasCalendario = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const diaComanda = formatDia(fecha);
    const mesComanda = formatMes(fecha);
    const diaServer = formatDiaServidor(new Date());
    const mesServer = formatMesServidor(new Date());


    useEffect(() => {
        //Filtro server
        const conteoMesServidor = calendario?.indexOf(mesServer);
        const mesServidorReal = (conteoMesServidor + 1)
        const Dia = diasCalendario[conteoMesServidor];
        const sumaroriaDiasDelMesServidor = diasCalendario.slice(0, mesServidorReal);
        const sumatoriaDiasServidor = sumaroriaDiasDelMesServidor?.reduce((a, b) => a + b, 0);
        const DiasNoContablesServidor = (Dia - diaServer);
        const filtroServidor = sumatoriaDiasServidor - DiasNoContablesServidor;
        //Filtro comanda
        const conteoMesComanda = calendario?.indexOf(mesComanda);
        const mesComandaReal = (conteoMesComanda + 1);
        const DiaComanda = diasCalendario[conteoMesComanda];
        const sumatoriaDiasDelMesComanda = diasCalendario.slice(0, mesComandaReal);
        const sumatoriaDiasComanda = sumatoriaDiasDelMesComanda?.reduce((a, b) => a + b, 0);
        const DiasNoContablesComanda = (DiaComanda - diaComanda)
        const filtroComanda = sumatoriaDiasComanda - DiasNoContablesComanda;

        //resta de filtros
        const FiltroTotal = filtroComanda - filtroServidor;


        if (FiltroTotal <= 1 && FiltroTotal >= 0) {
            setFechaValid(<span className='text-[#FF0000] font-black text-sm'>
                {formatearFecha(fecha)} &nbsp;
            </span>
            )
            setPrioridad(<span className='text-[#FF0000]'>Alta</span>)
        } else if (FiltroTotal > 1 && FiltroTotal <= 5) {
            setFechaValid(<span className='text-[#ffb206] font-black text-sm'>
                {formatearFecha(fecha)}
            </span>)
            setPrioridad(<span className='text-[#ffb206]'>Media</span>)
        } else if (FiltroTotal >= 6) {
            setFechaValid(<span className='text-green-600 font-black text-sm'>
                {formatearFecha(fecha)}
            </span>)
            setPrioridad(<span className='text-green-600'>Baja</span>)
        } else if (FiltroTotal < 0) {
            setFechaValid(<span className='text-[#5f656d] font-black text-sm'>
                {formatearFecha(fecha)} &nbsp;
            </span>
            )
            setPrioridad(<span className='text-[#5f656d]'>Vencida</span>)
        }
    }, [])

    return (
        <>
            {estado ? <></> :
                <div
                    className='flex flex-col lg:flex-row m-2 md:flex-row gap-3 px-4 pt-6 pb-2 bg-white rounded-2xl shadow-lg border-b-2 border-b-slate-200'>
                    <div className='flex-1 text-slate-800'>
                        <div className='flex gap-3 items-center justify-between lg:justify-start md:justify-start  pt-1'>
                            <span className='font-semibold'>Comanda:</span>
                            <span className='bg-red-500 text-gray-50 px-2 rounded-md shadow'>{nombre}</span>
                        </div>
                        <div className='flex gap-2 items-center pt-1 justify-between lg:justify-start md:justify-start '>
                            <span className='font-semibold'>Creador:</span>
                            <span className='text-zinc-500'>{creador}</span>
                        </div>
                        <div className='flex gap-2 items-center pt-1 justify-between lg:justify-start md:justify-start '>
                            <span className='font-semibold'>Cuenta:</span>
                            <span>{cuenta}</span>
                        </div>
                        <div className='flex gap-2 items-center pt-1 justify-between lg:justify-start md:justify-start '>
                            <span className='font-semibold'>Fecha:</span>
                            <span>{fechaValid}</span>
                        </div>
                        <div className='flex gap-2 pt-1 justify-between lg:justify-start md:justify-start lg:items-center md:items-center'>
                            <span className='font-semibold'>Tipo de producto:</span>
                            <span className='text-zinc-500 text-sm font-medium text-right lg:text-left md:text-left'>{descripcion.slice(3, 300)}</span>
                        </div>
                        <div className='flex gap-2 items-center pt-1 justify-between lg:justify-start md:justify-start '>
                            <span className='font-semibold '>Estado:</span>
                            <span>{prioridad}</span>
                        </div>
                    </div>
                    <div className='p-4 flex justify-center items-center'>
                        <Link to={`${id}`} className='bg-red-500 px-4 py-1 rounded-md shadow text-zinc-50' >Ver tareas</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ComandaList
