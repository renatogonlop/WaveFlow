import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/PlaylistList.css";



class PlayListList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playListList: [],
    };
  }
  //objeto ou array
  componentDidMount() {
    const baseURL = "http://localhost:4000/Playlist";
    // Simple GET request using axios
    axios
      .get(baseURL)
      .then((response) => this.setState({ playListList: response.data }));
  }

  render() {
   const { playListList } = this.state;
  return (
    <div className="background">
      <div className="container">
        <h1>Playlists</h1>
        <center>
          <h2>O que vamos ouvir hoje?</h2>
        </center>
        <ul className="flex-container">
          {playListList.map((playDados) => {
            return (
              <li>
                <Link to={`/playlists/${playDados.id}`}>
                  <img
                    className="item"
                    src={playDados.image}
                    alt="Capa do álbum"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

}
export { PlayListList};
