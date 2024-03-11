
// const Todos = require('../models/todoModel');
// const ObjectId = require('mongoose').Types.ObjectID;

// exports.index = (req, res) => {
//     Todos.find({}, (err, docs) => {
//         if (err) {
//             res.send(docs);
//         } else {
//             res.send(docs);
//         }
//     }
//     );
// }

// exports.searchById = (req, res) => {
//     const { id } = req.params.id;
//     res.send(`Id: ${id}`);
// }

// exports.insert = (req, res) => {
//     const todoItem = req.body.todo;
//     const newTodo = new Todos({ todo: todoItem });
//     newTodos.save((err, docs) => {
//         if (err) {
//             res.status(201).send(docs);
//         }   else {
//             res.status(500).send(err);
//         }
//     }   );
// }

// exports.update = (req, res) => {
//     const { id } = req.params.id;
//  console.log(`Update id: ${id}`);

//  if (!ObjectId.isValid(id)) {
//      res.status(400).send('Id non valide');
//     }

//     const todoItem = req.body.todo;
//     const newTodo = new Todos({ todo: todoItem });

//     Todos.findByIdAndUpdate (id, { $set: newTodo }, { new: true }, (err, docs) => {
//         if (err) {
//             res.status(201).send(docs);
//         }   else {
//             console.log(`Erreur lors de la mise à jour: ${err}`);
//         }
//     }   );
// }

// exports.delete = (req, res) => {
//     const { id } = req.params.id;
//     if (!ObjectId.isValid(id)) {
//         res.status(400).send('Id non valide');
//     }

//     Todos.findByIdAndRemove(id, (err, docs) => {
// const result = {
//     data: docs,
//     message: 'Todo supprimé avec succès',
//     status: 200,
// }
//  if (!err) {
//     res.status(200).send(result);
// }   else {
//     res.status(500).send(err);
// }
//     }   );
// }
    
  
