// MONGO -> seg - desarrolla.software

/* NODE JS no es multitasking, trabaja con un solo procesador
 Comandos:
    - node PATH/app.js
    - npm install package --save    <- es el que debe de usar mas, solo se instala en el proyecto que queremos
    - npm install package --global    <- al instalarlo asi se puede utilizar en todos los proyectos
*/

// npm install express --save
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
/*


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
