let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  const newPerson = { id: people.length + 1, name: name };
  people.push(newPerson);
  return res.status(201).json(people);
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
