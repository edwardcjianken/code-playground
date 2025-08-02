const express = require("express");
const app = express();
const path = require("path");

// Routes
const auth = require("./routes/auth");
const people = require("./routes/people");

// Static assets
app.use(express.static("./methods-public"));
// Parse form data
app.use(express.urlencoded({ extended: false }));
// Parse JSON data
app.use(express.json());

app.use("/login", auth);
app.use("/api/people", people);

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
