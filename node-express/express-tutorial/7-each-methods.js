const express = require("express");
const app = express();
const path = require("path");
let { people } = require("./data");

// Static assets
app.use(express.static("./methods-public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse JSON data
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Sent from html form
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

// Sent using javascript
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// Sent using postman
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  const newPerson = { id: people.length + 1, name: name };
  people.push(newPerson);
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }

  return res.status(201).json(people);
});

// PUT method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => {
    return person.id === Number(id);
  });

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with ID ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// DELETE method
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  console.log(person);

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with ID ${id}` });
  }

  const newPeople = people.filter((person) => {
    return person.id !== Number(id);
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
