// import express
const express = require("express");
// import users
const usersRouter = require("./routes/users");
// import logger
const logger = require("./logger");
// Inisialisasi aplikasi Express
const app = express();
// Port untuk server
const PORT = 3000;
// Middleware untuk parsing JSON
app.use(express.json());
// Middleware untuk mencatat permintaan
app.use(logger);
// Rute untuk pengguna
app.use("/users", usersRouter);
// Mulai server
app.listen(PORT, () => {
  console.log(`Server Berjalan di http://localhost:${PORT}`);
});
