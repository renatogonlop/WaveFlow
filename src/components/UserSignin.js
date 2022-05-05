import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSignin.css';
import Logo from './logo';

export default function UserSignin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ dadosInvalidos: '' });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`http://localhost:9999/usuarios?email=${email}`)
            .then((res) => {
                const usuario = res.data[0];
                /* CASO A SENHA DO USUARIO SENHA DIFERENTE DA SENHA DO BANCO */
                if (usuario.senha !== senha) {
                    setErros({ dadosInvalidos: 'Dados Inválidos:' });
                    return;
                }
                /* CASO OS DADOS BATAM COM DO BANCO, ARMAZENA AS INFORMAÇÕES */
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                navigate.push('/')
            })
    }

    return (
        <>
            {/* EM CASO DE ERRO */}
            {erros.dadosInvalidos && (<div class="alert alert-danger">{erros.dadosInvalidos}</div>)}

            <form onSubmit={(e) => handleSubmit(e)}>
                <div id="formGlobal" className="container-fluid h-100">
                    <div
                        id="div_princ_cad"
                        className="row form-cadastro justify-content-center p-4"
                    >
                        <div
                            id="div_second_cad"
                            className="col-md-3 align-self-center area-form"
                        >
                            <Logo />
                            {/* EMAIL */}
                            <div className="user-box">
                                <label> Usuário </label>
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control bg-light btn-outline-secondary"
                                />

                            </div>
                            {/* SENHA */}
                            <div className="user-box">
                                <label> Senha </label>
                                <input
                                    type="password"
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="form-control bg-light btn-outline-secondary"
                                    required
                                />

                            </div>
                             {/* SUBMIT */}
                        <div id="div_2but">
                            <div>
                                <button
                                    id="but_inscrever"
                                    type="submit"
                                    className="btn btn-primary btn-success mt-4"
                                >
                                    ENTRAR
                                </button>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </form>
        </>
    )
}

