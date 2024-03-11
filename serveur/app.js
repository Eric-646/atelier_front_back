const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// import ('../config/database');

// const Data = require("./models/data");
const ticketSchema = require("./models/ticket");
const userSchema = require("./models/User");
const home = require("./routes/home");
const ticket = require("./routes/tickets");
const user = require("./routes/user");


app.use(express.json());

// app.use(express.urlencoded({ extended: true }));
// app.use("api,userRoutes", userSchema);





const PORT = 3000;

// const PORT = process.env.PORT || 3000;

app.use("/", home);
app.use("/ticket", ticket);
app.use("/connexion", user);

// dotenv.config({ path: "./config.env" });

// const todoRoutes = require("./routes/todo");

// require("./config/database");
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/todos", todoRoutes);



// const serverPort = process.env.PORT || 3000;
// console.log(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connect(
//   "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/?retryWrites=true&w=majority&appName=atelier"
// );

// main().catch((err) => console.log(err));

// // async function main() {
// //   await mongoose.connect(
// //     "mongodb://127.0.0.1:27017/test");
// //   console.log("Connexion à la base de données réussie !");
// // }
// async function main() {
//   await mongoose.connect(
//     "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/");
//   console.log("Connexion à la base de données réussie !");
// }

// mongoose.connect('mongodb://127.0.0.1:27017/authentification')
mongoose.connect(
  "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/?retryWrites=true&w=majority&appName=atelier"
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

// app.get("/api/data", async (req, res) => {
//   try {
//     const dataFromDB = await Data.findOne();
//     res.json(dataFromDB);
//   } catch (err) {
//     console.log("Erreur lors de la récupération des données", err);
//     res.status(500).json({ err: "Erreur serveur !" });
//   }
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });

// url de connexion à la base de données

// const url = "https://eu-west-2.aws.data.mongodb-api.com/app/data-whkzn/endpoint/data/v1";
