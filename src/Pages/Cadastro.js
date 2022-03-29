import './Cadastro.css'

function Cadastro() {
  return (
    <>
      <div className="container-fluid h-100">
        <div id='div_princ_cad' className="row form-cadastro justify-content-center p-4" >
          <div id='div_second_cad' className="col-md-3 align-self-center area-form">

            <span className="medium d-block text-center">Cadastre usando sua conta <b>Google</b></span>
            <div id='div_but_google'>
              <button id='but_google' type="button" className="btn btn-primary btn-block mt-2">Google</button>
            </div>


            <span className="medium d-block text-center"><b>ou</b></span>
            <span className="medium d-block text-center">Crie um novo cadastro</span>

            <form action="">
              <div className="input-group mt-3">
                <input type="text" className="form-control bg-light btn-outline-secondary" placeholder="Nome Completo"></input>
              </div>

              <div className="input-group mt-3">
                <input type="email" className="form-control bg-light btn-outline-secondary" placeholder="E-mail"></input>
              </div>

              <div className="input-group mt-3">
                <input type="text" className="form-control bg-light btn-outline-secondary" placeholder="Login"></input>
              </div>

              <div className="input-group mt-3">
                <input type="password" className="form-control bg-light btn-outline-secondary" placeholder="******"></input>
              </div>

              <div id='div_2but'>
                <div>
                  <button id='but_canCad' type="button" className="btn btn-secondary mt-4">CANCELAR</button>
                </div>

                <div>
                  <button id='but_canCad' type="button" className="btn btn-primary mt-4">CADASTRAR</button>
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