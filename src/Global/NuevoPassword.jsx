import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import cliente from "../config/cliente";
import Alerta from "../utils/Alerta";

const NuevoPassword = () => {
  const [tokenValido, setTokenValido] = useState(false)
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams();

  const { token } = params;
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await cliente(`/usuarios/olvide-password/${token}`)
        setTokenValido(true);

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken();
  }, [])
  const handleSubmit = async e => {
    e.preventDefault();
    if (password < 6) {
      setAlerta({
        msg: 'El password debe ser minimo de 6 caracteres',
        error: true
      })
      return
    }
    try {
      const url = `/usuarios/olvide-password/${token}`;

      const { data } = await cliente.post(url, { password })
      setAlerta({
        msg: data.msg,
        error: false
      })

      setPassword('');
      setPasswordModificado(true);

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-center my-5 text-slate-100 uppercase text-5xl">Reestrablece tu password</h1>
      <div className="">
        <div className="">
          {msg && <Alerta alerta={alerta} />}
          {tokenValido && (
            <form className='my-10 bg-white shadow rounded-lg p-10 ' onSubmit={handleSubmit}>
              <div className='my-5'>
                <label htmlFor="password" className='uppercase text-gray-600 block text-xl font-bold'>Nuevo password</label>
                <input
                  id='password'
                  type="password"
                  placeholder='Ingresa tu nuevo password'
                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Guardar nuevo password"
                className="bg-red-500 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-red-800 transition-colors" />
              {passwordModificado && (
                <Link className="block text-center my-5 uppercase text-sm negro"
                  to="/"> Iniciar sesión
                </Link>)}
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default NuevoPassword