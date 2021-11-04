const {
    StatusCodes
} = require("http-status-codes");
const commentModel = require("../../../model/comment.model");

const commentsOnPosts = async (req, res) => {

    const {
        userID,
        postID,
        commentContent
    } = req.body;

    try {

        const comment = await commentModel.insertMany({
            userID,
            postID,
            commentContent
        });
        res.status(StatusCodes.CREATED).json({
            message: "comment created successfully...!",
            comment
        });
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}

module.exports = commentsOnPosts;