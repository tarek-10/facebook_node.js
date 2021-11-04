const Joi = require('joi');

module.exports = {

    createAvertise: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            desc: Joi.string().required(),
            userID: Joi.string().required(),
        })
    },
    updateAdvertise: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            desc: Joi.string().required(),
        }),
        params: Joi.object().required().keys({
            id: Joi.string().required(),
        })
    },
    deleteAdvertise: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    }

}