const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const Index = ({ pokemon }) => {
  return (
    <div style={myStyle}>
      <h1>See all Pokemon</h1>
      <h2>
        <a href="/pokemon/new">Register New Pokemon</a>
      </h2>
      <ul>
        {pokemon.map(({ _id, name }) => (
          <li key={_id}>
            <a href={`/pokemon/${_id}`}>
              {name
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
