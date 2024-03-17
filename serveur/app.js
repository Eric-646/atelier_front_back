const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
// const authMiddleware = require("./middleware/authMiddleware");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());

const home = require("./routes/home");
const ticket = require("./routes/tickets");
const user = require("./routes/user");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("combined"));

app.use("/", home);
app.use("/ticket", ticket);
app.use("/connexion", user);
app.use("/auth", authRoutes);

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Erreur de connexion à la base de données :")
);
db.once("open", () => {
  console.log("Connexion à la base de données réussie !");
  app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  });
});
