
// Datos:
// -Pet: petID, name, type, age, description


const mongoose = require('mongoose');
const modelName = 'Pet';
const collection = 'Pets';
const schema = new mongoose.Schema({
    petID: String,
    name: String,
    type: String,
    age: String,
    description: String
});

var model =  mongoose.model(modelName,  schema, collection)

module.exports = model;