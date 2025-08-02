const express = require("express");
const path = require("path");
const app = express();

// Setup static assets and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
}); // Alternatively, can copy and paste the index html into the public folder since index html is also a static asset.

app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
