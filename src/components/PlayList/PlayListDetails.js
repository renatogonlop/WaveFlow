
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/PlayListDetails.css";
import { useParams } from "react-router";

function PlayListDetails(props) {
  const [playListDetails, setPlayListDetails] = useState({musicas: []});
  const { id } = useParams();

  //objeto ou array
  useEffect( () => {
    const baseURL = `http://localhost:4000/Playlist/${id}`;
    // Simple GET request using axios
    axios
      .get(baseURL)
      .then((response) => setPlayListDetails(response.data));
  }, [id]);

  

  //"variável" para encontrar a playlist pelo id
    
    //"variável" para listar as músicas encontradas no vetor musicas da playlist
    const musicas = playListDetails.musicas.map((playDados) => {
      return (
        <li className="lista">
          <hr />
          <p className="titleOff">
            {playDados.nome} <p className="text-muted">{playDados.cantor}</p>
            <audio controls>
              <source src={playDados.arquivo} type="audio/mpeg" />
            </audio>
          </p>
        </li>
      );
    });

    return (
      <div className="container">
        <div
          className="header"
          style={{
            backgroundImage: `url(${playListDetails.image})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="Reorder">
            <p className="playTitle">
              {
                <img
                  className="item-resize"
                  src={playListDetails.image}
                  alt="Capa do álbum"
                />
              }
              {playListDetails.nome}
            </p>
          </div>
        </div>
        <div className="content">
          <br />
          <br />
          {musicas}
        </div>
        <br />
        <br />
      </div>
    );
  
}
export default PlayListDetails;
