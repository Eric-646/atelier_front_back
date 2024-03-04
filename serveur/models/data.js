


const mongoose = require('mongoose');

const dataSchema= new mongoose.Schema({
    message: String
});

const Data=mongoose.model('Data', dataSchema);

module.exports=Data;