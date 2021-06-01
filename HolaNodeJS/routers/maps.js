const express = require('express'); // Importamos express
const router = express.Router();

// localhost:1010/maps/
router.get('/', function(req,res){
    res.send({ map: true, location: { lat: req.query.lat , long: req.query.long } }); 
})

// localhost:1010/maps/new
router.post('/new', function(req,res){
    res.send({ map: true, location: { lat: req.query.lat , long: req.query.long } }); 
})

module.exports = router;