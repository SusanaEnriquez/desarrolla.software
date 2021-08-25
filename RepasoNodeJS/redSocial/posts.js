// crear enrutador con express
const express = require("express");
const router = express.Router();
const Post = require('./post');

router.post('/new', async function (req,res) {
    var datosPost = req.body
    var post = await new Post(datosPost);
    await post.save();

    res.send({
        message: 'POST de register',
        post:post});
});

router.put('/edit/:PostID', async (req,res) => {
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

router.get('/all', (req,res) => {
    res.send('GET de all');
});

router.get('/post/:PostID', (req,res) => {
    res.send({
        message: 'Este es el post: ' + req.params.PostID 
    })
});

router.delete('/deletePost', (req,res) => {
    var PostID = req.body.PostID;
    res.send({
        message: 'Este post ha sido eliminado: ' + PostID
    })
});



//  exportar modulo
module.exports = router;
