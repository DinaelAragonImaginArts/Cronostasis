import { createContext, useEffect, useState } from 'react';
import cliente from '../config/cliente';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [tareas, setTareas] = useState([]);

    //Modals
    useEffect(() => {
        const getUsersList = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await cliente('/admin/usuarios', config)
                setUsuarios(data)
            } catch (error) {
                console.log(error);
            }
        }
        getUsersList()

        const getTareas = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await cliente('/admin/tareas', config)
                setTareas(data)
            } catch (error) {
                console.log(error);
            }
        }
        getTareas()
    }, [])
    return (
        <AdminContext.Provider
            value={{
                usuarios,
                tareas,
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export {
    AdminProvider
}

export default AdminContext;