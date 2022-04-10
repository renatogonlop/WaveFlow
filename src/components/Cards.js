import "../components/css/Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  const props = [
   
      {
      id: "1",
      image: "pato.png",
      title__In: "Zhu",
      subtitle: "Ringos Desert"
    },
    {
      id: "2",
      title__In: "Zhu",
      subtitle: "Generationwhy"
    },
    {
      id: "3",
      title__In: "Zhu",
      subtitle: "Genesis Series"

    },
    {
      id: "4",
      title__In: "Zhu",
      subtitle: "The Nightday"
    },
    {
      id: "5",
      title__In: "Aurora",
      subtitle: "Running with the Wolves"
    },
    {
        id: "6",
        title__In: "Aurora",
        subtitle: "All My Demons Greeting Me as a Friend"
      },
      {
        id: "7",
        title__In: "Aurora",
        subtitle: "Wolfwalkers"
      },
      {
        id: "8",
        title__In: "Aurora",
        subtitle: "The Gods We Can Touch"
      }
  ];
  return props.map(
    (card) => (
      <Link to={`/playlists/${props.id}`}>
          <article className="card">
            <div className="wrapper">
              <div key={card.id} className="cover">
              <img id="back_capa" src={card.image}/>
                <div className="cover__text">
                  <h1 className="cover__title">{card.title__In}</h1>
                  <h4 className="cover__subtitle">{card.subtitle}</h4>
                </div>
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
