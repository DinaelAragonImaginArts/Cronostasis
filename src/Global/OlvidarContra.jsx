import cliente from "../config/cliente"
import { useState } from 'react'
import Alerta from "../utils/Alerta";
import { Link } from "react-router-dom";

const OlvidarContra = () => {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleReset = async (e) => {
        e.preventDefault()
        if (email == '') {
            setAlerta({
                msg: 'El e-mail es obligatorio',
                error: true
            })
            return
        }
        try {
            const { data } = await cliente.post('/usuarios/olvide-password', { email })
            setAlerta({
                msg: data.msg,
                error: false
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: false
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        }

    }

    const { msg } = alerta;
    return (
        <div className='flex flex-col justify-center items-center'>
            {msg && <Alerta alerta={alerta} />}
            <form onSubmit={handleReset} className='bg-white py-4 px-6 shadow rounded-lg font-semibold flex flex-col gap-8'>
                <span className="text-center font-bold text-2xl">Ingresa tu E-mail</span>
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
                <div className='flex  items-center justify-center gap-3 mt-4'>
                    <input type="submit"
                        value={'Enviar'}
                        className='shadow py-2 px-10 bg-green-300 hover:bg-green-500 rounded-lg text-[14px] hover:cursor-pointer'
                    />
                </div>
            </form>
            <div className='text-white flex flex-col gap-3 items-center justify-center text-sm p-4'>
                <Link to='/'>Inicia sesión</Link>
                <Link to='/registrar'>¿No tienes cuenta? Registrate</Link>
            </div>
        </div>
    )
}

export default OlvidarContra