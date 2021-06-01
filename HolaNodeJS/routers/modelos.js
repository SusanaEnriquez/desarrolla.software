const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.post('/dummy/:tipo', async function(req, res){
    var tipoModelo = req.params.tipo;

    switch(tipoModelo) {
        case "mascota":
            var mascota = new Mascota({
                nombre: "Lucky",
                raza: "Chihuahua",
                edad: 7,
                fechaNac: new Date(),
                dueño: "Marisol"
            });

            await mascota.save(); // Guardar en la base de datos
        break;
    }

    res.send('Creado correctamente el tipo: ' + tipoModelo);
});

router.get('/all/:tipo', async function(req, res){
    var tipoModelo = req.params.tipo;

    switch(tipoModelo) {
        case "mascota":
            var mascotas = await Mascota.find({}); // Regresa todas las mascotas
            
            var mascota = await Mascota.findOne({nombre: "Lucky"}); // Buscar una mascota en especifico
            if(mascota) { //null o el valor

            }

            mascota.edad += 1;
            await mascota.save();
            
            res.send(mascotas);
        break;
    }
});

module.exports = router;