const mongoose = require('mongoose');
const model = mongoose.model('Vuelo', new mongoose.Schema({
    aerolinea: String,
    fechaSalida: Date,
    fechaRegreso: Date,
    destinoSalida: String,
    destinoRegreso: String,
    numAsiento: String
}), 'Vuelos');

module.exports = model;