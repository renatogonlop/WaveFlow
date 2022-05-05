import "./Faq.css";
import "../components/css/Button.css"

function Busca() {
  return (
    <>
      <div className="p-5 my-5 bg-dark text-white">
        <h1 className="form1">Como podemos ajudar?</h1>

        <p className="form1">
          Descreva sua dúvida, na caixa de dialogo abaixo, quando digitar vai
          aparecer opções para facilitar na busca pelo que procura.
        </p>

        <input
          id="inputfaq" className="form-control"
          type="text"
          placeholder="Escreva sua dúvida"
        />

        <div className="container buttondiv1">
          <div className="btn"><a href="home">Buscar</a></div>
        </div>
      </div>


    </>
  );
}
export default Busca;
