import "./Cadastro.css";
import { useState } from "react";
import React from "react";

function Cadastro() {
  var [nome, setNome] = useState("");
  var [senha, setSenha] = useState("");
  var [email, setEmail] = useState("");
  var [emailConfirmacao, setEmailConfirmacao] = useState("");
  var [disable, setDisable] = React.useState(false);

  var boolean = true;
  const usuario = {
    nome,
    senha,
    email,
    emailConfirmacao,
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
      alert("teste");
      /* const teste = this.ref.teste; */
      /* teste.disabled; */
      setDisable(true);
    } else {
      setDisable(false);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="container-fluid h-100">
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
                id="text_active"
                className="form-control bg-light btn-outline-secondary"
                placeholder="Como devemos chamar você?"
              ></input>
            </div>

            <div className="input-group mt-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                id="text_active"
                className="form-control bg-light btn-outline-secondary"
                placeholder="E-mail"
              ></input>
            </div>

            <div className="input-group mt-3">
              <input
                type="email"
                onChange={(e) => setEmailConfirmacao(e.target.value)}
                id="text_active"
                className="form-control bg-light btn-outline-secondary"
                placeholder="Confirmar e-mail"
                onBlur={(e) => handleValidacao(e)}
              ></input>
            </div>

            <div className="input-group mt-3">
              <input
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                id="text_active"
                className="form-control bg-light btn-outline-secondary"
                placeholder="Crie uma senha"
              ></input>
            </div>

            <div id="data_cont" className="container mt-3 ">
              <div className="input-group mt-3 mb-3">
                <input
                  id="data_box"
                  type="number"
                  min={1}
                  max={31}
                  class="form-control"
                  placeholder="Dia"
                />

                <select id="mes_box" class="form-select">
                  <option disabled selected>
                    Mês
                  </option>
                  <option>Janeiro</option>
                  <option>Fevereiro</option>
                  <option>Março</option>
                  <option>Abril</option>
                  <option>Maio</option>
                  <option>Junho</option>
                  <option>Julho</option>
                  <option>Agosto</option>
                  <option>Setembro</option>
                  <option>Outubro</option>
                  <option>Novembro</option>
                  <option>Dezembro</option>
                </select>

                <input
                  id="data_box"
                  min={1922}
                  max={2070}
                  type="number"
                  class="form-control"
                  placeholder="Ano"
                />
              </div>
            </div>

            <div className="conteiner mt-3">
              <div className="form-check">
                <input
                  type="radio"
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
