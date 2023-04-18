require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5009;
const mongoose = require("mongoose");

// models
const pokemonModel = require("./models/pokemonModel");
// const pokemon = require("./models/pokemon");
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use((req, res, next) => {
  console.log("middleware --> ", req.url);
  next();
});

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`<h1>Hello</h1>
  <button><a href='/pokemon'>Go List </a> </button>`);
});

app.get("/pokemon/new", (req, res) => {
  res.render("New", { pokemon: [] });
});

app.post("/pokemon", (req, res) => {
  pokemonModel.create(
    { name: req.body.name, ...req.body },
    (error, createdPokemon) => {
      res.redirect("/pokemon");
    }
  );
});

//
//
app.get("/pokemon", (req, res) => {
  pokemonModel.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

app.get("/pokemon/:id", (req, res) => {
  pokemonModel.findById(req.params.id, (error, foundPoke) => {
    if (foundPoke) {
      res.render("Show", { pokemon: foundPoke });
    } else {
      res.status(404).send(`
          <h1>No Record</h1>
          <button onclick="window.history.back()">Go Back</button>
        `);
    }
  });
});

// Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
});
