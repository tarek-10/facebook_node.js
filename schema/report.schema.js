const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    postID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
});

module.exports = reportSchema;