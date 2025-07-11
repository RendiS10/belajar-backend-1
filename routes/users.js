const express = require("express");
const router = express.Router();

// membuat dummy data untuk pengguna
const users = [
  { id: 1, name: "Rendi" },
  { id: 2, name: "Sutendi" },
];

// Get Users
router.get("/", (req, res) => {
  // Mengembalikan daftar pengguna
  res.json(users);
});

// POST Users
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Nama Diperlukan" });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
