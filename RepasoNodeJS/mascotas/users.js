// USERS:
// -GET para ver todos los usuarios
// -GET para ver el portafolio de un usuario
// -GET para ver el perfil de un usuario
// -POST para registrar un usuario
// -PUT para modificar un usuario
// -PUT para modificar el portafolio del usuario
// -DELETE para borrar usuarios

// crear enrutador con express
const express = require("express");
const router = express.Router();
const User = require('./user');


router.get('/all', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/searchPortafolio', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/searchProfile', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.post('/new', async function (req,res) {
    var datosPost = req.body
    var post = await new Post(datosPost);
    await post.save();

    res.send({
        message: 'POST de register',
        post:post});
});


router.put('/edit', async (req,res) => {
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

router.put('/editPortafolio/:usuario', async (req,res) => {
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


router.delete('/delete', (req,res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    })
});



//  exportar modulo
module.exports = router;