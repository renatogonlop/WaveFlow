import React from 'react';
import { Link } from "react-router-dom";
import '../components/css/NavBar.css';
import '../components/css/ButtonLogin.css';
import Logo from './logo';
import ButtonNav from './ButtonNav';


const navbar = () => {
    return (
        <div className="container__Nav">
            <Logo />
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container__Nav__in">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item d-flex">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <Link to="/faq" className="nav-link">Faq</Link>
                            </li>
                            <li className="nav-item d-flex">
                                <Link to="/cadastro" className="nav-link">Cadastro</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            {/* <input className="me-1 d-flex" type="text" placeholder="Artistas ou músicas"></input> */}
                            <ButtonNav />

                            <div className="contn">
                                <div className="btn2"><Link to="/Busca">Login</Link></div>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default navbar;