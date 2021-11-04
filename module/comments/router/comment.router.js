const express = require("express");
const validationResult = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const { CREATE_COMMMENT } = require("../endPoints");
const { createComment } = require("../joi/comment.validation");
const router = express.Router();

//create comment
const commentsOnPosts = require("../controller/create.postComment.controller");
router.post("/comment/create",validationResult(createComment),isAuthorized(CREATE_COMMMENT),commentsOnPosts)
//end
module.exports = router;