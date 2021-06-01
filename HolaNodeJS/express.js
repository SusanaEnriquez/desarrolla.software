// npm install express <- instalar express
const express = require('express'); // Importamos express
const mongoose = require('mongoose');

// Para crear una app de express:
const app = express();
app.use(express.json());
app.use(express.static('./public')); //Crear un pequeño servidor web

// npm install mongoose <- instalar mongoose
// base de datos: Pruebas
const uri = "mongodb+srv://seg:desarrolla.software@cluster0.deva6.mongodb.net/Pruebas?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error){
    console.log('No se pudo conectar a la base de datos de mongo')
    } else {
        console.log('Conectado a la base de datos');
        console.log('Conectado al servidor:' + mongoose.connection.host); 
        console.log('Conectado en el puerto:' + mongoose.connection.port);        
    }
});

// localhost:1010/endpoint
// endpoint generico de express (No especifica metodo: GET, PUT, POST, etc)
app.use('/endpoint', function(req,res){
    // req: es el parametro que representa la peticion, o sea, informacion del cliente
        /* req.params: parametros dinamicos de peticion (ejemplo: http://localhost:1010/endpoint/params)
             req.body: cuerpo de la peticion, multiples datos, es comun tenerlo solo en lo que no sea GET (ejemplo: body: {algo:valor, algo2:valor2, etc.})
             req.query: busqueda visible en la URL (ejemplo: http://localhost:1010/endpoint?variable=valor&variable2=valor2)*/
    // res: es el parametro que controla la respuesta/interaccion con el cliente
    res.send('Hola!');
});

/* Hacer un servicio con 3 endpoints: /map, /images, /search.
El servicio del /map retornará el objeto: { map: true, location: { lat: 123, long: 123 } }
    -Los valores de lat y long, deben recibirse desde el Query de la petición
    //{ map: true, location: { lat: req.query.lat, long: req.query.long } }
El servicio del /images retornará el objeto: { image: true, url: "url de imagen" }
    -El valor de url de imagen debe recibirse desde el params de la petición
    //{ image: true, url: req.params.imageURL }
El servicio del /search retornará el objeto: { search: true, query: "busqué pan" }
    -El valor de query debe venir dentro del body de la petición
   //{ search: true, query: req.body.query }

app.use('/map', function(req,res){
//   res.send({ map: true, location: { lat: 123, long: 123 } });
    res.send({ map: true, location: { lat: req.query.lat , long: req.query.long } }); 
    //  http://localhost:1010/map?lat=1234&long=5678
});

app.use('/images/:imageURL', function(req,res){
//   res.send({ image: true, url: "url de imagen" });
    res.send({ image: true, url: req.params.imageURL });
    //    http://localhost:1010/images/:imageURL
    //    http://localhost:1010/images/url de imagen
});

app.use('/seacrh', function(req,res){
//   res.send({ search: true, query: "busqué pan" })
    res.send({ search: true, query: req.body.query })
//   http://localhost:1010/search
//   body: { "query": "busqué pan" }
}); */

const mapsRouter = require('./routers/maps');
app.use('/maps', mapsRouter);

const searchRouter = require('./routers/search');
app.use('/search', searchRouter);

const imagesRouter = require('./routers/images');
app.use('/images', imagesRouter);

const pruebasRouter = require('./routers/modelos');
app.use('/pruebas', pruebasRouter);

// Inicia el servicio en el puesto especificado (en este caso el 1010 pero puede ser el que queramos)
app.listen(1010); 
