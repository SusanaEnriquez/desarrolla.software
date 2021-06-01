const express = require('express');
const router = express.Router();

router.get('/:imageURL', function(req, res){
    res.send({ image: true, url: req.params.imageURL });
});

module.exports = router;