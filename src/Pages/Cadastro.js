import './Cadastro.css'

function Cadastro(){
    return(
        <>
<div className="container-fluid h-100">
    <div className="row form-cadastro justify-content-center p-4">
      <div className="col-md-3 align-self-center  area-form">

        <span className="small d-block text-center">Cadastre usando sua conta <b>Google</b></span>

        <button type="button" className="btn btn-primary btn-block mt-2">Google</button>

        <span className="small d-block text-center"><b>ou</b></span>
        <span className="small d-block text-center">Crie um novo cadastro</span>

        <form action="">
          <div className="input-group mt-2">
            <input type="text" className="form-control bg-light btn-outline-secondary" placeholder="Nome Completo"></input>
          </div>

          <div className="input-group mt-2">
            <input type="email" className="form-control bg-light btn-outline-secondary" placeholder="E-mail"></input>
          </div>

          <div className="input-group mt-2">
            <input type="text" className="form-control bg-light btn-outline-secondary" placeholder="Login"></input>
          </div>

          <div className="input-group mt-2">
            <input type="password" className="form-control bg-light btn-outline-secondary" placeholder="******"></input>
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-secondary mt-2">CANCELAR</button>
            </div>

            <div className="col-md-6">
              <button type="button" className="btn btn-primary mt-2">CADASTRAR</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
  </>
    )
    }
    export default Cadastro;