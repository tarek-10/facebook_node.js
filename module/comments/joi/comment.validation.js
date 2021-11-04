const Joi = require('joi');

module.exports = {
    createComment:{
        body:Joi.object().required().keys({
            userID:Joi.string().required(),
            postID:Joi.string().required(),
            commentContent:Joi.string().required()
        })
    },
}