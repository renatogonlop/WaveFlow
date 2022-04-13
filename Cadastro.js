import "./Cadastro.css";
import { useState } from "react";
import React from "react";

function Cadastro() {
  var [nome, setNome] = useState("");
  var [senha, setSenha] = useState("");
  var [email, setEmail] = useState("");
  var [emailConfirmacao, setEmailConfirmacao] = useState("");
  var [data, setData] = useState("");
  var [sex, setRadio] = useState("");
  var [disable, setDisable] = React.useState(false);


  const usuario = {
    nome,
    senha,
    email,
    emailConfirmacao,
    data,
    sex,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (usuario.email !== usuario.emailConfirmacao) {
      setDisable(true);
    }
    if (usuario.email === usuario.emailConfirmacao) {
      alert("cadastro realizado com sucesso");

      setDisable(false);
      e.target.reset();
    }
    return console.log(usuario);
  }

  function handleValidacao(e) {
    e.preventDefault();
    if (
      usuario.email !== usuario.emailConfirmacao &&
      usuario.email !== "" &&
      usuario.emailConfirmacao !== ""
    ) {
      alert("Verifique o e-mail de confirmação digitado!");
      /* const teste = this.ref.teste; */
      /* teste.disabled; */
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  return (
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
            <span className="medium d-block text-center">
              Cadastre usando sua conta <b>Google</b>
            </span>
            <div id="div_but_google">
              <button
                id="but_google"
                type="button"
                className="btn btn-primary btn-success btn-block mt-2"
              >
                <strong>Google</strong>
              </button>
            </div>

            <span className="medium d-block text-center">
              <b>ou</b>
            </span>
            <span className="medium d-block text-center">
              Crie um novo cadastro
            </span>

            <div className="input-group mt-3">
              <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                className="form-control bg-light btn-outline-secondary"
                placeholder="Como devemos chamar você?"
              />
            </div>

            <div className="input-group mt-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control bg-light btn-outline-secondary"
                placeholder="E-mail"
              />
            </div>

            <div className="input-group mt-3">
              <input
                type="email"
                onChange={(e) => setEmailConfirmacao(e.target.value)}
                className="form-control bg-light btn-outline-secondary"
                placeholder="Confirmar e-mail"
                onBlur={(e) => handleValidacao(e)}
              />
            </div>

            <div className="input-group mt-3">
              <input
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                className="form-control bg-light btn-outline-secondary"
                placeholder="Crie uma senha"
                minlength="8"
                required
              />
            </div>

            <div id="data_cont" className="container mt-3 ">
              <div className="input-group mt-3 mb-3">
                <input
                  type="date"
                  onChange={(e) => setData(e.target.value)}
                  id="data_box"
                  className="form-control"
                />
              </div>
            </div>

            <div id="radio_box" className="conteiner mt-3">
              <div className="form-check">
                <input
                  type="radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="masculino"
                />
                <label className="form-check-label" for="radio1">
                  Masculino
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="form-check-input"
                  id="radio2"
                  name="optradio"
                  value="feminino"
                />
                <label className="form-check-label" for="radio2">
                  Feminino
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  onChange={(e) => setRadio(e.target.value)}
                  className="form-check-input"
                  id="radio3"
                  name="optradio"
                  value="binario"
                />
                <label className="form-check-label" for="radio3">
                  Não Binário
                </label>
              </div>
            </div>

            <div id="div_2but">
              <div>
                <button
                  disabled={disable}
                  id="but_inscrever"
                  type="submit"
                  className="btn btn-primary btn-success mt-4"
                >
                  INSCREVER-SE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Cadastro;
