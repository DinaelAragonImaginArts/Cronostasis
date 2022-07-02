import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Alerta from '../utils/Alerta';
import cliente from '../config/cliente';
import UseAuth from '../hooks/UseAuth'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const { setAutentication } = UseAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if ([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }
        try {
            const { data } = await cliente.post('/usuarios/login', { email, password });
            localStorage.setItem('token', data?.token);
            setAutentication(data);
            if (data.area === "Administracion") {
                navigate('/app/administracion')
            } else {
                navigate('/app/comandas')
            }
            setAlerta({})
        } catch (error) {
            console.log(error)
        }
    }
    const { msg } = alerta
    return (
        <div>
            <div>
                {msg && <Alerta alerta={alerta} />}
            </div>
            <form
                onSubmit={handleLogin}
                className='bg-white py-4 px-6 shadow rounded-lg font-semibold flex flex-col gap-8'>
                <span className='text-center text-2xl font-bold uppercase'>Login</span>
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
                <div className='flex  items-center justify-center gap-3 mt-4'>
                    <input type="submit"
                        value={'Login'}
                        className='shadow py-2 px-10 bg-green-300 hover:bg-green-500 rounded-lg text-[14px] hover:cursor-pointer'
                    />
                </div>
            </form>
            <div className='text-white flex gap-3 items-center justify-between text-sm p-4'>
                <Link to='/registrar'>¿No tienes cuenta? Registrate</Link>
                <Link to='/olvide-password'>¿Olvidaste tu contraseña?</Link>
            </div>
        </div>
    )
}

export default Login