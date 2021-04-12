const express = require('express'); // referencia del servidor de express
const {
    PromiseProvider
} = require('mongoose');
const router = express.Router(); // crear un enrutador para este servicio
const Product = require('../models/product'); // importar nuestro modelo de datos

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
    var productData = req.body;

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


// Exportar o generar el modulo user.js
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;