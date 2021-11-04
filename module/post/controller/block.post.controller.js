const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const block_post = async (req, res) => {

    let {
        id
    } = req.params;
    try {

        const post = await postModel.findOne({
            _id: id
        });
        if (post) {

            const blockedPost = await postModel.findOneAndUpdate({
                _id: id
            }, {
                isBlocked: true
            }, {
                new: true
            });
            res.status(StatusCodes.OK).json({
                nessage: "success post blocked",
                blockedPost
            });
        } else {

            res.json({
                message: "in-valid post post doesn't exist..!"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = block_post;