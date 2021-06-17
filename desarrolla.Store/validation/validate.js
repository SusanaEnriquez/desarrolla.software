const Joi = require('joi'); // nos permite hacer ciertas validaciones

module.exports = {
    // VALIDAR EL REGISTRO DE UN USUARIO
    registration: function(data){
        const schema = Joi.object({
            nickname: Joi.string().required(),
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(),
            address: Joi.object().optional(),
            phone: Joi.number().optional()
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
            price: Joi.number().required(),
            images: Joi.array().required()
        });
        return schema.validate(data);
    },

    // VALIDAR EL LOGIN
    login: function(data) {
        const schema = Joi.object({
            nickname: Joi.string().optional(),
            email: Joi.string().optional(),
            password: Joi.string().required()
        });
        return schema.validate(data);
    },

    // VALIDAR EL CREAR UNA NUEVA ORDEN
    order: function(data){
        const schema = Joi.object({
            address: Joi.object().keys({
                street: Joi.string().required(),
                suburb: Joi.string().required(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                zip: Joi.number().required()
            }).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required()
            // details: Joi.object().keys({
            //     products: Joi.string().required(),
            //     total: Joi.number().required()
            // }).required()
        });
        return schema.validate(data);
    }

};