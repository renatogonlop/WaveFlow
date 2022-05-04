import React from "react";
import axios from "axios";
import "../components/css/Cards.css";
import { Link } from "react-router-dom";


class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playListAxios: [],
    };
  }
  componentDidMount() {
    const baseURL = "http://localhost:4000/Playlist";
    // Simple GET request using axios
    axios
      .get(baseURL)
      .then((response) => this.setState({ playListAxios: response.data }));
  }
  render() {
    const { playListAxios } = this.state;
    return playListAxios.map((PlaylistMock) => (
      <Link to={`/playlists/${PlaylistMock.id}`}>
        <article className="card">
          <div className="wrapper">
            <div key={PlaylistMock.id} className="cover">
              <img
                id="back_capa"
                src={PlaylistMock.image}
                alt="Capa PlayList"
              />
              {/* <div className="cover__text">
                <h1 className="cover__title">{PlaylistMock.title__In}</h1>
                <h4 className="cover__subtitle">{PlaylistMock.subtitle}</h4>
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
}

export { Cards };
