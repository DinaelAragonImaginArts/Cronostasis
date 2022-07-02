import { useContext } from "react";
import ViewContext from '../context/ViewProvider';

const UseView = () => {
    return useContext(ViewContext);
}

export default UseView