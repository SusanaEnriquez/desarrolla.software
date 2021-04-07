const mongoose = require('mongoose');

// Generar nuestro propio módulo
// ->  (nombre del modelo, esquema y coneccion)
module.exports = mongoose.model('User', new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    address: {
        street: String,
        suburb: String,
        city: String,
        state: String,
        zip: Number
    },
    email: String,
    password: String,
    phone: Number,
    userType: String
}), 'Users');


