import "../components/css/Cards.css";
import { Link } from "react-router-dom";
import PlaylistMock from "./PlayList/PlaylistMock"

function Cards() {
  return PlaylistMock.map(
    (PlaylistMock) => (
      <Link to={`/playlists/${PlaylistMock.id}`}>
          <article className="card">
            <div className="wrapper">
              <div key={PlaylistMock.id} className="cover">
               <img id="back_capa" src={PlaylistMock.image} alt="Capa PlayList"/>
               {/*  <div className="cover__text">
                  <h1 className="cover__title">{card.title__In}</h1>
                  <h4 className="cover__subtitle">{card.subtitle}</h4>
                </div> */}
                <div className="pb-wrapper">
                  <button className="play-button">Go</button>
                </div>
            </div>
          </div>
        </article>
      </Link>
  ));
}

export default Cards;
