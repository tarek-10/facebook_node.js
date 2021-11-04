const mongoose = require("mongoose");

const advertiseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports =advertiseSchema;