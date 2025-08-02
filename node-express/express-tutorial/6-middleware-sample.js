const express = require("express");
const app = express();
const logger = require("./logger-middleware");
const authorize = require("./authorize-middleware");

// req => middleware => res

// app.use("/api", logger);
app.use([logger, authorize]);
// Instead of typing logger in each route below

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.status(200).send("About page");
});

app.get("/api/products", (req, res) => {
  res.status(200).send("Products");
});

app.get("/api/items", (req, res) => {
  res.status(200).send("(Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
