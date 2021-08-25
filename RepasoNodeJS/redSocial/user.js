const mongoose = require('mongoose');
const modelName = 'User';
const collection = 'Users';
const schema = new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String
});

var model =  mongoose.model(modelName,  schema, collection)

module.exports = model;