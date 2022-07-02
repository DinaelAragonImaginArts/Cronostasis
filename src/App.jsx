import { BrowserRouter, Routes, Route } from "react-router-dom"
//Layouts
import AuthLayout from './Layout/AuthLayout';
import Public from "./Layout/Public";
//Providers
import { AuthProvider } from "./context/AuthProvider";
import { ViewProvider } from "./context/ViewProvider";
import { AdminProvider } from "./context/AdminProvider";
//session
import Login from "./Global/Login";
import Registrar from './Global/Registrar';
import OlvidarContra from "./Global/OlvidarContra";
//Administracion 
import Administracion from './Admin/Administracion';
//User production
import Comandas from './View/Comandas';
import TareasCreate from "./View/TareasCreate";
import Users from "./Job/Users";
import Bitacora from "./components/Bitacora";
import Productos from "./components/Productos";
import Control from "./View/Control";
import Cuentas from "./components/Cuentas";
import AllComandas from "./components/AllComandas";
import TipoTarea from "./components/TipoTarea";
import ConfirmarCuenta from './Global/ConfirmarCuenta';
import NuevoPassword from './Global/NuevoPassword';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ViewProvider>
            <AdminProvider>
              <Routes>
                <Route exact path="/" element={<Public />}>
                  <Route index element={<Login />} />
                  <Route path='registrar' element={<Registrar />} />
                  <Route path="olvide-password" element={<OlvidarContra />} />
                  <Route path="olvide-password/:token" element={<NuevoPassword />} />
                  <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                </Route>
                <Route exact path="/app" element={<AuthLayout />}>
                  <Route index element={<Control />} />
                  <Route path="administracion" element={<Administracion />} />
                  <Route path="administracion/bitacora" element={<Bitacora />} />
                  <Route path="administracion/usuarios/:id" element={<Users />} />
                  <Route path='administracion/productos' element={<Productos />} />
                  <Route path='administracion/cuentas' element={<Cuentas />} />
                  <Route path='administracion/comandas' element={<AllComandas />} />
                  <Route path='administracion/tipo-tarea' element={<TipoTarea />} />
                  <Route path="comandas" element={<Comandas />} />
                  <Route path="comandas/:id" element={<TareasCreate />} />
                </Route>
              </Routes>
            </AdminProvider>
          </ViewProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
