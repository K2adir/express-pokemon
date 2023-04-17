require("dotenv").config();
//
const express = require("express");
const app = express();
const PORT = 5009;
//
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

app.listen(PORT, () => {
  console.log("Port ->", PORT);
});
