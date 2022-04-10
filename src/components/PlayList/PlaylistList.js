import Cards from "../Cards";

function PlaylistList (){
    const dados = Cards.map (
        (p) => {
            return (
                <Link to={'/playlists/${p.id}'}>
                <div className="card" style={{width: '400px'}}>
                    <img className="card-img-top" src={p.capa} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{p.nome}</h4>
                    </div>
                </div>
                </Link>
            )
        }
    );
}

export default PlaylistList;