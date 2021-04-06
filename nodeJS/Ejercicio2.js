// MONGO -> seg - desarrolla.software
//  documentacion de mongo ->  docs.mongodb.com/drivers/node/current/fundamentals/crud/read-operations/retrieve/  

/* NODE JS no es multitasking, trabaja con un solo procesador
 Comandos:
    - node PATH/app.js
    - npm install package --save    <- es el que debe de usar mas, solo se instala en el proyecto que queremos
    - npm install package --global    <- al instalarlo asi se puede utilizar en todos los proyectos
*/

// npm install express --save
// npm install mongodb --save
// CODIGOS DE ERRORES -> https://developer.mozilla.org/es/docs/Web/HTTP/Status

var express = require('express');

const app = express(); //Generar una app de express
app.use(express.static('../')); //SERVIDOR LOCAL ('../')->se sale una carpeta

/* EXPRESS:
    Aplication: general, es todo
    Use: para cargar plugins o extensiones para el server
        - Manipular cookies
        - Manipular el CORS
        - Manipular el tipo de preprocesador a texto
    Methods: todos los metodos de HTTP
        - get
        - post
        - delete
        - put
    User Routers: utiliza routers apara generar endpoints
*/

// Conexion al servidor de mongo (atlas)
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://seg:desarrolla.software@cluster0.deva6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

client.connect(async err => {
    if(err){
        console.log('Ocurrio un error al intentar conectarse a Mongo: ' + err);
        return;  // no regresa nada pero sirve para salir (como un break)
    }
    console.log('Se ha conectado correctamente a la base de datos de Mongo')

    const cosas = client.db("Prueba").collection("cosas");
    var numeros = [34, 86, 15, 764, 423, 3738];

    /* Agregar
    for (var i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
       cosas.insertOne({
           name: "Nuevo numero",
           num: numero
       });
    }*/

    /* delete los numeros menores o iguales a 50
    cosas.deleteMany({
        num: {$lte: 50} 
        // $lte -> menor o igual
        // $gte -> mayor o igual
        // $lt -> menor 
        // $gt -> mayor
        // $eq -> igual
        // $ne -> diferente
    });*/

   /* var datos = await cosas.find().toArray();
    console.log(datos);

    var dato = await cosas.findOne({
        num: 764
    });
    console.log(dato);
    */

    cosas.updateOne({ num: 764}, {$set: {name: "Esto se actualizo", num:678} });
    cosas.updateMany({name:"Nuevo numero"}, {$set: {name: "Viejo numero"}})
    // {lo que quiero actualizar},{los cambios}

   /*collection.find().toArray().then(datos =>{ // promesa
       console.log(datos);
   }).catch(e =>{
       console.log('Ocurrio un error');
   }).finally(()=>{
       console.log('Al final que se hace');
   });*/

});



/*
FUNCION ANONIMA
app.get('/', function (req,res) => {
    res.status(200).send('Hola, vengo de express!');
});
*/

// FUNCION LAMBDA
app.get('/', (req,res) => {
    res.status(200).send('Hola, vengo de express!');
});


app.get('/saludo', (req,res) => {
    res.status(200).send('Hola, este es un saludo!');
});
app.post('/saludo', (req,res) => {
    res.status(200).send('Hola, este CREA un saludo!');
});


app.get('/products/all', (req,res) =>{
    var productos = [
        {
            name: "iPhone 12 pro max",
            brand: "Apple",
            description: "The new 2020 iPhone 12. This Max Pro version has a better camera",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021660000",
            price: 1800.50,
            stock: 15
        },
        {
            name: "Galaxy S20 ultra",
            brand: "Samsung",
            description: "The new 2020 galaxy. It has the best camera",
            image: "https://www.abaddy.com/wp-content/uploads/2020/03/Galaxy-s20Ultra-gris-3-abaddy-samsung.jpg",
            price: 1800,
            stock: 20
        },
        {
            name: "Mi 11 ",
            brand: "Xiaomi",
            description: "The new 2020 Xiaomi Mi 11",
            image: "https://www.profesionalreview.com/wp-content/uploads/2021/02/Xiaomi-Mi-11-2.jpg",
            price: 1800,
            stock: 17
        }   
    ];
  
    res.send(productos);  
});



console.log("Ejecutando el servicio en el puerto 678");
console.log("Verificar las peticiones en  http://localhost:678")
app.listen(678);
