const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const edit_post = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        title,
        content
    } = req.body;

    try {

        const post = await postModel.findOne({
            _id: id
        });
        if (post) {
            const editPost = await postModel.findByIdAndUpdate({
                _id: id
            }, {
                title,
                content
            }, {
                new: true
            });
            res.status(StatusCodes.OK).json({
                message: "success edit post",
                editPost
            });
        } else {

            res.json({
                message: "in-valid post post doesn't exist...!"
            });
        }

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}

module.exports = edit_post;