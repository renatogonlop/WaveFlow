import React from 'react';
import { Link } from 'react-router-dom';
import playlistsMock from './PlaylistMock';
import '../css/PlaylistList.css';

function PlaylistList() {
    return (
      <div className="background">
      <div className="container">
        <h1>Playlists</h1>
        <center><h2>O que vamos ouvir hoje?</h2></center>
        <ul className="flex-container">
          {playlistsMock.map((playDados) => {
            return(
              <li>
                <Link to={`/playlists/${playDados.id}`}>
                    <img className="item" src={playDados.capa} alt="Capa do álbum"/>
                </Link>
              </li>
            )
          })}
            </ul>
      </div>
      </div>
      )
}

export default PlaylistList;