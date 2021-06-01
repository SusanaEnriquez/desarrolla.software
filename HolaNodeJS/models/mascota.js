const mongoose = require('mongoose');
const model = mongoose.model('Mascota', new mongoose.Schema({
    raza: String,
    nombre: String,
    edad: Number,
    fechaNac: Date,
    dueño: String
}), 'Mascotas');

module.exports = model;