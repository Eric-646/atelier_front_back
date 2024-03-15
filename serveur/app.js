const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const ticketSchema = require("./models/ticketModel");
const userSchema = require("./models/userModel");
const home = require("./routes/home");
const ticket = require("./routes/tickets");
const user = require("./routes/user");
const morgan = require("morgan");


app.use(express.json());






const PORT = process.env.PORT ||3000;


app.use(cors({ origin: "http://localhost:5173" }));
app.use (morgan("combined"));


app.use("/", home);
app.use("/ticket", ticket);
app.use("/connexion", user);




const url = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);

mongoose.connect(
  url 
);
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

