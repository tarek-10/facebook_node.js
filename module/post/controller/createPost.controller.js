const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const createPosts = async (req, res) => {

    const {
        title,
        content,
        createdBy
    } = req.body;

    try {
        const post = await postModel.insertMany({
            title,
            content,
            createdBy
        });
        res.status(StatusCodes.CREATED).json({
            message: "post created successfully...!",
            post
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = createPosts;