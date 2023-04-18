const React = require("react");
const Show = ({ pokemon }) => {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <a href="/pokemon">Back</a>
    </div>
  );
};

module.exports = Show;
