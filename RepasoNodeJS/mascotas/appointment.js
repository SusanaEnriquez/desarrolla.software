
// Datos:
// -Appointment: appointID, type: cita, visita, dateTime

const mongoose = require('mongoose');
const modelName = 'Appointment';
const collection = 'Appointments';
const schema = new mongoose.Schema({
    appointID: String,
    type: {
        cita: String,
        visita: String,
        dateTime: Date
    }
});

var model =  mongoose.model(modelName,  schema, collection)

module.exports = model;