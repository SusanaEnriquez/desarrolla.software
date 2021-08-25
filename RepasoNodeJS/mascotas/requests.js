// REQUESTS:
// -GET para ver todas las peticiones
// -GET para ver una petición en específico
// -POST para dar de alta una petición de adopción
// -PUT para editar los detalles de una petición
// -DELETE para dar de baja una petición

// crear enrutador con express
const express = require("express");
const router = express.Router();
const Request = require('./qequest');


router.get('/all', (req,res) => {
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.get('/search', (req,res) => {
    var parametros = req.params;
    var reqID = parametros.reqID;

    var request = await Request.findOne({ reqID })
    res.send({
        message: 'Estas son todas las citas: '  
    })
});

router.post('/new', async function (req,res) {
    var datosRequest = req.body

    var requestExists = await Request.findOne({reqID: datosrequest.reqID });
    if(requestExists){
        return res.status(401).send({
            error: 'Esta solicitud ya existe'
        });
    }

    var RequestRegistrado = new Request({
        reqID: datosRequest.reqID,
        nickname: datosRequest.nickname,
        status: datosRequest.status,
        petID: datosRequest.petID,
        dateAdopt: datosRequest.dateAdopt
    });

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


router.delete('/delete', (req,res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    })
});



//  exportar modulo
module.exports = router;