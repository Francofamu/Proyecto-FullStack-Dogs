import { Link } from "react-router-dom";
import "./inicio.css"

const Inicio = () => {

    return (
        <div className="image">
            <div className="contenedor">
                <Link to="/home">
                    <button className="boton"> Home </button>
                </Link>
            </div>
        </div>
    );
}

export default Inicio;
