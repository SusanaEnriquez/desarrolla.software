const express = require('express'); // referencia del servidor de express
const { PromiseProvider } = require('mongoose');
const router = express.Router(); // crear un enrutador para este servicio
const User = require('../models/user'); // importar nuestro modelo de datos
const Validate = require('../validation/validate'); // Importar el modulo de validate
const Utils = require('../utils/utils'); //Importar el módulo de utilities

router.get('/getSession', async (req, res) => {
    const nickname = req.cookies["SESSIONID"];
    var user = await User.findOne({
        nickname: nickname
    });

    if(user) {
        return res.send({
            session: true
        });
    }

    res.clearCookie("SESSIONID");
    return res.send({
        session: false
    });
});

// localhost:678/users/all -> GET
router.get('/all', async (req, res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    
    var users = await User.find({},  {__v: 0, _id: 0}); // 0 -> ocultar, 1 -> mostrar

    res.send(users);
});

router.get('/profile', async (req, res) => {

    var nickname = req.cookies["SESSIONID"];

    var user = await User.findOne({
        nickname: nickname
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });
    //findOne puede regresar null o el usuario
    if (!user) {
        //User no existe
        return res.status(404).send({
            message: "El usuario: " + nickname + " no existe"
        });
    }

    return res.send(user);
});

// localhost:678/users/registere -> POST
router.post('/register', async (req, res) => {
    // El parametro 'req' contiene toda la info que se envia para generar esta peticion, o sea aqui vienen los datos
    var datosUsuario = req.body;

    // Validamos que la info necesaria se haya provisto de manera correcta
    const { error } = Validate.registration(datosUsuario);
    if (error){
        return res.status(400).send({
            error: error.details[0].message
        });
    }

    // OR en el query de Mongo
    var userExists = await User.findOne({ $or: [{ nickname: datosUsuario. nickname}, { email: datosUsuario.email}]});
        if (userExists){
            return res.status(401).send({
                error: 'El usuario con este nickname/correo ya existe'
            });
        }

    
    var usuarioRegistrado = new User(datosUsuario);

    await usuarioRegistrado.save();
    res.send({
        message: 'Usuario registrado correctamente :)'
    });
});

router.put('/:nickname', async (req, res) => {
    const nickname = req.params.nickname;
    const usuarioActual = req.cookies["SESSIONID"];
    const userData = req.body;
    var userIsAdmin = false;

    if(nickname !== usuarioActual) {
        userIsAdmin = await Utils.isAdmin(req, res);
        if(!userIsAdmin) {
            return;
        }
    }

    var user = await User.findOne({ nickname: nickname });
    // findOne puede regresar null o el usuario 
    if (!user){
        // User no existe
        return res.status(404).send({
            message: 'El usuario: ' + nickname + ' no existe'
        });
    }
    
    // Campos que el usuario puede actualizar
   
    /* Los objetos en JS tambien se les conoce como Key Value Pair {key:value},  key es unico*/  
    var propiedades = Object.keys(userData);
    /* Regresa un array [Strings], puedo acceder a la propiedad de un objeto de manera tipo Hashing: userData['name'] -> userDta.name */

    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                user.name = userData.name
                break;
            
            case "nickname":
                var newNickname = userData.nickname;
                var userExists = await User.findOne({nickname: newNickname});
                if(userExists){
                    res.status(403).send({
                        error: "Este nickname ya esta ligado a otra cuenta"
                    });
                    return;
                }
                user.nickname = newNickname;
                break;

            case "email":
                var newEmail = userData.email;
                var userExists = await User.findOne({email: newEmail});
                if(userExists){
                    res.status(403).send({
                        error: "Este email ya esta ligado a otra cuenta"
                    });
                    return;
                }
                user.email = newEmail;
                break;

            case "lastName":
                user.lastName = userData.lastName
                break;

            case "phone":
                user.phone = userData.phone
                break;

            case "password":
                user.password = userData.password
                break;
            
            case "address":
                user.address = userData.address
                break;

            case "userType":
                if (userIsAdmin) {
                    user.userType = userData.userType;
                }
                break;
            }
    }

    await user.save(); // Guardar en la BD

    res.send({
        message: 'Se actualizo el usuario correctamente'
    });
});

router.delete('/:nickname', async (req, res) => {

    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    
    var parametros = req.params;
    var nickname = parametros.nickname;
    
    // Opcion 1
    // var user = await User.findOne({nickname: nickname});
    // if(!user){
    //     res.send({
    //         message:'El usuario ' + user + ' no existe'
    //     });
    //     return;
    // }
    
    // Opcion 2
    var usuarioBorrado = await User.deleteOne({nickname: nickname});
    if(usuarioBorrado.deletedCount === 0){
        res.status(404).send({
            message:'El usuario ' + nickname + ' no existe'
        });
        return;
    }

    res.send({
        message: "Se ha borrado el usuario: " + nickname
    });

});

router.post('/login', async (req,res) => {
    var datosLogin = req.body;

    const { error } = Validate.login(datosLogin);
    if (error){
        return res.status(400).send({
            error: error.details[0].message
        });
    }

    if(!datosLogin.nickname && !datosLogin.email){
        return res.status(403).send({
            error: "Necesita especificar un nickname o correo para iniciar sesion"
        });
    }
    var usuario = await User.findOne({ $or: [{nickname: datosLogin.nickname},{email: datosLogin.email}],
        password: datosLogin.password});

    if(!usuario){
        return res.status(404).send({
            error: "Datos incorrectos de inicio de sesion. Verifique el user/password"
        });
    }
    res.cookie("SESSIONID", usuario.nickname);
    res.send({
        message: "Se ha iniciado sesion correctamente :)"
    });
});

router.post('/logout', async (req,res) => {
    // Limpiar la cookie
    res.clearCookie('SESSIONID');

    res.send({
        message: "Se ha desloggeado y se ha borrado la sesion"
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
 

