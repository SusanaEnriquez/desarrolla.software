// crear enrutador con express
const express = require("express");
const { findOne } = require("./user");
const router = express.Router();

const User = require('./user'); // importar los modelos necesarios

router.get('/profile', function (req,res) {
    res.send({
      message:  'GET de profile' });
});

router.post('/register', async function (req,res) {
    var userInfo = req.body;
    var usuarioNuevo = new User(userInfo);
    await usuarioNuevo.save(); // e 'await' se le pone a todas las funciones que haga mongoose

    res.send({
        message: 'Registro de usuario',
        userInfo: userInfo });
});

router.get('/user/:IDUser', async (req,res) => {
    var user = await User.findOne({nickname: req.params.IDUser})
    res.send({
        message:  'Buscar el usuario: ' + req.params.IDUser });
});

router.put('/edit/:IDUser', async (req,res) => {
    var IDUser = req.params.IDUser;
    var datosUsuario = req.body;
    var usuario = await User.findOne({nickname: IDUser});
    usuario = new User(datosUsuario);
    await usuario.save();

    res.send({
        message: 'Actualizar al usuario: ' + IDUser, 
        datosUsuario: datosUsuario
    })
});

router.delete('/deleteUser', (req,res) => {
    var IDUser = req.body.IDUser;
    res.send({
        message: 'Este post ha sido eliminado: ' + IDUser
    })
});



//  exportar modulo
module.exports = router;

