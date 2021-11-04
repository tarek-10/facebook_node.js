const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const displayActivePost = async (req, res) => {

    try {
        const posts = await postModel.find({
            isBlocked: false
        });

        res.status(StatusCodes.OK).json({
            message: "success exist posts",
            posts
        });
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = displayActivePost;