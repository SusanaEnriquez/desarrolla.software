const express = require('express');
// console.log('Todo salio bien :)');

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser'); // npm install cookie-parser
const mongoose = require('mongoose'); // npm install mongoose 

// CREAR UN SERVICIO DE EXPRESS
const PORT = 789;
const app = express();

app.use(bodyParser.json()); // utilizaremos json en el body
app.use(bodyParser.urlencoded({ extended:true }));

const Database = 'Mascotas';
const uri = "mongodb+srv://seg:desarrolla.software@cluster0.deva6.mongodb.net/SPGG?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiesTopology: true
}, error =>{
    if(error){
        console.log('Error connecting to the database');
        console.log(error);
    } else{
        console.log('Succesfully connected to the mongo database server (Cluster');
        console.log('Server cluster: ' + mongoose.connection.host);
        console.log('Server cluster Port: ' + mongoose.connection.port);
    }
});

// Crear enrutador
const routerAppointments = require('./appointments') // Importar el modulo del archivo users.js
app.use('/appointments', routerAppointments); // localhost:777/users

const routerPets = require('./pets') // Importar el modulo del archivo users.js
app.use('/pets', routerPets);

const routerRequests = require('./requests') // Importar el modulo del archivo users.js
app.use('/requests', routerRequests);

const routerUsers = require('./users') // Importar el modulo del archivo userss.js
app.use('/users', routerUsers);

console.log('Servidor iniciado...');
app.listen(PORT);