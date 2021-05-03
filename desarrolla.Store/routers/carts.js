const express = require('express'); // referencia del servidor de express
const router = express.Router(); // crear un enrutador para este servicio
const Cart = require('../models/cart'); // importar el esquema de datos de un cart 
const User = require('../models/user'); // importar el esquema de datos de un userr 
const Utils = require('../utils/utils'); //Importar el módulo de utilities
const Product = require('../models/product'); // importar nuestro modelo de datos

// Endpoint que debe revisar si existe una cookie con el ID de un carrito; 
// si existe, buscarlo en la BDD y regresarlo, si no crear uno nuevo con ese ID en la BDD y regresarlo
router.get('/getCart', async (req,res) => {
    var cartID = req.cookies["CARTID"];
    var session = req.cookies["SESSIONID"];
    var userCart = null;
    var user = null;

    if(session){
        user = await User.findOne({ nickname: session });
        if(user){
            userCart = await Cart.findOne({ id: user.cartID }, {_id:0,__v:0})
        }
    }

    if(cartID){
        var carrito = Cart.findOne({ id: cartID},{_id:0,__v:0});

        if(carrito){
            // fusionar carritos
            if(userCart){
                if( userCart.id !== cartID){
                    // fusion de productos
                    carrito.products.forEach(producto => {
                    var existeProducto = userCart.products.some( p => p.sku === producto.sku);
                        if(existeProducto) {
                            var indexProducto = userCart.products.findIndex(p => p.sku === producto.sku);
                            userCart.products[indexProducto].qty += producto.qty;
                        } else {
                            userCart.products.push(producto);
                        }
                    });

                    userCart.quantity += carrito.quantity;
                    userCart.total += carrito.total;

                    userCart.markModified('products');
                    await userCart.save();

                    res.cookie('CARTID', usercart.id, {
                        expires: new Date(2025,0,1)
                    });
                    userCart = userCart.toObject();
                    delete userCart._id;
                    delete userCart.__v;
                    return res.send(userCart);
                }
            }

            return res.send(carrito);

        } else if(user && usercart){
            res.cookie('CARTID', usercart.id, {
                expires: new Date(2025,0,1)
            });
            return res.send(userCart);
        }
    } else{
        if(user && userCart) {
            res.cookie('CARTID', userCart.id, {
                expires: new Date(2025, 1, 1)
            });
            return res.send(userCart);
        }

        cartID = Utils.genCartID();
        res.cookie('CARTID', cartID, {
            //tiempo de vida de las cookies
            // maxAge: 15000 
            expires: new Date(2025,0,1)
        });
    }
    
    carrito = new Cart({
            id: cartID,
            products: [],
            quantity: 0,
            total:0
        });

    await carrito.save();

    if(user && !userCart){
        user.cartID = cartID;
        await user.save();
    }

    carrito = carrito.toObject();
    delete carrito._id;
    delete carrito.__v;
    res.send(carrito);
});

// Ver un carrito en especifico
router.put('/viewCart', async (req,res) => {
    const cartID = req.body.cartID;
    var cart = await Cart.findOne({ id: cartID }, { _id:0, __v:0 });

    if(cart){
        return res.send(cart);
    }

    res.status(404).send({
        error: "El carrito: " + cartID + " no existe"
    });
});

// añadir o actualizar un producto
router.patch('/add', async (req,res) => {
    var producto = req.body;
    var cartID = req.cookies["CARTID"];
    var carrito = null;

    if(!producto.sku || !producto.qty){     
        return res.status(400).send({
            message: "Debe incluir el sku y el qty en la peticion"
        });
    }
    
    var qty = parseInt(producto.qty);
    if(isNaN(qty) || qty<1 ){
        return res.status(400).send({
            message: "producto.qty debe ser un numero entero mayor o igual a 1"
        });
    }
    producto.qty = qty;

    
    //Añadir el producto al carrito...
    //Cuál carrito?
    carrito = await Cart.findOne({ id: cartID });
    if(!carrito){
            return res.status(400).send({
                message: "No existe un carrito asociado a esta peticion... Ejecute el endpoint /carts/getCart"
            });
    }

    var productoAñadir = await Product.findOne({ sku: producto.sku });
    if(productoAñadir){
        var existeEnCarrito = carrito.products.some( p => p.sku === productoAñadir.sku); 
        if(existeEnCarrito){
            // Actualizar el qty del producto en el carrito
            var productoCarrito = carrito.products.findIndex( p => p.sku === productoAñadir.sku );
            carrito.products[productoCarrito].qty += producto.qty;
        } else {
            // Añadir este producto al carrito
            carrito.products.push({
                sku: productoAñadir.sku,
                name: productoAñadir.name,
                description: productoAñadir.description,
                qty: producto.qty,
                unit_price: productoAñadir.price,
                images: productoAñadir.images
            });
        }

        carrito.quantity += producto.qty;
        carrito.total += producto.qty * productoAñdir.price;

        carrito.markModified('products'); 
        await carrito.save();

    }

    carrito = carrito.toObject();
    delete carrito._id;
    delete carrito.__v;
    return res.send(carrito);
});

// Enpoint para eliminar un producto del carrito -> actualizar
router.patch('/remove', async (req,res) => {
    var datoProducto = req.body;
    var cartID = req.cookies["CARTID"];
    var carrito = null;

    if(!datoProducto.sku && (!datoProducto.qty || !datoProducto.all)){
        return res.status(400).sen({
            message: "Debe especificar el sku del producto, qty a eliminar, o all: true"
        })
    }

    if(datoProducto.qty) {
        datoProducto.qty = parseInt(datoProducto.qty);
        if(isNaN(datoProducto.qty) || datoProducto.qty < 1) {
            return res.status(400).send({
                message: "producto.qty debe ser un número entero mayor o igual a 1"
            });
        }
    }

    carrito = await Cart.findOne({
        id: cartID
    });

    if (!carrito) {
        return res.status(400).send({
            message: "No existe un carrito asociado a esta petición... Ejecute el endpoint /carts/getCart"
        });
    }

    var productoExiste = carrito.products.some( prod => prod.sku === datosProducto.sku);
    if(productoExiste){
        const i = carrito.products.findIndex( prod => prod.sku === datosProducto.sku);
        const producto = carrito.products[i];

        if(datoProducto.all === true || producto.qty <= datoProducto.qty) {
            //Eliminar por completo el producto del carrito
            carrito.quantity -= producto.qty;
            carrito.total -= producto.unit_price * producto.qty;
            carrito.products.splice(i, 1);
        } else if(producto.qty > datoProducto.qty) {
            producto.qty -= datoProducto.qty;
            carrito.quantity -= datoProducto.qty;
            carrito.total -= producto.unit_price * datoProducto.qty;
        }
    }

    carrito.markModified('products');
    await carrito.save();

    var carritoFinal = carrito.toObject();
    delete carritoFinal._id;
    delete carritoFinal.__v;

    res.send(carritoFinal);
    }

});
// Exportar o generar el modulo 
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;    