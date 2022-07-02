import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilBuilding } from '@iconscout/react-unicons';
import { UilFileAlt } from '@iconscout/react-unicons';
import { UilObjectUngroup } from '@iconscout/react-unicons';
import { UilFileGraph } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const ControlButtons = () => {
    return (
        <>
            <div className='bg-white fixed lg:relative md:relative max-w-fit rounded shadow flex flex-col p-2 lg:px-8 md:px-5 justify-around h-[81vh] lg:h-[89vh] md:h-[91vh]'>
                <Link to='productos' className='flex gap-2 items-center'>
                    <UilBriefcaseAlt /> <span className='hidden lg:block md:block'>Productos</span>
                </Link>
                <Link to='cuentas' className='flex gap-2 items-center'>
                    <UilBuilding /> <span className='hidden lg:block md:block'>Cuentas</span>
                </Link>
                <Link to='comandas' className='flex gap-2 items-center'>
                    <UilFileAlt /> <span className='hidden lg:block md:block'>Comandas</span>
                </Link>
                <Link to='tipo-tarea' className='flex gap-2 items-center whitespace-nowrap'>
                    <UilObjectUngroup /> <span className='hidden lg:block md:block'>Tipo Tarea</span>
                </Link>
                <Link to='bitacora' className='flex gap-2 items-center whitespace-nowrap'>
                    <UilFileGraph />
                    <span className='hidden lg:block md:block'>Bitácora</span>
                </Link>
            </div>
        </>
    )
}

export default ControlButtons