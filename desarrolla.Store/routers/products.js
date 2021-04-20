const express = require('express'); // referencia del servidor de express
const {
    PromiseProvider
} = require('mongoose');
const router = express.Router(); // crear un enrutador para este servicio
const Product = require('../models/product'); // importar nuestro modelo de datos
const Validate = require('../validation/validate'); // Importar el modulo de validate
const Utils = require('../utils/utils') //Importar el módulo de utilities

// VER TODOS LOS PRODUCTOS
router.get('/all', async (req, res) => {
    var products = await Product.find({}, {
        __v: 0,
        _id: 0
    });
    res.send(products);
});

// AGREGAR UN PRODUCTO NUEVO
router.post('/new', async (req, res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }

    var productData = req.body;
    
    // Validate
    const { error } = Validate.newProduct(productData);
    if(error){
        return res.status(400).send({
            error: error.details[0].message
        });
    };

    var productExists = await Product.findOne({
        sku: productData.sku
    });

    if (productExists) {
        return res.status(401).send({
            error: 'El producto con el sku ' + productData.sku + ' ya existe'
        });
    }

    var productoRegistrado = new Product({
        sku: productData.sku,
        name: productData.name,
        description: productData.description,
        stock: productData.stock,
        price: productData.price,
    });

    await productoRegistrado.save();
    res.send({
        message: 'Producto registrado correctamente :)'
    });
});

function ToRegex( texto ) {

    var textoRegex = "";

    //Suponiendo que el texto es "aspirador auto"
    for (var i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if(caracter === ' ') {
            textoRegex += ".*";
        } else {
            textoRegex += '[' + caracter.toUpperCase() + caracter.toLowerCase() + ']';
        }
    } //[Aa][Ss][Pp][Ii][Rr][Aa][Dd][Oo][Rr].*[Aa][Uu][Tt][Oo]

    return textoRegex;
};
// BUSCAR PRODUCTOS
router.get('/search', async (req,res) => {
    var query = req.query; 
    var name = query.name; //?name=aspiradora
    var price = query.price; //?price=0,100
    var stock = query.stock; //?stock=true
    
    var filtro = {};
    
    if(name) {
        filtro.name = { $regex: ToRegex(name) };
    }

    if(price) {
        var precios = price.split(',');
        //0,1 - 0 - 0,1,2
        //["0", "1"]
        //[]
        //["0", "1,2"]
        //0,a -> ["0", "a"]
        if(precios.length >= 2) {
            var min = parseInt(precios[0]);
            var max = parseInt(precios[1]);

            min = isNaN(min) ? 0 : min; //?:
            max = isNaN(max) ? 10000 : max;
            //0,50
            //50,0
            if(min > max) {
                //Swap Value
                var tempMax = max;
                max = min;
                min = tempMax;
            }
            filtro.price = { $gte: min, $lte: max }
        }
    }

    if(stock) {
        if(stock === "true") {
            filtro.stock = { $gte: 1 };
        } else if(stock === "false"){
            filtro.stock = 0;
        }
    }

    var productos = await Product.find(filtro, {
        _id: 0,
        __v: 0
    });

    res.send(productos);

});

// VER UN  PRODUCTO EN ESPECIFICO 
router.get('/:sku',async (req,res) => {
    var sku = req.params.sku;

    var producto = await Product.findOne({ sku: sku}, { _id:0, __v:0});

    if(!producto){
        return res.status(404).send({
            message: "El producto identificado por el SKU " + sku + " no existe"
        });
    }
    res.send(producto);
});

// BORRAR UN PRODUCTO EN ESPECIFICO
router.delete('/:sku', async (req,res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    var sku = req.params.sku;

    var productExists = await Product.findOne({ sku: sku}, { _id:0, __v:0});
    
    if(!productExists){
        return res.status(404).send({
            message: "El producto identificado por el SKU " + sku + " no existe"
        });
    }
    
    await Product.deleteOne({sku:sku});
    res.send({
        message: "Se ha borrado el producto " + sku
    });
});

// ACTUALIZAR UN PRODUCTO EN ESPECIFICO
router.put('/:sku', async (req,res) => {
    var userIsAdmin = await Utils.isAdmin(req, res);
    if(!userIsAdmin) {
        return;
    }
    
    var sku = req.params.sku;
    var productData = req.body;

    var producto = await Product.findOne({sku: sku});
    if(!producto){
        return res.status(404).send({
            message: "El producto identificado por el SKU " + sku + " no existe"
        });
    }
    var propiedades = Object.keys(productData);

    for (var i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name": 
                producto.name = productData.name;
                break;

            case "description": 
                producto.description = productData.description;
                break;

            case "stock": 
                producto.stock = productData.stock;
                break;

            case "price": 
                producto.price = productData.price;
                break;

            case "images": 
                producto.images = productData.images;
                break;
        }
    }
    await producto.save();

    res.send({
        message: "Se ha actualizado el producto :)"
    });
});

// Exportar o generar el modulo user.js
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;