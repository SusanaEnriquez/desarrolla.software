const mongoose = require('mongoose');
const model = mongoose.model('Reservacion', new mongoose.Schema({
    hotel: String,
    fechaEntrada: Date,
    fechaSalida: Date,
    numHabitacion: String,
    personaReserva: String
}), 'Reservaciones');

module.exports = model;