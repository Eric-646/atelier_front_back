// require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Data = require("./models/data");
const ticketSchema = require("./models/tickets");
const home = require("./routes/home");
const ticket = require("./routes/tickets");

const app = express();

app.use("/", home);
app.use("/ticket", ticket);

const PORT = process.env.PORT || 3000;
// console.log(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(
  "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/?retryWrites=true&w=majority&appName=atelier",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Erreur de connexion à la base de données :")
);
db.once("open", () => {
  console.log("Connexion à la base de données réussie !");
});

app.get("/api/data", async (req, res) => {
  try {
    const dataFromDB = await Data.findOne();
    res.json(dataFromDB);
  } catch (err) {
    console.log("Erreur lors de la récupération des données", err);
    res.status(500).json({ err: "Erreur serveur !" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

// url de connexion à la base de données

// const url = "https://eu-west-2.aws.data.mongodb-api.com/app/data-whkzn/endpoint/data/v1";
