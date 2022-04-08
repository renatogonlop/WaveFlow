import playlistMock from "./playlistsMock";

function PlaylistList(){
    const dados = playlistMock.map(
        (p) => {
            return (
                <Link to={'/playlists/${p.id}'}>
                    <article className="card">
                        <div className="cover">
                            <div className="cover__text">
                                <h1 className="cover__title">{props.title__In}</h1>
                                <h4 className="cover__subtitle">{props.subtitle}</h4>
                            </div>
                            <div className="pb-wrapper">
                                <button className="play-button">Go</button>
                            </div>
                        </div>
                        <div className="description">
                            <h1 className="pl-name">{props.title__Out}</h1>
                            <p className="pl-about">{props.description}</p>
                        </div>
                    </article>
                </Link>
            )
        }
    )
}

export default PlaylistList;