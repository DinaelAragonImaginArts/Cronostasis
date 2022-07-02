import { useContext } from "react";
import AdminContext from '../context/AdminProvider';

const UseAdmin = () => {
    return useContext(AdminContext);
}

export default UseAdmin