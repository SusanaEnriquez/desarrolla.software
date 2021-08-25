// -GET para ver todas las mascotas
// -GET para ver una mascota en específico
// -POST para dar de alta una mascota en adopción
// -PUT para editar los detalles de una mascota
// -DELETE para dar de baja una mascota

// crear enrutador con express
const express = require("express");
const router = express.Router();
const Pet = require('./pet');


router.get('/all', (req,res) => {
   
});

router.get('/search/:petID', (req,res) => {
    var parametros = req.params;
    var petID = parametros.petID;
    
    var pet = await Pet.findOne({petID: petID}, {__v:0, _id:0});

    if(!pet){
        return res.status(404).send({
            message: "La mascota: " +  petID + " no existe"
        });
    }
    return res.send(pet);
});

router.post('/new', async function (req,res) {
    var datosMascota = req;

    var mascotaExists = await Pet.findOne({ $or: [{ name: datosMascota.name }, { petID: datosMascota.petID }]});
    if(mascotaExists){
        return res.status(401).send({
            error: 'Ya existe una mascota con este nombre/petID'
        });
    }

    var MascotaRegistrada = new Pet({
        name: datosMascota.name,
        type: datosMascota.type,
        age: datosMascota.age,
        petID: datosMascota.petID,
        description: datosMascota.description,
    });

    await MascotaRegistrada.save();

    res.send({
        message: 'Se registro la mascota correctamente'
    });
});


router.put('/edit/:petID', async (req,res) => {
    var petID = req.params.petID;
    var petData = req.body;

    var pet = await Pet.findOne({petID: petID});
    if(!pet){
        return res.status(404).send({
            message: 'La mascota ' + petID + ' no existe'
        });
    }
    var propiedades = Object.keys(petData);

    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];

        switch (propiedad) {
            case 'name':
                Pet.name = petData.name;
                break;
            
            case 'type':
                Pet.type = petData.type;
                break;

            case 'age':
                Pet.age = petData.age;
                break;

            case 'description':
                Pet.description = petData.description;
                break;

            case 'petID':
                Pet.petID = petData.petID;
                break;
        }
        
    }

    await pet.save();
    res.send({
        message: 'Se actualizo correctamente'
    });
});


router.delete('/delete/:petID', (req,res) => {
    var parametros = req.params;
    var petID = parametros.petID;

    var petDelete = await Pet.deleteOne({petID: petID});

    res.send({
        message: 'Se borro a la mascota'
    });
});



//  exportar modulo
module.exports = router;
