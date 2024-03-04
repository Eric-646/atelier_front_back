


const express = require("express");
const mongoose = require("mongoose");
const Data = require("./models/data");
const home = require("./routes/home");
const ticket = require("./routes/tickets");


const app = express();


app.use("/" , home);
app.use("/ticket" , ticket);

const PORT = process.env.PORT || 3000;

mongoose.connect(
    "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/?retryWrites=true&w=majority&appName=atelier",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  app.get('/api/data', async (req, res) => {
    try{
        const dataFromDB=await Data.findOne();
        res.json(dataFromDB);
    }catch(err){
        console.log("Erreur lors de la récupération des données", err);
       res.status(500).json({err: "Erreur serveur !"});
    }
}
);



app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});