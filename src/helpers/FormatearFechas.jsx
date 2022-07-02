
export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha?.split('T')[0].split('-'));
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}


export const formatearFechaServidor = fecha => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}

export const formatDia = fecha => {

    const nuevaFecha = new Date(fecha?.split('T')[0].split('-'));
    const opciones = {
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}
export const formatDiaServidor = fecha => {

    const nuevaFecha = new Date(fecha);
    const opciones = {
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}

export const formatMesServidor = fecha => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
        month: 'long',
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}
export const formatMes = fecha => {
    const nuevaFecha = new Date(fecha?.split('T')[0].split('-'));
    const opciones = {
        month: 'long',
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones);
}


export const fechaBitacora = fecha => {

    const date = new Date(fecha);
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return formatted_date;
}


export const fechaBitacoraServer = fecha => {
    const date = new Date(fecha?.split('T')[0].split('-'));
    let formatted_date = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)) + "-" + date.getDate()
    return formatted_date;
}

export const formatSort = fecha => {
    const date = new Date(fecha?.split('T')[0].split('-'));
    const mes = date.getMonth();
    const day = date.getDate();
    const diasCalendario = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const sumatoriaDias = diasCalendario.slice(0, (mes + 1));
    const sumatoriaDiasMes = sumatoriaDias?.reduce((a, b) => a + b, 0);
    const filtroFecha = sumatoriaDiasMes + day;
    return filtroFecha;

}

export const formatDMA = (fecha) => {
    const nuevaFecha = new Date(fecha?.split('T')[0].split('-'));
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('en-EN', opciones);
}