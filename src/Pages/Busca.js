import "./Faq.css";
import "../components/css/Button.css"

function Busca() {
  return (
    <>
      <div className="p-5 my-5 bg-dark text-white">
        <h1 className="form1"><input
          id="inputfaq" className="form-control"
          type="text"
          placeholder="Procure o sua música!"
        /></h1>



        <div className="container buttondiv1">
          <div className="btn"><a href="home">Buscar</a></div>
        </div>
      </div>


    </>
  );
}
export default Busca;
