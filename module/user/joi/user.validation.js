const Joi = require("joi");

module.exports = {
  superAdminsSignUp: {
    body: Joi.object()
      .required()
      .keys({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required().label("Password"),
        password_confirmation: Joi.any()
          .equal(Joi.ref("password"))
          .required()
          .label("Confirm password")
          .options({
            messages: {
              "any.only": "{{#label}} does not match",
            },
          }),
        age: Joi.number().required(),
        phone: Joi.string().required(),
        role: Joi.string().required(),
      }),
    file: Joi.object().required(),
  },
  adminsSignUp: {
    body: Joi.object()
      .required()
      .keys({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required().label("Password"),
        password_confirmation: Joi.any()
          .equal(Joi.ref("password"))
          .required()
          .label("Confirm password")
          .options({
            messages: {
              "any.only": "{{#label}} does not match",
            },
          }),
        age: Joi.number().required(),
        phone: Joi.string().required(),
        role: Joi.string().required(),
      }),
    file: Joi.object().required(),
  },
  userSignUp: {
    body: Joi.object()
      .required()
      .keys({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required().label("Password"),
        password_confirmation: Joi.any()
          .equal(Joi.ref("password"))
          .required()
          .label("Confirm password")
          .options({
            messages: {
              "any.only": "{{#label}} does not match",
            },
          }),
        age: Joi.number().required(),
        phone: Joi.string().required(),
      }),
    file: Joi.object().required(),
  },

  userSignIn: {
    body: Joi.object()
      .required()
      .keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required().label("Password"),
        password_confirmation: Joi.any()
          .equal(Joi.ref("password"))
          .required()
          .label("Confirm password")
          .options({
            messages: {
              "any.only": "{{#label}} does not match",
            },
          }),
      }),
  },
  updateUser: {
    params: Joi.object().required().keys({
      id: Joi.string().required()
    }),
    body: Joi.object().required().keys({
      userName: Joi.string().required(),
      age: Joi.number().required(),
      phone: Joi.string().required()
    }),
    file: Joi.object().required()
  },
  updatePassword: {
    body: Joi.object().required().keys({
      newPassword: Joi.string().required(),
      password: Joi.string().min(3).max(15).required().label('Password'),
      password_confirmation: Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({
          'any.only': '{{#label}} does not match'
        })
    })
  },
  deActiveUser: {
    params: Joi.object().required().keys({
      id: Joi.string().required()
    })
  }
};