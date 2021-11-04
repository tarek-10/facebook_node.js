const Joi = require('joi');

module.exports = {
    createPost: {
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            content: Joi.string().required(),
            createdBy: Joi.string().required(),
        })
    },
    editPost: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
        body: Joi.object().required().keys({
            title: Joi.string().required(),
            content: Joi.string().required(),
        })
    },
    deletePost: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
    },
    blockedPost: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
    }
}