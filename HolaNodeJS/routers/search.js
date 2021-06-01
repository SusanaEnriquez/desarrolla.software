const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send({ search: true, query: req.body.query });
});

module.exports = router;