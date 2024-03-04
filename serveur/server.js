
// const express = require("express");
// const mongoose = require("mongoose");
// const Data = require("./models/data");


// const app = express();
// const PORT = process.env.PORT || 3000;

// mongoose.connect(
//     "mongodb+srv://eric_64:KB3RjBO3CG5DmTbG@atelier.kitzc83.mongodb.net/?retryWrites=true&w=majority&appName=atelier",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )


// const db = mongoose.connection;

// db.on("error", (error) => console.error.bind(console, "Erreur de connexion à MongoDB : "));
// db.once("open", () => {
//     console.log("Connexion à MongoDB réussie !");
//     });


// const dataSchema= new mongoose.Schema({
//     message: String
// });

// const Data=mongoose.model('Data', dataSchema);

// app.get('/api/data', async (req, res) => {
//     try{
//         const dataFromDB=await Data.findOne();
//         res.json(dataFromDB);
//     }catch(err){
//         console.log("Erreur lors de la récupération des données", err);
//        res.status(500).json({err: "Erreur serveur !"});
//     }
// }
// );



// app.listen(PORT, () => {
//   console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });







// app.get("/api/data", (req, res) => {
//   res.json({
//     message: "Données provenant du serveur !",
//   });
// });


// const normalizePort = val => {
//     const port = parseInt(val, 10);

//     if (isNaN(port)) {
//       return val;
//     }
//     if (port >= 0) {
//       return port;
//     }
//     return false;
//   };

//   const port = normalizePort(process.env.PORT || '3000');
//   app.set('port', port);

//   const errorHandler = error => {
//     if (error.syscall !== 'listen') {
//       throw error;
//     }
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
//     switch (error.code) {
//       case 'EACCES':
//         console.error(bind + ' requires elevated privileges.');
//         process.exit(1);
//         break;
//       case 'EADDRINUSE':
//         console.error(bind + ' is already in use.');
//         process.exit(1);
//         break;
//       default:
//         throw error;
//     }
//   };

//   const server = http.createServer(app);

//   server.on('error', errorHandler);
//   server.on('listening', () => {
//     const address = server.address();
//     const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//     console.log('Listening on ' + bind);
//   });

//   server.listen(port);
