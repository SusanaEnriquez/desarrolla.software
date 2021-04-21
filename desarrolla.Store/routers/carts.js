const express = require('express'); // referencia del servidor de express
const router = express.Router(); // crear un enrutador para este servicio
const Cart = require('../models/cart'); // importar el esquema de datos de un cart 
const User = require('../models/user'); // importar el esquema de datos de un userr 
const Utils = require('../utils/utils'); //Importar el módulo de utilities

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

                    res.cookie('CARTID', user.cartID, {
                        expires: new Date(2025,0,1)
                    });
                    return res.send(userCart);
                }
            }

            return res.send(carrito);

        } else if(user && usercart){
            res.cookie('CARTID', user.cartID, {
                expires: new Date(2025,0,1)
            });
            return res.send(userCart);
        }
    } else{
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

    res.send(carrito);
});
// Exportar o generar el modulo user.js
// Para ello debemos exportar aquello que contenga a todo la info
module.exports = router;