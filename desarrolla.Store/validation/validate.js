const Joi = require('joi'); // nos permite hacer ciertas validaciones

module.exports = {
    // VALIDAR EL REGISTRO DE UN USUARIO
    registration: function(data){
        const schema = Joi.object({
            nickname: Joi.string().required(),
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        });
        return schema.validate(data);
    },

    // VALIDAR EL CREAR UN NUEVO PRODUCTO
    newProduct: function(data) {
        const schema = Joi.object({
            sku: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            stock: Joi.number().required(),
            price: Joi.number().required()
        });
        return schema.validate(data);
    },

    // VALIDAR EL LOGIN
    login: function(data) {
        const schema = Joi.object({
            nickname: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required()
        });
        return schema.validate(data);
    },

};