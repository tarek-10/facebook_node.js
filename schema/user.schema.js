const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,

  },
  phone: {
    type: String,

  },
  userProfile: {
    type: String
  },
  role: {
    type: String,
    default: "user",
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  googleId: {
    type: String
  },
}, {
  timestamps: true
});

module.exports = userSchema;