
import "../components/css/ButtonNav.css";
import { Link } from "react-router-dom";

function ButtonNav (){
    return(
        <div className="container">
             <Link to="/home" className="nav-link">Buscar</Link>
        </div>
    )
}

export default ButtonNav;