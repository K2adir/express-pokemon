const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Index = (props) => {
  const { pokemon } = props;
  {
    console.log(pokemon._id);
  }
  return (
    <div style={myStyle}>
      <h1>See all Pokemon</h1>
      <h2>
        <a href="/pokemon/new">Register New Pokemon</a>
      </h2>
      <ul>
        {pokemon.map((poke, _id) => (
          <li key={poke._id}>
            <a href={`/pokemon/${poke._id}`}>
              {poke.name
                .split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(" ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

module.exports = Index;
