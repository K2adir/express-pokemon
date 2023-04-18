const React = require("react");

const New = () => {
  return (
    <>
      <h1>New Poke </h1>
      <form action="/pokemon" method="POST">
        name: <input type="text" name="name" />
        <br />
        imgURL: <textarea name="image" rows="5" cols="40"></textarea>
        <br />
        <button type="submit" value="create task">
          Submit Homie
        </button>
      </form>
      <h2>
        <a href="/pokemon/">Go Back To List</a>
      </h2>
    </>
  );
};

module.exports = New;
