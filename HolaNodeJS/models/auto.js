const mongoose = require('mongoose');
const model = mongoose.model('Auto', new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    HP: Number,
    color: String,
    serie: String,
}), 'Autos');

module.exports = model;