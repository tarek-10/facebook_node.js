const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const getAdminList = async (req, res) => {

    try {

        const user = await userModel.find({
            role: 'admin'
        });
        res.status(StatusCodes.OK).json({
            message: "success",
            user
        });

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = getAdminList;