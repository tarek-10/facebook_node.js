const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'post'
    },
    commentContent: {
        type: String,
        required: true
    }
});

module.exports = commentSchema;