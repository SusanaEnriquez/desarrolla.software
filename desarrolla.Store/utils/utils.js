//Importar nuestro modelo de datos
const User = require('../models/user');

module.exports = {
    isAdmin: async function( req, res ){
        var sessionID = req.cookies["SESSIONID"];
        
        //Si no existe la cookie de sesión, indicar que debe iniciar sesión
        if(!sessionID) {
            res.status(400).send({
                message: "Debe iniciar sesión para utilizar estos recursos"
            });
            return false;
        }

        var user = await User.findOne({ nickname: sessionID });
        if(user.userType === 'admin') {
            return true;
        }

        res.status(403).send({
            error: "El usuario no tiene privilegios para realizar esta operación"
        });
        return false;
    }
};