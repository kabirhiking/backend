const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "Raihan" },
  { id: 2, name: "Kabir" }
];

// GET all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/api/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) user by ID
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    users[index] = { id: userId, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});


// DELETE user by ID
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index !== -1) {
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
