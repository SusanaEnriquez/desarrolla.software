// APPOINTMENTS:
// -GET para ver todas las citas de los usuarios
// -GET para ver la cita en específico de un usuario
// -GET para ver todas las visitas agendadas
// -GET para ver una visita en específico
// -POST para crear una cita
// -POST para crear una visita
// -PUT para modificar los detalles de una visita
// -PUT para modificar los detalles de una cita
// -DELETE para eliminar una visita
// -DELETE para eliminar una cita

// crear enrutador con express
const express = require("express");
const router = express.Router();
const Appointment = require('./appointment');


router.get('/allAppointment', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/appointment', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/allVisit', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/searchVisit', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.post('/searchAppointment', async function (req,res) {
    var datosPost = req.body
    var post = await new Post(datosPost);
    await post.save();

    res.send({
        message: 'POST de register',
        post:post});
});

router.post('/visit', async function (req,res) {
    var datosPost = req.body
    var post = await new Post(datosPost);
    await post.save();

    res.send({
        message: 'POST de register',
        post:post});
});

router.put('/editAppointment', async (req,res) => {
    var PostID = req.params.PostID
    var datosPost = req.body;

    var post = new Post.findOne({postID: podtID});
    post.content = datosPost.content;
    await post.save();

    res.send({
        message: 'Se ha actualizado el post: ' + PostID, 
        post: post
    })
});

router.put('/editVisit', async (req,res) => {
    var PostID = req.params.PostID
    var datosPost = req.body;

    var post = new Post.findOne({postID: podtID});
    post.content = datosPost.content;
    await post.save();

    res.send({
        message: 'Se ha actualizado el post: ' + PostID, 
        post: post
    })
});

router.delete('/deleteAppointment', (req,res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    })
});

router.delete('/deleteVisit', (req,res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    })
});



//  exportar modulo
module.exports = router;
