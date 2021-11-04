const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const deactive_user = async (req, res) => {

    let {
        id
    } = req.params;

    try {
        const user = await userModel.findOne({
            _id: id
        });
        if (user) {
            const deActiveUser = await userModel.findOneAndUpdate({
                _id: id
            }, {
                isActive: false
            });
            res.status(StatusCodes.OK).json({
                message: "success user DeActived",
                deActiveUser
            });
        } else {
            res.json({
                message: "in-valid user user not found"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}

module.exports = deactive_user;