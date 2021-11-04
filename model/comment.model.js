const mongoose = require("mongoose");
const commentSchema = require("../schema/comment.schema");

const commentModel = mongoose.model('comment',commentSchema);

module.exports = commentModel;