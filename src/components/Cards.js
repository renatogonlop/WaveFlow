import '../components/css/Cards.css'

function CardsProps (){
    return(
        <div className="wrapper">
            <Cards
                title__In="Top 50"
                subtitle="Global"
                title__Out="Global Top 50"
                description="Your daily update of the most played tracks
                right now."/>
            <Cards
                 title__In="Top 40"
                 subtitle="Global"
                 title__Out="Global Top 40"
                 description="Your daily update of the most played tracks
                 right now."/>
             <Cards
                 title__In="Top 30"
                 subtitle="Global"
                 title__Out="Global Top 30"
                 description="Your daily update of the most played tracks
                 right now."/>
             <Cards
                 title__In="Top 20"
                 subtitle="Global"
                 title__Out="Global Top 20"
                 description="Your daily update of the most played tracks
                 right now."/>
            <Cards
                 title__In="Top 10"
                 subtitle="Global"
                 title__Out="Global Top 10"
                 description="Your daily update of the most played tracks
                 right now."/>
        </div>
    )
}

function Cards(props) {
  return (
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
  );
}

export default CardsProps;