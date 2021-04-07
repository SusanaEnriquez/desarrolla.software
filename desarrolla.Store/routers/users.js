const express = require('express'); // referencia del servidor de express
const router = express.Router(); // crear un enrutador para este servicio
const User = require('../models/user'); // importar nuestro modelo de datos

// localhost:678/users/all -> GET
router.get('/all', async (req, res) => {
    var users = await User.find({});

    res.send(users);
});


// localhost:678/users/registere -> POST
router.post('/register', async (req, res) => {
    // El parametro 'req' contiene toda la info que se envia para generar esta peticion, o sea aqui vienen los datos
    var datosUsuario = req.body;

    var usuarioRegistrado = new User({
        nickname: datosUsuario.nickname,
        name: datosUsuario.name,
        lastName: datosUsuario.lastName,
        email: datosUsuario.email,
        password: datosUsuario.password,
    });

    await usuarioRegistrado.save();
    res.send({
        message: 'Usuario registrado correctamente :)'
    });
});

// localhost:678/users/registere/VALOR
// VALOR = request params

// localhost:678/users/registere?username=VALOR
// username=VALOR -> request query

// localhost:678/users/registere - POST/PUT/DELETE (crear, editar, borrar)
/* {
    a: 123,
    b: 1234.
    c: 'etc'
}
request body */
 

// Exportar o generar el modulo user.js
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;