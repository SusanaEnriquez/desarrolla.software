/*
Ejecutar aplicacion de node
    en una consola ejecutar: node RUTA\archivo.js

Inicializar un proyecto de node
    en una consola ejecutar: npm init

Instalar un modulo de node
    en una consola ejecutar: npm install MODULO

ESTA CONSOLA SIEMPRE DEBE ESTAR EN LA RAIZ DE NUESTRO PROYECTO
*/

const express = require('express');
// console.log('Todo salio bien :)');

const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser'); // npm install cookie-parser

// CREAR UN SERVICIO DE EXPRESS
const PORT = 777;
const app = express();

app.use(bodyParser.json()); // utilizaremos json en el body
app.use(bodyParser.urlencoded({ extended:true }));

app.use(cookieParser()); // nos permite interactucar con las cookies
    /* req.cookies["COOKIENAME2];
        req.cookie('COOKIENAME', 'VALOR');
        req.clearCookie('COOKIENAME'); */

// Crear enrutador
const routerUsers = require('../users') // Importar el modulo del archivo users.js
app.use('/users', routerUsers); // localhost:777/users

console.log('Ejecutando el servidor...');
app.listen(PORT);



/* CODIGOS MAS COMUNES
    * 200 -> ok
    * 201 -> se creo algo correctamente (PUT)
    * 202 -> aceptado
    * 400 -> solicitud mal hecha
    * 401 -> no autorizado
    * 404 -> no encontrado
    * 405 -> cuando el metodo no esta permitido
    * 500 -> error del servidor
*/

// ENDPOINT: aplicacion de servicio
// // es la app de express
// app.post('/ejemplo/hola/:z', (req,res) => {
//     /* El req contiene:
//         * Las cookies del usuario
//         * El body de una peticion
//         * Los parametros de una peticion
//         * El query de una peticion
//     */

//     var body = req.body; // Se usa en todo lo que no sea GET  {}
//     var query = req.query; // Se usa en GET   ???y=6543
//     var params = req.params; // ejemplo/:params

//     /* EJEMPLO
//         localhost:678/ejemplo/23456?y=1356
//         body {
//            "x" = 7654
//         }

//     var x = body.x;   ->  "x" = 7654
//     var y = query.y;    ->    y=1356
//     var z = params.z;     ->    23456
//     */

//     res.send('post desde express');
// }); 

// app.get('/ejemplo/hola', function (req,res) {
//     res.status(405).send('get desde express');
// }); 

// app.patch('/test', (req,res) => {
//     // Los codigos van del 100 al 500
//     res.send('patch desde express');
// });
