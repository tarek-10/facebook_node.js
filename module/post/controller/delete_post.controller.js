const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const delete_post = async (req, res) => {

    let {
        id
    } = req.params;
    try {

        const post = await postModel.findOne({
            _id: id
        });
        if (post) {

            const deletedPost = await postModel.deleteOne({
                _id: id
            });
            res.status(StatusCodes.OK).json({
                message: "post deleted successfully...!",
                deletedPost
            });
        } else {

            res.json({
                message: "in-valid post post not exist"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = delete_post;