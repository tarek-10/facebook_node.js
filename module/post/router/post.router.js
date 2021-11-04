const express = require("express");

const router = express.Router();
const validationResult = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const {
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    BLOCKED_POST,
    POST_REPORT
} = require("../endPoints");
const {
    createPost,
    editPost,
    deletePost,
    blockedPost
} = require("../joi/post.validation");

//create post by super_admin admin and user
const createPosts = require("../controller/createPost.controller");
router.post("/post/create", validationResult(createPost), isAuthorized(CREATE_POST), createPosts);
//end

// SET DATA IN REDIX
const redis = require("redis");
const client = redis.createClient(6379);

const postCash = (req, res, next) => {
    client.get("posts", (err, data) => {
        if (err) throw err;
        if (data != null) {
            res.json({
                message: "success from cash",
                data: JSON.parse(data)
            });
        } else {
            next();
        }
    })
}
//END
//get posts and it's comments
const getPostsAndComments = require("../controller/getPost.controller");
router.get("/post/display", postCash, getPostsAndComments)
//end

//edit posts
const edit_post = require("../controller/edit_post.controller");
router.patch("/post/edit/:id", validationResult(editPost), isAuthorized(EDIT_POST), edit_post);
//end

//delete posts
const delete_post = require("../controller/delete_post.controller");
router.delete("/post/delete/:id", validationResult(deletePost), isAuthorized(DELETE_POST), delete_post)
//end

//blocked post
const block_post = require("../controller/block.post.controller");
router.patch("/post/block/:id", validationResult(blockedPost), isAuthorized(BLOCKED_POST), block_post);
//end

//get post not blocked
const displayActivePost = require("../controller/getActivePost.controller");
router.get("/post/ready/", displayActivePost);
//end

//report posts
const postReportsDetails = require("../controller/postReport.controller");
router.get("/post/reports/", isAuthorized(POST_REPORT), postReportsDetails);
//end


module.exports = router;