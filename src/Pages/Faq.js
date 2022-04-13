import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import "../components/css/Button.css"

function Faq() {
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

      <br />
      <br />

      <div className="container mt-3">
        <h2>MELHORES SOLUÇÕES</h2>

        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Não consigo redefinir a senha
              </Accordion.Header>
              <Accordion.Body>
                Redefinição de senha. Insira seu nome de usuário do Spotify ou o
                e-mail que você usou no cadastro. Nós mandaremos um e-mail com
                seu nome de usuário e um link para você redefinir sua senha. Se
                ainda precisa de ajuda, contate o Suporte do Spotify.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Criar ou entrar em um plano Familia
              </Accordion.Header>
              <Accordion.Body>
                O Premium Família é um plano com desconto para até 6 pessoas que
                moram juntas. Como cada membro do plano usa sua própria conta,
                não é necessário compartilhar uma senha e todo mundo pode manter
                suas próprias músicas e playlists salvas.
                <p>
                  Para mais informações sobre o Plano Família{" "}
                  <a href="-">clique aqui</a>.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Não lembro minhas informações de login
              </Accordion.Header>
              <Accordion.Body>
                Se não se lembrar do seu e-mail ou nome de usuário, acesse a
                página de redefinição de senha e insira os endereços de e-mail
                que você pode ter usado para criar uma conta. Quando o endereço
                registrado no Spotify for inserido, aparecerá uma mensagem
                dizendo que o e-mail de redefinição de senha foi enviado.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="container mt-3">
        <table className="table table table-hover">
          <thead>
            <tr>
              <th>MAIS INFORMAÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-light">Ajuda com pagamentos</td>
            </tr>
            <tr>
              <td>Ajuda com a conta</td>
            </tr>

            <tr className="table-light">
              <td>Ajuda com o plano</td>
            </tr>
            <tr>
              <td>Ajuda com o app</td>
            </tr>
            <tr>
              <td className="table-light">Ajuda com dispositivos</td>
            </tr>
            <tr>
              <td>Privacidade e Dados</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="p-5 my-5 bg-dark text-white">
        <h1 className="visite">Visite a Comunidade</h1>
        <p className="visite">
          Tem uma pergunta? Encontre Respostas na nossa Comunidade de fãs
          especialistas do mundo todo!
        </p>

        <div className="d-grid">
          <button id="inputfaq" className="button btn btn-primary btn-block btn-success">
            Encontrar respostas
          </button>
        </div>
      </div>


    </>
  );
}
export default Faq;
