const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    isBlocked: {
      type: Boolean,
      required: true,
      default: false,
    },
  
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
