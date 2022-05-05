import "../components/css/ButtonNav.css";
import { Link } from "react-router-dom";

function ButtonNav (){
    return(
        <div className="container">
             <div className="btn"><Link to="/Busca">Buscar</Link></div>
        </div>
    )
}

export default ButtonNav;