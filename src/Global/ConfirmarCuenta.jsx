import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Alerta from "../utils/Alerta";
import cliente from "../config/cliente";


const ConfirmarCuenta = () => {
  const params = useParams();
  const { id }  = params;
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);  
  
  useEffect(()=>{
    const confirmarCuenta = async()=>{
        try {
            const url = `usuarios/confirmar/${id}`
            const {data} = await cliente(url)
            setAlerta({
              msg: data.msg,
              error: false
            })
            setCuentaConfirmada(true);
        } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error:true
          })
        }
    }
    confirmarCuenta();
  }, [])

  const {msg} = alerta;
  return (
    <>
      <h1 className="text-center my-5 text-slate-100 uppercase text-5xl">Confirmar cuenta</h1>
      <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-slate-600 uppercase text-sm negro"
          to="/"> Iniciar sesión
        </Link>)}
      </div>
    </>
  )
}

export default ConfirmarCuenta