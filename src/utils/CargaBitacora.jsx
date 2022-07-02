import Lottie from "lottie-react";
import Loading from "./animacion4.json";

const style = {
    height: 50,
  };

const CargaBitacora = () => {
    return (
        <div>
            <Lottie animationData={Loading}  style={style}/>
        </div>
    )
}

export default CargaBitacora
