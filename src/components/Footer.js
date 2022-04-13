import { getCurrentDate } from '../utils/CurrentDate';
import '../components/css/Footer.css'
import ButtonFooter from './ButtonFooter';

function Footer() {
  return (
    <footer className="myFooter bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h2 className="logo">Wave Flow</h2>
          </div>
          <div className="col-sm-2">
            <h5>EMPRESA</h5>
            <ul>
              <li>Sobre</li>
              <li>Empregos</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>COMUNIDADE</h5>
            <ul>
              <li>Para Artistas</li>
              <li>Desenvolvedores</li>
              <li>Publicidade</li>
              <li>Investidores</li>
              <li>Fornecedores</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>SUPORTE</h5>
            <ul>
              <li>FAQ</li>
              <li>Telefones</li>
              <li>Chat</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <div className="social-networks">
              <i className="fa fa-twitter"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
            </div>

            <ButtonFooter />

          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {getCurrentDate()} Copyright - Wave Flow</p>
      </div>
    </footer>
  );
}

export default Footer;
