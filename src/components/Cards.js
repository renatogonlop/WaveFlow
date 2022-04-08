import "../components/css/Cards.css";

function Cards() {
  const props = [
    {
      id: "1",
      title__In: "a",
      subtitle: "aa",
      title__Out: "aaa",
      description: "aaaa",
    },
    {
      id: "2",
      title__In: "b",
      subtitle: "bb",
      title__Out: "bbb",
      description: "bbbb",
    },
    {
      id: "3",
      title__In: "c",
      subtitle: "cc",
      title__Out: "ccc",
      description: "cccc",
    },
    {
      id: "4",
      title__In: "d",
      subtitle: "dd",
      title__Out: "ddd",
      description: "dddd",
    },
    {
      id: "5",
      title__In: "e",
      subtitle: "ee",
      title__Out: "eee",
      description: "eeee",
    },
    {
        id: "6",
        title__In: "a",
        subtitle: "aa",
        title__Out: "aaa",
        description: "aaaa",
      },
      {
        id: "7",
        title__In: "a",
        subtitle: "aa",
        title__Out: "aaa",
        description: "aaaa",
      },
      {
        id: "8",
        title__In: "a",
        subtitle: "aa",
        title__Out: "aaa",
        description: "aaaa",
      },
      {
        id: "9",
        title__In: "a",
        subtitle: "aa",
        title__Out: "aaa",
        description: "aaaa",
      },
      {
        id: "10",
        title__In: "a",
        subtitle: "aa",
        title__Out: "aaa",
        description: "aaaa",
      },
  ];
  return props.map((card) => (
    <article className="card">
      <div className="wrapper">
        <div key={card.id} className="cover">
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
  ));
}

export default Cards;
