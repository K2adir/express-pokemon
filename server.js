require("dotenv").config();
//
const express = require("express");
const app = express();
const PORT = 5009;
//
//models
const pokemon = require("./models/pokemon");
// ============== ENGINE ==================/
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.use((req, res, next) => {
  console.log("middleware --> ", req.url);
  next();
});
//
app.use(express.urlencoded({ extended: false }));
// ============== ENGINE END ==================/

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
// ============== / POKEMON
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const poke = pokemon[id];
  res.render("Show", { pokemon: poke });
});

app.listen(PORT, () => {
  console.log("Port ->", PORT);
});
