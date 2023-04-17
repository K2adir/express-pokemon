const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Index = ({ pokemon }) => {
  //   const { pokemon } = props;

  return (
    <div style={myStyle}>
      <h1>See all Pokemon</h1>
      {pokemon.map((poke) => {
        return (
          <ul>
            {pokemon.map((poke, index) => (
              <li key={index}>
                <a href={`/pokemon/${index}`}>
                  {poke.name
                    .split(" ")
                    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                    .join(" ")}
                </a>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

module.exports = Index;
