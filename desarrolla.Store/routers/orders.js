const express = require('express'); // referencia del servidor de express
// const { Validate } = require('../models/order');
const router = express.Router(); // crear un enrutador para este servicio
const Order = require('../models/order');
const Utils = require('../utils/utils'); //Importar el módulo de utilities
const Validate = require('../validation/validate');
const Cart = require('../models/cart');

router.post('/', async (req,res) => {
    
    const {error} = validate.order(req.body);
    if(error){
        return res.status(400).send({
            error: error.details[0].message
        });
    }

    const cartID = req.cookies['CARTID'];
    var cart = await Cart.findOne({ id: cartID });

    if(!cart) {
        return res.status(404).send({
            error: "No hay un carrito válido para la creación de la orden"
        });
    }

    const ID = Utils.genOrderID();
    const status = "En Proceso";
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const details = {
        products: cart.products,
        total: cart.total
    }

    var order = new Order({
        ID: ID,
        status: status,
        address: address,
        email: email,
        phone: phone,
        details: details
    });

    await order.save();

    cart.products = [];
    cart.total = 0;
    cart.quantity = 0;
    cart.markModified('products');
    await cart.save();

    res.send({
        valid: true,
        orderID: ID
    });
});

router.get('/validate/:orderID', async (req, res) => {
    var orderID = req.params.orderID;
    orderID = parseInt(orderID);
    if(isNaN(orderID)) {
        return res.send({ valid: false });
    }

    var order = await Order.findOne({ID: orderID});
    if(order) {
        return res.send({ valid: true });
    }

    res.send({ valid: false });
});

module.exports = router;