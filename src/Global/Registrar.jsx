import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Alerta from '../utils/Alerta';
import cliente from '../config/cliente';


const areas = ['Producción', 'Digital'];
const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [area, setArea] = useState('');
    const [alerta, setAlerta] = useState({})

    const handleRegistro = async (e) => {
        e.preventDefault();
        if ([email, password, nombre, repetirPassword, area].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }
        if (password !== repetirPassword) {
            setAlerta({
                msg: 'Tus passwords no son iguales',
                error: true
            });
            return
        }
        if (password.length < 8) {
            setAlerta({
                msg: 'Tu contraseña debe tener al menos 8 caracteres',
                error: true
            });
            return
        }

        try {
            const { data } = await cliente.post('usuarios', { nombre, email, password, area});
            setAlerta({})
            localStorage.setItem('token', data.token);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setAlerta({})
        }, 500);
    }, [nombre, password, repetirPassword, email, area])

    const { msg } = alerta

    return (
        <div>
            <div>
                {msg && <Alerta alerta={alerta} />}
            </div>
            <form
                onSubmit={handleRegistro}
                className='bg-white py-4 px-6 shadow rounded-lg font-semibold flex flex-col gap-8'>
                <span className='text-center text-2xl font-bold uppercase'>Registro</span>
                <div className='flex  items-center justify-between gap-3'>
                    <label htmlFor="nombre" className="min-w-[100px]" >Nombre:</label>
                    <input type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre completo"
                        className='shadow py-2 px-4 focus:outline-none bg-slate-200 w-full rounded-lg text-[14px]'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='flex  items-center justify-between gap-3'>
                    <label className="min-w-[100px]" htmlFor="email" >E-mail:</label>
                    <input type="text"
                        name="email"
                        id="email"
                        placeholder="ejemplo@dominio.com"
                        className='shadow py-2 px-4 focus:outline-none bg-slate-200 w-full rounded-lg text-[14px]'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex  items-center justify-between gap-3'>
                    <label className="min-w-[100px]" htmlFor="password" >Password:</label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        className='shadow py-2 px-4 focus:outline-none bg-slate-200 w-full rounded-lg text-[14px]'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className='flex  items-center justify-between gap-3'>
                    <label className="min-w-[100px]" htmlFor="re-password" >Repite tu password:</label>
                    <input type="password"
                        name="re-password"
                        id="re-password"
                        placeholder="******"
                        className='shadow py-2 px-4 focus:outline-none bg-slate-200 w-full rounded-lg text-[14px]'
                        value={repetirPassword}
                        onChange={(e) => setRepetirPassword(e.target.value)}
                    />
                </div>
                <div className='flex  items-center justify-between gap-3'>
                    <label className="min-w-[100px]" htmlFor="area" >Área:</label>
                    <select id='area'
                        placeholder="Selecciona tu área"
                        className="shadow py-2 px-4 focus:outline-none bg-slate-200 w-full rounded-lg text-[14px]"
                        value={area}
                        onChange={e => setArea(e.target.value)}
                    >
                        <option value={''}>---Seleccionar---</option>
                        {areas.map(opcion => (
                            <option key={opcion}>{opcion}</option>
                        ))}
                    </select>
                </div>
                <div className='flex  items-center justify-center gap-3 mt-4'>
                    <input type="submit"
                        value={'Registrar'}
                        className='shadow py-2 px-10 bg-green-300 hover:bg-green-500 rounded-lg text-[14px] hover:cursor-pointer'
                    />
                </div>
            </form>
            <div className='text-white flex flex-col gap-3 items-center justify-center text-sm p-4'>
                <Link to='/'>¿Ya tienes una cuenta? Inicia sesion</Link>
            </div>
        </div>
    )
}

export default Registrar