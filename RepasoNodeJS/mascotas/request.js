
// Datos:
// -Request: reqID, nickname, status, petID, dateAdopt

const mongoose = require('mongoose');
const modelName = 'Request';
const collection = 'Requests';
const schema = new mongoose.Schema({
    reqID: String,
    nickname: String,
    status: Number,
    petID: String,
    dateAdopt: Date
});

var model =  mongoose.model(modelName,  schema, collection)

module.exports = model;
