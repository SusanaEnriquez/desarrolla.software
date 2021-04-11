const express = require('express'); // referencia del servidor de express
const router = express.Router(); // crear un enrutador para este servicio
const User = require('../models/user'); // importar nuestro modelo de datos

// localhost:678/users/all -> GET
router.get('/all', async (req, res) => {
    var users = await User.find({},  {__v: 0, _id: 0}); // 0 -> ocultar, 1 -> mostrar

    res.send(users);
});

router.get('/:nickname', async (req, res) => {
    var parametros = req.params;
    var nickname = parametros.nickname; 

    var user = await User.findOne({ nickname: nickname }, {__v: 0, _id: 0, password:0});
    // findOne puede regresar null o el usuario 
    if (!user){
        // User no existe
        return res.status(404).send({
            message: 'El usuario: ' + nickname + ' no existe'
        });
    }
    return res.send(user);
});

// localhost:678/users/registere -> POST
router.post('/register', async (req, res) => {
    // El parametro 'req' contiene toda la info que se envia para generar esta peticion, o sea aqui vienen los datos
    var datosUsuario = req.body;

// OR en el query de Mongo
    var userExists = await User.findOne({ $or: [{ nickname: datosUsuario. nickname}, { email: datosUsuario.email}]});
        if (userExists){
            return res.status(401).send({
                error: 'El usuario con este nickname/correo ya existe'
            });
        }


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


router.delete('/:nickname', async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;
    
    var usuarioBorrado = await User.deleteOne({nickname: nickname});

    res.send({
        message: "Se ha borrado el usuario: " + nickname
    });

});


// Exportar o generar el modulo user.js
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;






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
 

